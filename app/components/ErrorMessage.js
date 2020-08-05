import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
