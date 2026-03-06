import { Text, View, Button} from 'react-native';
import { styles } from "./StyleSheet"
import { useNavigation } from '@react-navigation/native';

export default function Favourites() {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>This is the favourites page</Text>
            <Button title='Categories' onPress={() => navigation.navigate('Categories')}/>
        </View>
        </>
    )
}