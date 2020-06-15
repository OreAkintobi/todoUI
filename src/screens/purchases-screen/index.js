import React from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import TopBar from "../../components/TopBar";
import { theme } from "../../theme/types";
import PurchasesTicker from "../../components/PurchasesTicker";
import UpIcon from "../../../assets/icons/Small/UpIcon";
import DownIcon from "../../../assets/icons/Small/DownIcon";
import CautionIcon from "../../../assets/icons/Small/CautionIcon";
import CheckMarkIcon from "../../../assets/icons/Small/CheckMarkIcon";
import DataIcon from "../../../assets/icons/Small/DataIcon";

import { Container } from "./styles";

const PurchasesScreen = ({ navigation }) => {
  const { colors } = theme;

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
    </SafeAreaView>
  );
};

export default PurchasesScreen;
