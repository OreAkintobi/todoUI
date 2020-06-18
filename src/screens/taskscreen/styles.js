import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  margin-top: 60px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBold = styled.Text`
  font-family: ${theme.fonts.FUTURA_MD_MEDIUM};
  font-size: 40px;
`;
