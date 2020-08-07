import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./Icon";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function CategoryPcikerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33.33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
