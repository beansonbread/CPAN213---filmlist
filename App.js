import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import Details from "./components/Details";
import Favourites from "./components/Favourites";
import Categories from "./components/Categories";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Favourites' component={Favourites} />
        <Stack.Screen name='Categories' component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}