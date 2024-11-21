import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import FruitsScreen from "./Fruits";
import Vegetables from "./Vegetables";
import Meat from "./Meat";
import Dairies from "./Dairies";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import DetailsScreen from "./DetailsScreen";
import CartScreen from "./CartScreen";
import { CartProvider } from "./CartContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          {/* Auth Screens */}
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ title: "Signup" }}
          />

          {/* Main Screens */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name="Fruits"
            component={FruitsScreen}
            options={{ title: "Fruits" }}
          />
          <Stack.Screen
            name="Vegetables"
            component={Vegetables}
            options={{ title: "Vegetables" }}
          />
          <Stack.Screen
            name="Meat"
            component={Meat}
            options={{ title: "Meat" }}
          />
          <Stack.Screen
            name="Dairies"
            component={Dairies}
            options={{ title: "Dairies" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "Details" }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: "Cart" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
