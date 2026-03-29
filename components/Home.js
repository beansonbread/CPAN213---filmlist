import { Text, View, FlatList, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { styles } from "./StyleSheet"
import axios from "axios"
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import {
    fetchMoviesStart,
    fetchMoviesSuccess,
    fetchMoviesFail,
} from "../redux/action/movieFetchAction";


const api_key = "edc73a6e7c328ce7b027c833d7234082"
const GAP = 8;
const H_PADDING = 16;

export default function Home({ navigation, route }) {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movieState);
    const selectedGenreId = route?.params?.selectedGenreId;
    const { width } = useWindowDimensions();

    const numColumns = width > 600 ? 4 : width > 400 ? 3 : 2;
    const cardWidth = (width - H_PADDING * 2 - GAP * (numColumns - 1)) / numColumns;

    useEffect(() => {
        const load = async () => {
            dispatch(fetchMoviesStart());
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
                dispatch(fetchMoviesSuccess(res.data.results))
            } catch (e) {
                dispatch(fetchMoviesFail("Could not load movies. Please Try again later."))
            }
        };
        load();
    }, [dispatch]);

    const filteredMovies = selectedGenreId
        ? movies.filter((movie) => movie.genre_ids?.includes(selectedGenreId))
        : movies;

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading movies...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.screenPadding}>
                <Text style={styles.loadText}>{error}</Text>
            </View>
        );
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
                data={filteredMovies}
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