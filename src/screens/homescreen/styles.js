import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.COLOR_WHITE};
`;

export const ActivitiesContainer = styled.View`
  margin-top: 30px;
  height: 224px;
  width: 100%;
  border-radius: 25px;
  background-color: ${theme.colors.OFF_WHITE};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const Activity = styled.View`
  width: 96px;
  height: 83px;
  margin-top: 5px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ActivitySelector = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  align-items: center;
  justify-content: center;
`;

export const ActivityCaption = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
`;

export const AdvertSpace = styled.TouchableOpacity`
  width: 90%;
  height: 77px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.MEDIUM_GRAY};
`;

export const AdvertText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: capitalize;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
`;

export const WalletText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-family: ${theme.fonts.RobotoBold};
  color: ${theme.colors.COLOR_WHITE};
`;
