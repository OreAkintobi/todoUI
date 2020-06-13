import React from "react";
import { Button } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import { Container, MidText } from "./styles";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <MidText>This is the Home Screen.</MidText>
        <Button
          title="Go to Airtime Screen"
          onPress={() => navigation.navigate("AirtimeScreen")}
        />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
