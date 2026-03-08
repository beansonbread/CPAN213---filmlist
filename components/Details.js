import { useContext } from 'react';
import {Button} from "react-native";
import { FavouritesContext } from './FavouritesContext';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from "./StyleSheet"

export default function Details({ route }) {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
    const movie = route?.params?.movie;
    const isFavourite = favourites.some((item) => item.id === movie?.id);

    if (!movie) {
        return (
            <View style={styles.container}>
                <Text>No movie selected.</Text>
            </View>
        )
    }

    const posterUri = movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : undefined;
    const rating = typeof movie?.vote_average === 'number' ? movie.vote_average.toFixed(1) : '—';
    const year = movie?.release_date ? String(movie.release_date).slice(0, 4) : '';

    const handleFavourite = () => {
    if (isFavourite) {
        removeFromFavourites(movie.id);
    } else {
        addToFavourites(movie);
    }
}

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.screenPadding}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={posterUri ? { uri: posterUri } : undefined}
                    style={styles.detailsPoster}
                />
            </View>

            <Text style={styles.detailsTitle}>{movie.title}</Text>
            <Text style={styles.subtitle}>
                {year ? `${year} • ` : ''}Rating {rating}
            </Text>
            <Text style={styles.detailsOverview}>{movie.overview}</Text>
            <TouchableOpacity style={styles.button} onPress={handleFavourite}>
                <Text style={styles.buttonText}>
    {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}