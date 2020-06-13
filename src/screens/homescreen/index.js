import React from "react";
import { useThemeContext } from "../../theme";
import SafeAreaView from "../../commons/safe-area-view";
import { Container, MidText } from "./styles";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <MidText>This is the Home Screen.</MidText>
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
