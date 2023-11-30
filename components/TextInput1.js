import { Button, TextInput, View } from "react-native-web";
import React, { useState } from "react";
const TextInput1 = ({ handlePress }) => {
  const [text1, setText1] = useState("");
  //onPress={()=>handlePress(text1)} !!!
  return (
    <View>
      <Button title="Button Changing" onPress={() => handlePress(text1)} />
      <TextInput
        value={text1}
        style={styles.input}
        //onChangeText={(newText) => setText1(newText)}
        onChangeText={setText1}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: { borderColor: "black", borderWidth: 1 },
});

export default TextInput1;
