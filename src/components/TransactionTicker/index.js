import React from "react";

import {
  Container,
  TransactionType,
  TransactionDetailsContainer,
  TransactionTypeText,
  TransactionDetails,
  TransactionDate,
} from "./styles";

const TransactionTicker = ({ icon, header, caption, date, amount }) => {
  return (
    <>
      <Container>
        <TransactionType>{icon}</TransactionType>
        <TransactionDetailsContainer>
          <TransactionTypeText>{header}</TransactionTypeText>
          <TransactionDetails>{caption}</TransactionDetails>
          <TransactionDate>{date}</TransactionDate>
        </TransactionDetailsContainer>
        <TransactionDetails>{amount}</TransactionDetails>
      </Container>
    </>
  );
};

export default TransactionTicker;
