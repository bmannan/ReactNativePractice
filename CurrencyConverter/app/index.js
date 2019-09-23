import React from "react";
import Home from "./screens/Home.js";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $white: "#ffffff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGray: "#f0f0f0"
});

export default () => <Home />;
