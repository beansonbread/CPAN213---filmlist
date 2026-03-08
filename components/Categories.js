import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "./StyleSheet";
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
];

export default function Categories() {
  const navigation = useNavigation();

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#333",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      }}
      onPress={() =>
        navigation.navigate("Home", {
          selectedGenreId: item.id,
          selectedGenreName: item.name,
        })
      }
    >
      <Text style={{ color: "white", fontSize: 16 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}