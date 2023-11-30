import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native-web";

const TextItem = (props) => {
  return (
    <View>
      <Text>{props.value}</Text>
    </View>
  );
};
export default TextItem;
