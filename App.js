import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo ¿Que Vendes?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
