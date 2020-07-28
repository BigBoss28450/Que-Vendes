import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/img/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/img/logo-red.png")} />
                <Text>Compra, Vende y Vuelve a comprar</Text>
            </View>
            <View style={styles.loginButton}>
            </View>
            <View style={styles.registerButton}>
            </View>
        </ImageBackground>
    )
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
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
})
