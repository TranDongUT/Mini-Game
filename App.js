import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

//expo
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//constant
import Color from "./src/constants/Color";

//screens
import GameOverScreen from "./src/screens/GameOver";
import PlayingScreen from "./src/screens/Playing";
import StartScreen from "./src/screens/StartScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const [isGameOver, setIsGameOver] = useState(false);
  const [numberPicked, setNumberPicked] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handlePickNumber = (number) => {
    setNumberPicked(number);
  };

  const handleGameOver = (roundNumber) => {
    setIsGameOver(true);
    setGuessRounds(roundNumber);
  };

  const handleStartNewGame = () => {
    setNumberPicked(null);
    setGuessRounds(0);
    setIsGameOver(false);
  };

  if (!fontsLoaded) {
    Screen = <AppLoading />;
  }

  let Screen = <StartScreen onPickNumber={handlePickNumber} />;

  if (numberPicked) {
    Screen = (
      <PlayingScreen numberPicked={numberPicked} onGameOver={handleGameOver} />
    );
  }

  if (isGameOver && numberPicked) {
    Screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        numberPicked={numberPicked}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

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
        <SafeAreaView style={styles.rootScreen}>{Screen}</SafeAreaView>
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
