import React from "react";

import {
  Container,
  TodoHeaderContainer,
  TodoHeader,
  TodoListContainer,
  TodoText,
} from "./styles";

const TaskBox = ({ handlePress }) => {
  return (
    <>
      <Container onPress={handlePress}>
        <TodoHeaderContainer>
          <TodoHeader>Trip to Paris</TodoHeader>
        </TodoHeaderContainer>
        <TodoListContainer>
          <TodoText>Three</TodoText>
          <TodoText>Three</TodoText>
          <TodoText>Three</TodoText>
          <TodoText>Three</TodoText>
        </TodoListContainer>
      </Container>
    </>
  );
};

export default TaskBox;
