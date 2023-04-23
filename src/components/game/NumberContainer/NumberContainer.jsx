//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
//constants
import Color from "../../../constants/Color";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Color.accent500,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: Color.accent500,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
