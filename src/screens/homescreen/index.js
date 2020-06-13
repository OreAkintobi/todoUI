import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/types";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.fonts.RobotoMediumItalic,
  },
});
