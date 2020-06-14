import React from "react";
import { ScrollView } from "react-native";
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
} from "./styles";

const operators = ["MTN", "Airtel", "9Mobile", "Glo"];

const DataScreen = () => {
  return (
    <SafeAreaView>
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

            <PaymentOptionContainer></PaymentOptionContainer>
          </PaymentContainer>

          <SelectorBox
            operatorHeader=""
            children={
              <SelectorInput
                labelTextUpper="Wallet Balance"
                labelTextLower="Wallet Pin"
                selectorInputPlaceholder="Your wallet pin"
              />
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

export default DataScreen;
