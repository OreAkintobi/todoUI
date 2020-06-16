import React from "react";
import { ScrollView } from "react-native";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import TopBar from "../../components/TopBar";
import TransactionTicker from "../../components/TransactionTicker";
import Header from "../../commons/header";
import WalletIconSmall from "../../../assets/icons/Small/WalletIconSmall";
import FundIconSmall from "../../../assets/icons/Small/FundIconSmall";
import UpIcon from "../../../assets/icons/Small/UpIcon";
import DownIcon from "../../../assets/icons/Small/DownIcon";

import {
  Container,
  WalletText,
  HeaderText,
  BodyContainer,
  SeeMoreButton,
  SeeMoreText,
} from "./styles";

const WalletScreen = ({ navigation }) => {
  const { colors } = theme;

  const transactionItems = [
    {
      type: "Deposit",
      header: "deposit",
      caption: "trf from gtb",
      date: "12th April, 2012 5:15pm",
      amount: "₦11,000",
    },
    {
      type: "Purchase",
      header: "airtime purchase",
      caption: "airtel ₦2500",
      date: "12th April, 2012 5:15pm",
      amount: "₦2500",
    },
    {
      type: "Purchase",
      header: "data purchase",
      caption: "mtn 5.5gb",
      date: "12th April, 2012 5:15pm",
      amount: "₦1,500",
    },
  ];

  const placeIcon = (type) => {
    if (type === "Purchase") {
      return <DownIcon />;
    } else if (type === "Deposit") {
      return <UpIcon />;
    }
  };

  return (
    <SafeAreaView>
      <Header title="Wallet" headerLeft />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <TopBar
            background={colors.DARK_COLOR_HIGH_OPACITY}
            icon={<WalletIconSmall />}
            child={<WalletText>SIGN IN</WalletText>}
            handleInstruction={() => navigation.navigate("LoginScreen")}
            textColor={colors.COLOR_WHITE}
            captionText="Wallet Balance"
          />
          <TopBar
            background={colors.LIGHT_GRAY}
            icon={<FundIconSmall />}
            child={
              <WalletText style={{ color: colors.DARK_TEXT }}>
                SIGN IN
              </WalletText>
            }
            handleInstruction={() => {}}
            textColor={colors.DARK_TEXT}
            captionText="Fund your wallet"
          />
          <BodyContainer>
            <HeaderText>Recent transactions</HeaderText>
            {transactionItems.map((item, index) => (
              <TransactionTicker
                key={index}
                icon={placeIcon(item.type)}
                header={item.header}
                caption={item.caption}
                date={item.date}
                amount={item.amount}
              />
            ))}
          </BodyContainer>
          <SeeMoreButton>
            <SeeMoreText>See more</SeeMoreText>
          </SeeMoreButton>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletScreen;
