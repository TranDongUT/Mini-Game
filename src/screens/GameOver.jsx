import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
//expo
//constants
import Color from "../constants/Color";
//componets
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

// create a component
const GameOverScreen = ({ roundsNumber, numberPicked, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (height < 380) {
    imageSize = 150;
  }

  if (height < 500) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
