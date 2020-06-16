import React, { useState } from "react";
import { ScrollView } from "react-native";
import { theme } from "../../theme/types";
import Header from "../../commons/header";
import SafeAreaView from "../../commons/safe-area-view";
import SelectorBox from "../../components/SelectorBox";
import SelectorInput from "../../components/SelectorInput";

import {
  Container,
  OptionBoxContainer,
  OptionBox,
  OptionCaption,
  PaymentContainer,
  SelectorHeader,
  PaymentOptionContainer,
  PaymentButton,
  PayText,
  PaymentOptionButton,
  PaymentOptionButtonText,
} from "./styles";

const operators = ["MTN", "Airtel", "9Mobile", "Glo"];
const buttons = ["Wallet", "ATM"];

const AirtimeScreen = () => {
  const { colors } = theme;
  const [selectedOption, setSelectedOption] = useState("Wallet");

  return (
    <SafeAreaView>
      <Header title="Airtime" headerLeft />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
        }}
      >
        <Container>
          <SelectorBox
            operatorHeader="select your operator"
            children={operators.map((operator) => (
              <OptionBoxContainer key={operator}>
                <OptionBox />
                <OptionCaption>{operator}</OptionCaption>
              </OptionBoxContainer>
            ))}
          />

          <SelectorBox
            operatorHeader="enter your phone number"
            children={
              <SelectorInput
                labelTextUpper="Country"
                labelTextLower="NGN"
                selectorInputPlaceholder="Your phone number"
              />
            }
          />

          <SelectorBox
            operatorHeader="how much do you want to recharge?"
            children={
              <SelectorInput
                labelTextUpper="Currency"
                labelTextLower="NGN"
                selectorInputPlaceholder="Enter amount"
              />
            }
          />
          <PaymentContainer>
            <SelectorHeader>select payment method</SelectorHeader>

            <PaymentOptionContainer>
              {buttons.map((item) => (
                <PaymentOptionButton
                  key={item}
                  style={{
                    backgroundColor:
                      selectedOption === item
                        ? colors.COLOR_WHITE
                        : colors.DARK_TEXT,
                  }}
                  onPress={() => {
                    setSelectedOption(item);
                  }}
                >
                  <PaymentOptionButtonText
                    style={{
                      color:
                        selectedOption === item
                          ? colors.DARK_TEXT
                          : colors.COLOR_WHITE,
                    }}
                  >
                    {item}
                  </PaymentOptionButtonText>
                </PaymentOptionButton>
              ))}
            </PaymentOptionContainer>
          </PaymentContainer>

          <SelectorBox
            operatorHeader=""
            children={
              selectedOption === "Wallet" ? (
                <SelectorInput
                  labelTextUpper="Wallet Balance"
                  labelTextCenter="NGN 3,500"
                  labelTextLower="Wallet Pin"
                  selectorInputPlaceholder="Your wallet pin"
                />
              ) : (
                <SelectorInput
                  labelTextUpper="Email"
                  selectorInputPlaceholder="Your email"
                />
              )
            }
          />

          <PaymentButton>
            <PayText>Pay NGN 1,500</PayText>
          </PaymentButton>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AirtimeScreen;
