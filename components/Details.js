import { Text, View, Button} from 'react-native';
import { styles } from "./StyleSheet"
import { useNavigation } from '@react-navigation/native';

export default function Details() {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>This is the movie details page</Text>
            <Button title='Favourites' onPress={() => navigation.navigate('Favourites')}/>
        </View>
        </>
    )
}