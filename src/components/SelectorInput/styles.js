import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  width: 100%;
  height: 37px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const LabelTextContainer = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-family: ${theme.fonts.RobotoMedium};
  text-align: center;
  font-size: 12px;
  line-height: 14px;
`;

export const InputContainer = styled.View`
  height: 37px;
  width: 218px;
  justify-content: flex-end;
  /* border: 1px solid black; */
`;

export const Input = styled.TextInput`
  text-decoration: underline;
  border-bottom-width: 1px;
`;
