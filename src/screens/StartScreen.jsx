//import liraries
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, Text, View } from "react-native";

//constants
import Color from "../constants/Color";

//components
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import IntructionText from "../components/UI/IntructionText";

const StartScreen = ({ onPickNumber }) => {
  const [numberEntered, setNumberEntered] = useState("");

  const handleChangeNumber = (number) => {
    setNumberEntered(number);
  };

  const handleReset = () => {
    setNumberEntered("");
  };

  const handlePressConfirm = () => {
    const chosenNumber = parseInt(numberEntered);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has between 0 and 99", [
        { text: "Okey", style: "destructive", onPress: handleReset },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card>
        <IntructionText>Enter a Number</IntructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={numberEntered}
          onChangeText={handleChangeNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handlePressConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: Color.accent500,
    borderColor: Color.accent500,
    borderBottomWidth: 2,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default StartScreen;
