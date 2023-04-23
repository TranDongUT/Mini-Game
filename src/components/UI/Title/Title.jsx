//import liraries
import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    width: 300,
    maxWidth: "80%",
    padding: 12,
    fontSize: 24,
    textAlign: "center",
    borderWidth: Platform.select({
      ios: 0,
      android: 2,
    }),
    borderColor: "#fff",
    color: "#fff",
    fontFamily: "open-sans-bold",
  },
});

export default Title;
