import React from "react";
import { OperatorContainer, SelectorHeader, SelectorContainer } from "./styles";

const SelectorBox = ({ operatorHeader, children }) => {
  return (
    <>
      <OperatorContainer>
        {operatorHeader ? (
          <SelectorHeader>{operatorHeader}</SelectorHeader>
        ) : null}
        <SelectorContainer>{children}</SelectorContainer>
      </OperatorContainer>
    </>
  );
};

export default SelectorBox;
