import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

export default function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.lightGray}
            >
                <View style={styles.container}>
                    { IconComponent }
                    { image && <Image style={styles.image} source={image}/> }
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
    },
    subTitle: {
        color: colors.mediumGray,
    }
})
