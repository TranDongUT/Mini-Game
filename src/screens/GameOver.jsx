import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
//expo
//constants
import Color from "../constants/Color";
//componets
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

// create a component
const GameOverScreen = ({ roundsNumber, numberPicked, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone need <Text style={styles.hightlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.hightlight}>{numberPicked}</Text>
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    color: Color.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Color.primary500,
  },
});

export default GameOverScreen;
