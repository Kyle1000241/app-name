import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen.js/index.js";
import ExerciseScreen from "./screens/ExerciseScreen.js";
import ListScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
import MenuScreen from "./screens/MenuScreen";
import StudentsScreen from "./screens/StudentsScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Excercise" component={ExcerciseScreen} ></Stack.Screen>
        <Stack.Screen name="Home" component={MenuScreen}></Stack.Screen>
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Box2" component={BoxScreen2} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});