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

      <AppStack.Screen
        name="AirtimeScreen"
        component={Screens.AirtimeScreen}
        options={{
          headerShown: true,
          title: "Airtime",
          headerBackTitleVisible: false,
        }}
      />

      <AppStack.Screen
        name="WalletScreen"
        component={Screens.WalletScreen}
        options={{
          headerShown: true,
          title: "Wallet",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.DARK_COLOR_HIGH_OPACITY,
          },
          headerTitleStyle: {
            color: theme.colors.COLOR_WHITE,
          },
        }}
      />
    </AppStack.Navigator>
  );
}
