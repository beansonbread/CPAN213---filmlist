import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import Details from "./components/Details";
import Favourites from "./components/Favourites";
import Categories from "./components/Categories";
import {Ionicons, MaterialIcons} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={({ navigation }) => ({
          headerRight: () => (
            <>
            <TouchableOpacity onPress={() => navigation.navigate("Favourites")}>
              <Ionicons name="heart" size={24} color="red" style={{ marginRight: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <MaterialIcons name="category" size={24} color="black" style={{ marginRight: 15 }} />
          </TouchableOpacity>
          </>
          ),
        })} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Favourites' component={Favourites} />
        <Stack.Screen name='Categories' component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}