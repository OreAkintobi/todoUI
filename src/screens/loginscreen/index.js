import React from "react";
import { Button } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import { Container, MidText } from "./styles";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <MidText>This is the Login Screen.</MidText>
        <Button
          title="Go to home screen"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </Container>
    </SafeAreaView>
  );
};

export default LoginScreen;
