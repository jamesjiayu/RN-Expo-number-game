import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Button, FlatList, Pressable, TextInput, View } from "react-native-web";
import TextInput1 from "./components/TextInput1";
import TextItem from "./components/TextItem";

export default function App() {
  const [texts, setTexts] = useState([]);
  const [visible, setVisible] = useState(false);
  const handlePress = (text) => {
    setTexts((prevTexts) => [
      ...prevTexts,
      { id: Math.random.toString(), value: text },
    ]);
  };
  //   <View>
  //   {texts.map((tx) => (
  //     <Text key={tx}>{tx}</Text>
  //   ))}
  // </View>
  //
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={setVisible(true)}>
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
      />

      <Text style={styles.h1}>Hello CodeSandbox</Text>
      <Text style={styles.h2}>
        Start editing to see some magic happen, even on your mobile device!
      </Text>
      <br />
      <br />
      <Text style={styles.paragraph}>
        Open Expo on your mobile device with scanning the QR code in the
        application log under the start tab.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
