import React from "react";
import { StyleSheet, Text } from "react-native";

import Color from "../../../constants/Color";

export default function IntructionText({ children, style }) {
  return <Text style={[styles.intructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  intructionText: {
    fontSize: 24,
    color: Color.accent500,
    fontFamily: "open-sans",
  },
});
