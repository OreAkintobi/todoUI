import React from "react";
import {
  Container,
  Input,
  InputContainer,
  LabelText,
  LabelTextContainer,
} from "./styles";

const SelectorInput = ({
  labelTextUpper,
  labelTextLower,
  selectorInputPlaceholder,
}) => {
  return (
    <>
      <Container>
        <LabelTextContainer>
          <LabelText>{labelTextUpper}</LabelText>
          <LabelText>{labelTextLower}</LabelText>
        </LabelTextContainer>
        <InputContainer>
          <Input placeholder={selectorInputPlaceholder} />
        </InputContainer>
      </Container>
    </>
  );
};

export default SelectorInput;
