import React from "react";
import Logo from "../../commons/logo";
import { theme } from "../../theme/types";
import GoogleIcon from "../../../assets/icons/Small/GoogleIcon";

import {
  LogoContainer,
  LoginBodyContainer,
  LoginHeaderText,
  Input,
  Button,
  ButtonText,
  ForgotPassword,
  ForgotPasswordText,
  AlternativeSign,
  Alternative,
  GoogleIconContainer,
} from "./styles";

const AuthForm = ({
  headerText,
  inputs,
  buttonText,
  handlePress,
  forgotPassword,
  alternativeSign,
  alternativeSign2,
  authType,
}) => {
  const { colors } = theme;

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
            placeholderTextColor={theme.colors.MEDIUM_GRAY}
          />
        ))}
        <Button onPress={handlePress}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
        {forgotPassword ? (
          <ForgotPassword style={{ alignSelf: "flex-end" }}>
            <ForgotPasswordText>{forgotPassword}</ForgotPasswordText>
          </ForgotPassword>
        ) : null}
        <AlternativeSign>{alternativeSign}</AlternativeSign>
        <GoogleIconContainer>
          <GoogleIcon />
        </GoogleIconContainer>
        <Alternative>
          <AlternativeSign>{alternativeSign2}</AlternativeSign>
          <AlternativeSign style={{ color: colors.BLUE_LINK_TEXT }}>
            {authType}
          </AlternativeSign>
        </Alternative>
      </LoginBodyContainer>
    </>
  );
};

export default AuthForm;
