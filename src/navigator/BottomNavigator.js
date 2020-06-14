import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { theme } from "../theme/types";
import TabBarLabel from "../commons/tab-bar-label";
import Screens from "../screens";
import HairCareIcon from "../../assets/icons/hair_care";
import { IconContainer } from "./styles";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = theme;

  return (
    <Tab.Navigator
      activeColor={colors.DARK_TEXT}
      inactiveColor={colors.DARK_GRAY_TEXT}
      barStyle={{ backgroundColor: colors.COLOR_WHITE }}
      initialRouteName="HomeScreen"
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <HairCareIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Regimen" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />

      <Tab.Screen
        name="PurchasesScreen"
        component={Screens.PurchasesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <HairCareIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Purchases" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={Screens.SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <HairCareIcon fillColor={color} isFocused={focused} />
              <TabBarLabel label="Settings" {...{ color, focused }} />
            </IconContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
