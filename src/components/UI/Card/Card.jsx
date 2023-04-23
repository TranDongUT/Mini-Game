import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import Color from "../../../constants/Color";

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 28 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Color.primary800,
    elevation: 4,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
