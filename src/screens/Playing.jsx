//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title/Title";

// create a component
const PlayingSreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      {/* <View>
        <Text>LOG ROUNDS</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default PlayingSreen;
