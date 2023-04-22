import { View, Text, StyleSheet } from "react-native";
import React from "react";

// constants
import Color from "../../../constants/Color";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: Color.primary800,
    backgroundColor: Color.accent500,
    elevation: 4,
    shadowColor: Color.primary800,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
