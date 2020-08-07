import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/img/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-red.png")}
        />
        <Text style={styles.tagLine}>Compra, Vende y Vuelve a comprar</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Iniciar sesión" onPress={() => console.log("Tab")} />
        <AppButton
          title="Registrarme"
          onPress={() => console.log("R Tab")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});
