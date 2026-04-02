import { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { addFavourite, removeFavourite } from '../redux/action/favouriteActions';
import { styles } from "./StyleSheet";

export default function Details({ route }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favouritesState.favourites);
  const [saving, setSaving] = useState(false);
  const movie = route?.params?.movie;
  const isFavourite = favourites.some((item) => item.id === movie?.id);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text>No movie selected.</Text>
      </View>
    );
  }

  const posterUri = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : undefined;

  const rating =
    typeof movie?.vote_average === "number" ? movie.vote_average.toFixed(1) : "—";

  const year = movie?.release_date ? String(movie.release_date).slice(0, 4) : "";

  const handleFavourite = async () => {
    try {
      setSaving(true);
      const favouriteRef = doc(db, "favourites", String(movie.id));

      if (isFavourite) {
        await deleteDoc(favouriteRef);
        dispatch(removeFavourite(movie.id));
      } else {
        await setDoc(favouriteRef, movie);
        dispatch(addFavourite(movie));
      }
    } catch (error) {
      Alert.alert("Database Error", "Could not update favourites in Firestore.");
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.screenPadding}>
      <View style={{ alignItems: "center" }}>
        <Image source={posterUri ? { uri: posterUri } : undefined} style={styles.detailsPoster} />
      </View>

      <Text style={styles.detailsTitle}>{movie.title}</Text>
      <Text style={styles.subtitle}>
        {year ? `${year} • ` : ""}Rating {rating}
      </Text>
      <Text style={styles.detailsOverview}>{movie.overview}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFavourite} disabled={saving}>
        <Text style={styles.buttonText}>
          {saving
            ? "Saving..."
            : isFavourite
            ? "Remove from Favourites"
            : "Add to Favourites"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}