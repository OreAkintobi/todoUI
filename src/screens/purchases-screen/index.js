import React from "react";
import { Button } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import { Container, MidText } from "./styles";

const PurchasesScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <MidText>This is the Purchases Screen.</MidText>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </Container>
    </SafeAreaView>
  );
};

export default PurchasesScreen;
