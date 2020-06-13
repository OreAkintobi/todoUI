import React, { useEffect } from "react";

import { Container, Logo } from "./styles";

export default function ConfigScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => checkInitialLaunch(), 2000);
  }, []);

  const checkInitialLaunch = async () => {
    // do checks here for initial launch and subsequent launch
    navigation.replace("HomeScreen");
  };

  return (
    <Container>
      <Logo source={require("../../../assets/icon.png")} />
    </Container>
  );
}
