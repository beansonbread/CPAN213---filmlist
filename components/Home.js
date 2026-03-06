import { Text, View, Button} from 'react-native';
import { styles } from "./StyleSheet"
import { useNavigation } from '@react-navigation/native';

export default function Home() {
const navigation = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>This is the home page</Text>
            <Button title='Details' onPress={() => navigation.navigate('Details')}/>
        </View>
        </>
    )
}