import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../config/colors'

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 15,
    },
    title: {
        marginBottom: 5,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    }
})
