import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const BalanceContainer = styled.View`
  height: 235px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.colors.DARK_COLOR_HIGH_OPACITY};
`;
export const ProfileLine = styled.View`
  margin-top: 15px;
  height: 28px;
  width: 90%;
  align-items: flex-end;
`;
export const ProfileContainer = styled.TouchableOpacity`
  height: 28px;
  width: 89px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ProfileImage = styled.View`
  height: 28px;
  width: 26px;
  background-color: ${theme.colors.COLOR_WHITE};
  border-radius: 5px;
`;

export const ProfileName = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.COLOR_WHITE};
`;

export const WalletContainer = styled.View`
  width: 100%;
  margin-top: 60px;
  height: 88px;
  justify-content: space-around;
  align-items: center;
`;

export const WalletAmountContainer = styled.View`
  flex-direction: row;
`;

export const WalletAmount = styled.Text`
  font-size: 52px;
  line-height: 61px;
  font-family: ${theme.fonts.RobotoMedium};
  color: ${theme.colors.COLOR_WHITE};
`;

export const WalletText = styled.Text`
  font-size: 18px;
  line-height: 21px;
  font-family: ${theme.fonts.RobotoThin};
  color: ${theme.colors.COLOR_WHITE};
`;
