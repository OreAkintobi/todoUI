import React from "react";
import SafeAreaView from "../../commons/safe-area-view";
import Logo from "../../commons/logo";
import AuthForm from "../../components/AuthForm";

import { Container } from "./styles";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <AuthForm
          headerText="Login to your Account"
          inputs={["Email", "Password"]}
          buttonText="Sign in"
          handlePress={() => navigation.navigate("HomeScreen")}
          forgotPassword="Forgot password?"
          alternativeSign="or sign in with"
          alternativeSign2="Don't have an account?"
          authType=" Sign up"
        />
      </Container>
    </SafeAreaView>
  );
};

export default LoginScreen;
