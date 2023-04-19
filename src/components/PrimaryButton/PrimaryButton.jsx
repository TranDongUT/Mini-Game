//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

//constants
import Color from "../../constants/Color";

//component

// create a component
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnterContainer, styles.pressed]
            : styles.buttonInnterContainer
        }
        onPress={onPress}
        android_ripple={{ backgroundColor: Color.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },

  buttonInnterContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Color.primary500,
    elevation: 2,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});

//make this component available to the app
export default PrimaryButton;
