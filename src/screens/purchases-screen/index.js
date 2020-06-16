import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../theme/types";
import SafeAreaView from "../../commons/safe-area-view";
import PurchasesTicker from "../../components/PurchasesTicker";
import CautionIcon from "../../../assets/icons/Small/CautionIcon";
import CheckMarkIcon from "../../../assets/icons/Small/CheckMarkIcon";
import DataIcon from "../../../assets/icons/Small/DataIcon";
import FilterIcon from "../../../assets/icons/Small/FilterIcon";
import Header from "../../commons/header";

import { Container, ModalView, ModalButtons } from "./styles";

const PurchasesScreen = ({ navigation }) => {
  const { colors } = theme;
  const [isVisible, setIsVisible] = useState(false);

  const transactionItems = [
    {
      icon: <DataIcon />,
      header: "data",
      caption: "1.5GB (MTN)",
      date: "12/06/2020 07:54",
      amount: "NGN 2,500 (Wallet)",
    },
    {
      icon: <CheckMarkIcon />,
      header: "airtime",
      caption: "NGN 1500 (MTN)",
      date: "12/06/2020 07:54",
      amount: "NGN 2,500 (ATM)",
    },
    {
      icon: <CautionIcon />,
      header: "airtime",
      caption: "NGN 1500 (MTN)",
      date: "12/06/2020 07:54",
      amount: "NGN 2,500 (Wallet)",
    },
  ];

  return (
    <SafeAreaView>
      <Header
        title="Purchases"
        headerRight={() => <FilterIcon />}
        functionPassDown={() => {
          setIsVisible(true);
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Container>
          {transactionItems.map((item, index) => (
            <PurchasesTicker
              key={index}
              icon={item.icon}
              header={item.header}
              caption={item.caption}
              date={item.date}
              amount={item.amount}
            />
          ))}
        </Container>
      </ScrollView>

      <Modal
        isVisible={isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        useNativeDriver={true}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
        children={<FilterIcon />}
      >
        <ModalView>
          <ModalButtons />
        </ModalView>
      </Modal>
    </SafeAreaView>
  );
};

export default PurchasesScreen;
