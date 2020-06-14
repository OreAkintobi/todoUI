import React from "react";
import { Button, ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import { Container, MidText } from "./styles";
import WalletBalance from "../../components/WalletBalance";

const WalletScreen = ({ navigation }) => {
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
          <MidText>This is the Wallet Screen.</MidText>
          <Button
            title="Go back to Home Screen"
            onPress={() => navigation.goBack()}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletScreen;
