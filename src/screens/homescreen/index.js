import React from "react";
import { useThemeContext } from "../../theme";
import SafeAreaView from "../../commons/safe-area-view";
import { Container, MidText } from "./styles";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <MidText>Open up App.js to start working on your app!</MidText>
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
