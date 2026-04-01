import { useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { setFavourites } from "../redux/action/favouriteActions";
import { styles } from "./StyleSheet";

export default function Favourites() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favouritesState.favourites);

  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "favourites"));
        const savedMovies = querySnapshot.docs.map((item) => item.data());
        dispatch(setFavourites(savedMovies));
      } catch (error) {
        Alert.alert("Database Error", "Could not load favourites from Firestore.");
        console.log(error);
      }
    };

    loadFavourites();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {favourites.length === 0 ? (
        <>
          <Text style={styles.title}>No favourites yet</Text>
          <Text>Add movies from the Details screen</Text>
        </>
      ) : (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Details", { movie: item })}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}