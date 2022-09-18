import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DetailScreen } from "../screens/DetailScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { appNavigationParamList } from "./AppNavigationParamList";

export function Content() {
  const Stack = createNativeStackNavigator<appNavigationParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}