import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: orange;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const AppContainer = styled.View`
  flex: 1;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <SafeArea>
      <ExpoStatusBar style="auto" />
      <AppContainer>
        <Text>CRYPTO App</Text>
      </AppContainer>
    </SafeArea>
  );
}
