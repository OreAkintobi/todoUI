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

export const HeaderRegular = styled.Text`
  font-family: ${theme.fonts.FUTURA_MD_LIGHT};
  font-size: 40px;
`;

export const AddList = styled.TouchableOpacity`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 1px solid ${theme.colors.DARK_GRAY};
  border-radius: 5px;
`;

export const TaskBoxContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-left: 80px;
  align-items: flex-start;
  width: 100%;
`;
