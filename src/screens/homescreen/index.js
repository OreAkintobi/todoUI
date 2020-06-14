import React from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import WalletBalance from "../../components/WalletBalance";

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
  "wallet",
  "buy data",
  "buy airtime",
  "wallet history",
  "pricing",
  "contact",
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
              <Activity key={item}>
                <ActivitySelector />
                <ActivityCaption>{item}</ActivityCaption>
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
