import React from "react";
import Logo from "../../commons/logo";
import { theme } from "../../theme/types";

import {
  BalanceContainer,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileLine,
  WalletContainer,
  WalletAmountContainer,
  WalletAmount,
  WalletText,
} from "./styles";

const WalletBalance = () => {
  return (
    <>
      <BalanceContainer>
        <ProfileLine>
          <ProfileContainer>
            <ProfileName>Anifowoshe</ProfileName>
            <ProfileImage></ProfileImage>
          </ProfileContainer>
        </ProfileLine>
        <WalletContainer>
          <WalletAmountContainer>
            <WalletAmount
              style={{
                fontSize: 22,
                lineHeight: 26,
              }}
            >
              ₦
            </WalletAmount>
            <WalletAmount>3,200</WalletAmount>
          </WalletAmountContainer>
          <WalletText>Wallet Balance</WalletText>
        </WalletContainer>
      </BalanceContainer>
    </>
  );
};

export default WalletBalance;
