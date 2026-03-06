import { Text, View, FlatList, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { styles } from "./StyleSheet"
import axios from "axios"
import { useEffect, useState } from 'react';

const api_key = "edc73a6e7c328ce7b027c833d7234082"
const GAP = 8;
const H_PADDING = 16;

export default function Home({ navigation }) {
    const [movies, setMovies] = useState([]);
    const { width } = useWindowDimensions();

    const numColumns = width > 600 ? 4 : width > 400 ? 3 : 2;
    const cardWidth = (width - H_PADDING * 2 - GAP * (numColumns - 1)) / numColumns;

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
            )
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const displayMovie = ({ item }) => {
        const posterUri = item?.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : undefined;
        const rating = typeof item?.vote_average === 'number' ? item.vote_average.toFixed(1) : '';
        const year = item?.release_date ? String(item.release_date).slice(0, 4) : '';

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Details', { movie: item })}
            >
                <View style={[styles.card, { width: cardWidth }]}>
                    <Image
                        source={posterUri ? { uri: posterUri } : undefined}
                        style={styles.poster}
                    />
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.subtitle} numberOfLines={1}>
                        {year}{year && rating ? ' • ' : ''}{rating ? `Rating ${rating}` : ''}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={displayMovie}
                numColumns={numColumns}
                columnWrapperStyle={numColumns > 1 ? { marginBottom: GAP, gap: GAP } : undefined}
                scrollEnabled={true}
                contentContainerStyle={styles.screenPadding}
            />
        </View>
    )
}