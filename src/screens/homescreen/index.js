import React from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import WalletBalance from "../../components/WalletBalance";
import BuyAirtimeIcon from "../../../assets/icons/BuyAirtimeIcon";
import BuyDataIcon from "../../../assets/icons/BuyDataIcon";
import ContactIcon from "../../../assets/icons/ContactIcon";
import PricingIcon from "../../../assets/icons/PricingIcon";
import WalletHistoryIcon from "../../../assets/icons/WalletHistoryIcon";
import WalletIcon from "../../../assets/icons/WalletIcon";

import {
  Container,
  ActivitiesContainer,
  Activity,
  ActivityCaption,
  ActivitySelector,
  AdvertSpace,
  AdvertText,
} from "./styles";

const activityItems = [
  { caption: "wallet", screen: "WalletScreen", icon: <WalletIcon /> },
  { caption: "buy data", screen: null, icon: <BuyDataIcon /> },
  { caption: "buy airtime", screen: null, icon: <BuyAirtimeIcon /> },
  { caption: "wallet history", screen: null, icon: <WalletHistoryIcon /> },
  { caption: "pricing", screen: null, icon: <PricingIcon /> },
  { caption: "contact", screen: null, icon: <ContactIcon /> },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          <WalletBalance />
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
