import React from "react";

import {
  Container,
  TransactionType,
  TransactionDetailsContainer,
  TransactionTypeText,
  TransactionDate,
  TransactionAmountContainer,
} from "./styles";

const TransactionTicker = ({ icon, header, caption, date, amount }) => {
  return (
    <>
      <Container>
        <TransactionType>{icon}</TransactionType>
        <TransactionDetailsContainer>
          <TransactionTypeText>{header}</TransactionTypeText>
          <TransactionTypeText>{caption}</TransactionTypeText>
        </TransactionDetailsContainer>
        <TransactionAmountContainer>
          <TransactionTypeText>{amount}</TransactionTypeText>
          <TransactionDate>{date}</TransactionDate>
        </TransactionAmountContainer>
      </Container>
    </>
  );
};

export default TransactionTicker;
