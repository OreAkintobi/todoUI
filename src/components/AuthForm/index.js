import React from "react";
import Logo from "../../commons/logo";
import { theme } from "../../theme/types";

import {
  LogoContainer,
  LoginBodyContainer,
  LoginHeaderText,
  Input,
  Button,
  ButtonText,
} from "./styles";

const SignupScreen = ({ headerText, inputs, buttonText, handlePress }) => {
  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginBodyContainer>
        <LoginHeaderText>{headerText}</LoginHeaderText>
        {inputs.map((input, index) => (
          <Input
            key={index}
            placeholder={input}
            placeholderTextColor={theme.colors.LIGHT_GRAY_TEXT}
          />
        ))}
        <Button onPress={handlePress}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </LoginBodyContainer>
    </>
  );
};

export default SignupScreen;
