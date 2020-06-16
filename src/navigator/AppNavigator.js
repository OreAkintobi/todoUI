import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../screens";
import { theme } from "../theme/types";
import BottomNavigator from "./BottomNavigator";

const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="HomeScreen" component={BottomNavigator} />

      <AppStack.Screen name="AirtimeScreen" component={Screens.AirtimeScreen} />

      <AppStack.Screen name="DataScreen" component={Screens.DataScreen} />

      <AppStack.Screen name="WalletScreen" component={Screens.WalletScreen} />
    </AppStack.Navigator>
  );
}
