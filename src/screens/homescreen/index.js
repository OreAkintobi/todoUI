import React from "react";
import { Button, ScrollView } from "react-native";
import SafeAreaView from "../../commons/safe-area-view";
import Header from "../../commons/header";
import {
  Container,
  Title,
  HeaderBold,
  HeaderRegular,
  AddList,
  TaskBoxContainer,
} from "./styles";
import TaskBox from "../../components/TaskBox";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="HomeScreen" headerLeft />
      <Container>
        <Title>
          <HeaderBold>Tasks </HeaderBold>
          <HeaderRegular>Lists</HeaderRegular>
        </Title>
        <AddList>
          <HeaderRegular style={{ fontSize: 25 }}>+</HeaderRegular>
        </AddList>
        <HeaderRegular style={{ fontSize: 20, marginTop: 15 }}>
          Add List
        </HeaderRegular>
        <TaskBoxContainer>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          >
            <TaskBox handlePress={() => navigation.navigate("TaskScreen")} />
            <TaskBox />
            <TaskBox />
          </ScrollView>
        </TaskBoxContainer>
      </Container>
    </SafeAreaView>
  );
};

export default ProfileScreen;
