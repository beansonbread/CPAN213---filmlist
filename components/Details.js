import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from "./StyleSheet"

export default function Details({ route }) {
    const movie = route?.params?.movie;

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
        console.log("added.")
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
                <Text style={styles.buttonText}>Add to Favourites</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}