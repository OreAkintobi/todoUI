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
  labelTextCenter,
  labelTextLower,
  selectorInputPlaceholder,
}) => {
  return (
    <>
      <Container>
        <LabelTextContainer>
          {labelTextUpper ? <LabelText>{labelTextUpper}</LabelText> : null}
          {labelTextCenter ? (
            <LabelText style={{ fontSize: 16, lineHeight: 19 }}>
              {labelTextCenter}
            </LabelText>
          ) : null}
          {labelTextLower ? <LabelText>{labelTextLower}</LabelText> : null}
        </LabelTextContainer>
        <InputContainer>
          <Input placeholder={selectorInputPlaceholder} />
        </InputContainer>
      </Container>
    </>
  );
};

export default SelectorInput;
