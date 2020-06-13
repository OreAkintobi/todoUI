import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const LoginBodyContainer = styled.View`
  margin-top: 40px;
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
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  height: 60px;
  width: 100%;
  align-self: flex-start;
  border: 0.5px solid ${theme.colors.DARK_COLOR_LOW_OPACITY};
  box-shadow: 0px 0px 4px rgba(50, 107, 216, 0.25);
  font-family: ${theme.fonts.RobotoRegular};
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  height: 60px;
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
