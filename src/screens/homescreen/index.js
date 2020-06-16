import React from "react";
import { ScrollView, StatusBar } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import { theme } from "../../theme/types";
import Header from "../../commons/header";
import TopBar from "../../components/TopBar";
import BuyAirtimeIcon from "../../../assets/icons/BuyAirtimeIcon";
import BuyDataIcon from "../../../assets/icons/BuyDataIcon";
import ContactIcon from "../../../assets/icons/ContactIcon";
import PricingIcon from "../../../assets/icons/PricingIcon";
import WalletHistoryIcon from "../../../assets/icons/WalletHistoryIcon";
import WalletIcon from "../../../assets/icons/WalletIcon";
import WalletIconSmall from "../../../assets/icons/Small/WalletIconSmall";
import NotificationIcon from "../../../assets/icons/Small/NotificationIcon";

import {
  Container,
  ActivitiesContainer,
  Activity,
  ActivityCaption,
  ActivitySelector,
  AdvertSpace,
  AdvertText,
  WalletText,
} from "./styles";

const activityItems = [
  { caption: "wallet", screen: "WalletScreen", icon: <WalletIcon /> },
  { caption: "buy data", screen: "DataScreen", icon: <BuyDataIcon /> },
  { caption: "buy airtime", screen: "AirtimeScreen", icon: <BuyAirtimeIcon /> },
  { caption: "wallet history", screen: null, icon: <WalletHistoryIcon /> },
  { caption: "pricing", screen: null, icon: <PricingIcon /> },
  { caption: "contact", screen: null, icon: <ContactIcon /> },
];

const HomeScreen = ({ navigation }) => {
  const { colors, fonts } = theme;

  return (
    <SafeAreaView>
      <Header title="DataNow" headerRight={() => <NotificationIcon />} />
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
          <ActivitiesContainer>
            {activityItems.map((item) => (
              <Activity key={item.caption}>
                <ActivitySelector
                  onPress={() => {
                    item.screen ? navigation.navigate(item.screen) : null;
                  }}
                >
                  {item.icon}
                </ActivitySelector>
                <ActivityCaption>{item.caption}</ActivityCaption>
              </Activity>
            ))}
          </ActivitiesContainer>
          <AdvertSpace>
            <AdvertText>Advert here</AdvertText>
          </AdvertSpace>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
