import React from "react";
import { Button } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import { Container, Title, HeaderBold } from "./styles";

const TaskScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="TaskScreen" headerLeft />
      <Container>
        <Title>
          <HeaderBold>Tasks </HeaderBold>
        </Title>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </Container>
    </SafeAreaView>
  );
};

export default TaskScreen;
