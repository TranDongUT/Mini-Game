import { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

//constant
import Color from "./src/constants/Color";

//screens
import StartScreen from "./src/screens/StartScreen";
import PlayingScreen from "./src/screens/Playing";

export default function App() {
  const [numberPicked, setNumberPicked] = useState();

  const handlePickNumber = (number) => {
    setNumberPicked(number);
  };

  return (
    <LinearGradient
      colors={[Color.primary700, Color.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {numberPicked ? (
            <PlayingScreen />
          ) : (
            <StartScreen onPickNumber={handlePickNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
