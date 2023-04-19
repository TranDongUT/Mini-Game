//import liraries
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

//constants
import Color from "../constants/Color";

//components
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Color.primary800,
    elevation: 4,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
