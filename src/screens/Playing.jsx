import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
//expo
import Ionicon from "@expo/vector-icons/Ionicons";

//components
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import IntructionText from "../components/UI/IntructionText";

import NumberContainer from "../components/game/NumberContainer/NumberContainer";
import GuessLogItem from "../components/game/GuessItem/GuessLogItem";

const randomNumberBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return randomNumberBetween(min, max, exclude);
  }

  return randomNumber;
};

let min = 1;
let max = 100;

const PlayingSreen = ({ numberPicked, onGameOver }) => {
  const initalGuess = randomNumberBetween(1, 100, numberPicked);

  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guessRounds, setGuessRounds] = useState([initalGuess]);

  const handleGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess <= numberPicked) ||
      (direction === "higher" && currentGuess >= numberPicked)
    ) {
      Alert.alert("Don't lie!", " You know that this is wrong ...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    // direction => higher/ lower
    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess;
    }

    const newRndNumber = randomNumberBetween(min, max, currentGuess);
    setCurrentGuess(newRndNumber);

    setGuessRounds((prev) => [newRndNumber, ...prev]);
  };

  useEffect(() => {
    if (currentGuess === numberPicked) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, numberPicked, onGameOver]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  const guessRoundListLenght = guessRounds.length;

  const { width, height } = useWindowDimensions();

  let Content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <IntructionText style={styles.intructionText}>
          Higher or Lower ?
        </IntructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleGuess("lower")}>
              <Ionicon name="md-remove" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleGuess("higher")}>
              <Ionicon name="md-add" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    Content = (
      <>
        <View style={styles.buttonsContainerLandcape}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleGuess("lower")}>
              <Ionicon name="md-remove" />
            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleGuess("higher")}>
              <Ionicon name="md-add" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {Content}
      <View style={styles.listGuessLog}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },

  intructionText: {
    marginBottom: 12,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  buttonsContainerLandcape: {
    flexDirection: "row",
    alignItems: "center",
  },

  listGuessLog: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
});

export default PlayingSreen;
