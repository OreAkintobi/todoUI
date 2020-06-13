import React from "react";
import SafeAreaView from "../../commons/safe-area-view";
import Logo from "../../commons/logo";
import { theme } from "../../theme/types";

import {
  Container,
  LoginBodyContainer,
  LoginHeaderText,
  Input,
  Button,
  ButtonText,
} from "./styles";

const SignupScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <Logo />
        <LoginBodyContainer>
          <LoginHeaderText>Create your account</LoginHeaderText>
          <Input
            placeholder="Email"
            placeholderTextColor={theme.colors.LIGHT_GRAY_TEXT}
          />
          <Input
            placeholder="Password"
            placeholderTextColor={theme.colors.LIGHT_GRAY_TEXT}
          />
          <Input
            placeholder="Confirm Password"
            placeholderTextColor={theme.colors.LIGHT_GRAY_TEXT}
          />
          <Button>
            <ButtonText>Sign up</ButtonText>
          </Button>
        </LoginBodyContainer>
      </Container>
    </SafeAreaView>
  );
};

export default SignupScreen;
