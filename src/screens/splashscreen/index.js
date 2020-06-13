import React, { useEffect } from "react";

import { Container, Logo } from "./styles";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => checkInitialLaunch(), 2000);
  }, []);

  const checkInitialLaunch = async () => {
    // do checks here for initial launch and subsequent launch
    navigation.replace("ConfigScreen");
  };

  return (
    <Container>
      <Logo source={require("../../../assets/icon.png")} />
    </Container>
  );
}
