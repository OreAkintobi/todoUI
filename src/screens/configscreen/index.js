import React, { useEffect } from "react";

import { Container, Logo } from "./styles";
import SafeAreaView from "../../commons/safe-area-view";

export default function ConfigScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => checkInitialLaunch(), 2000);
  }, []);

  const checkInitialLaunch = async () => {
    // do checks here for initial launch and subsequent launch
    navigation.replace("HomeScreen");
  };

  return (
    <SafeAreaView>
      <Container>
        <Logo source={require("../../../assets/icon.png")} />
      </Container>
    </SafeAreaView>
  );
}
