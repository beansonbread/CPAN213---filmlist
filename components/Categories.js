import { Text, View, Button} from 'react-native';
import { styles } from "./StyleSheet"
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>This is the categories page</Text>
            <Button title='Home' onPress={() => navigation.navigate('Home')}/>
        </View>
        </>
    )
}