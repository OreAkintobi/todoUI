import React from "react";
import { useFonts } from "@use-expo/font";
import { View, ActivityIndicator } from "react-native";
import AppRouter from "./src";
import fonts from "./src/libs/fonts";

export default () => {
  let [fontsLoaded] = useFonts({ ...fonts });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  } else return <AppRouter />;
};
