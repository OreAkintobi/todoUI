import React from "react";
import { useFonts } from "@use-expo/font";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import AppRouter from "./src";
import fonts from "./src/libs/fonts";

export default () => {
  let [fontsLoaded] = useFonts({ ...fonts });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else return <AppRouter />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
