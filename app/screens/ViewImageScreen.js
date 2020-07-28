import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../assets/config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/img/chair.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : colors.black,
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 20,
        left: 20,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 20,
        right: 20,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})
