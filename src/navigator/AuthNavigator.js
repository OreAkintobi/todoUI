import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./AppNavigator";
import Screens from "../screens";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="SignupScreen"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignupScreen" component={Screens.SignupScreen} />
      <AuthStack.Screen name="LoginScreen" component={Screens.LoginScreen} />
      <AuthStack.Screen name="HomeScreen" component={AppNavigator} />
    </AuthStack.Navigator>
  );
}
