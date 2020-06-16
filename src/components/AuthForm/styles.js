import styled from "styled-components/native";
import { theme } from "../../theme/types";
import applyScale from "../../utils/applyScale";

export const LogoContainer = styled.View`
  height: ${applyScale(180)}px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const LoginBodyContainer = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const LoginHeaderText = styled.Text`
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 24px;
  align-self: flex-start;
`;

export const Input = styled.TextInput`
  margin-top: ${applyScale(10)}px;
  margin-bottom: ${applyScale(10)}px;
  padding-left: 10px;
  height: ${applyScale(60)}px;
  width: 100%;
  align-self: flex-start;
  border: 0.5px solid ${theme.colors.DARK_COLOR_LOW_OPACITY};
  box-shadow: 0px 0px 4px rgba(50, 107, 216, 0.25);
  font-family: ${theme.fonts.RobotoRegular};
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${applyScale(10)}px;
  margin-bottom: ${applyScale(10)}px;
  padding-left: 10px;
  height: ${applyScale(60)}px;
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.DARK_TEXT};
  box-shadow: 0px 0px 4px rgba(50, 107, 216, 0.25);
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.COLOR_WHITE};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 24px;
  line-height: 28px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  color: ${theme.colors.BLUE_LINK_TEXT};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 14px;
  line-height: 16px;
`;

export const AlternativeSign = styled.Text`
  color: ${theme.colors.DARK_GRAY};
  font-family: ${theme.fonts.RobotoRegular};
  font-size: 20px;
  line-height: 23px;
  margin-bottom: ${applyScale(5)}px;
  margin-top: ${applyScale(10)}px;
`;

export const Alternative = styled.View`
  flex-direction: row;
  margin-top: ${applyScale(10)}px;
`;

export const GoogleIconContainer = styled.TouchableOpacity`
  width: ${applyScale(40)}px;
  height: ${applyScale(40)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${theme.colors.LIGHT_GRAY};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
