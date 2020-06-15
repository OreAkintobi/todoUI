import styled from "styled-components/native";
import { theme } from "../../theme/types";

export const Container = styled.View`
  margin-top: 15px;
  width: 100%;
  height: 74px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.DARK_COLOR_LOW_OPACITY};
`;

export const TransactionType = styled.View`
  height: 74px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const TransactionDetailsContainer = styled.View`
  height: 74px;
  width: 120px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TransactionTypeText = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-family: ${theme.fonts.RobotoBold};
  color: ${theme.colors.DARK_TEXT};
  text-transform: uppercase;
`;

export const TransactionDetails = styled.Text`
  font-size: 19px;
  line-height: 19px;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
  text-transform: uppercase;
`;

export const TransactionDate = styled.Text`
  font-size: 8px;
  line-height: 9px;
  font-family: ${theme.fonts.RobotoRegular};
  color: ${theme.colors.DARK_TEXT};
  text-transform: capitalize;
`;

// export const TransactionAmount = styled.Text`
// font-size: 19px;
// line-height: 19px;
// font-family: ${theme.fonts.RobotoReguar};
// color: ${theme.colors.DARK_TEXT}
// `;
