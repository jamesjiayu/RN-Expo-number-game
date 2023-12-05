import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Button, FlatList, Pressable, TextInput, View } from "react-native-web";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
// import TextInput1 from "./components/TextInput1";
// import TextItem from "./components/TextItem";

export default function App() {
  // const [texts, setTexts] = useState([]);
  // const [visible, setVisible] = useState(false);
  // const handlePress = (text) => {
  //   setTexts((prevTexts) => [
  //     ...prevTexts,
  //     { id: Math.random.toString(), value: text },
  //   ]);
  //   setVisible(false);
  // };
  //   <View>
  //   {texts.map((tx) => (
  //     <Text key={tx}>{tx}</Text>
  //   ))}
  // </View>
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number" />
      {content}

      {/* <Pressable onPress={() => setVisible(true)}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <TextInput1 handlePress={handlePress} visible={visible} />
      <FlatList
        data={texts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <TextItem
            value={itemData.item.value}
            onDelete={() => console.log("delete it")}
          />
        )}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
