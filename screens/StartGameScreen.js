import React, { useState } from "react";
import { Text } from "react-native";
import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native-web";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setConfirmed(false);
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("invalid number", "number has to be between 1 to 99", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      //if (Platform.OS === 'web') {
      //   window.alert('invalid number');
      // } else {
      //   Alert.alert(...);
      // }
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue(""); //batch 3 state together
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number is :</Text>
        <NumberContainer>{selectedNumber} </NumberContainer>
        <Pressable
          style={styles.btn}
          onPress={() => props.onStartGame(selectedNumber)}
        >
          <Text>Start Game</Text>
        </Pressable>
      </Card>
    );
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>start a game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number </Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          inputMode="numeric"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.PressableContainer}>
          <View style={styles.btn}>
            <Pressable onPress={resetInputHandler}>
              <Text>Reset</Text>
            </Pressable>
          </View>
          <View style={styles.btn}>
            <Pressable onPress={confirmInputHandler}>
              <Text>OK</Text>
            </Pressable>
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};
const styles = StyleSheet.create({
  input: { width: 50, textAlign: "center" },
  btn: { width: 100, backgroundColor: colors.accent },
  screen: { flex: 1, padding: 10, alignItems: "center" },
  PressableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: { fontSize: 20, marginVertical: 10 },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
