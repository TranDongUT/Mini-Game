//import liraries
import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    color: "#fff",
    fontFamily: "open-sans-bold",
  },
});

export default Title;