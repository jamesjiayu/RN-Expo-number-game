import React, { useState } from "react";
import { Text } from "react-native";
import { Pressable, View } from "react-native-web";

const TextItem = (props) => {
  return (
    <Pressable onPress={props.onDelete}>
      <View>
        <Text>{props.value}</Text>
      </View>
    </Pressable>
  );
};
export default TextItem;
