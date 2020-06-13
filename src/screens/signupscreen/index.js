import React from "react";
import SafeAreaView from "../../commons/safe-area-view";
import AuthForm from "../../components/AuthForm";

import { Container } from "./styles";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <AuthForm
          headerText="Create your account"
          inputs={["Email", "Password", "Confirm Password"]}
          buttonText="Sign up"
          handlePress={() => navigation.navigate("LoginScreen")}
        />
      </Container>
    </SafeAreaView>
  );
};

export default SignupScreen;
