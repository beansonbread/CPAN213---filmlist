import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./StyleSheet";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function Favourites() {
  const navigation = useNavigation();
  const { favourites, loading, error } = useSelector(
    (state) => state.favouritesState
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading favourites...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

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