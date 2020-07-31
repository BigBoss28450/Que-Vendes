import React from 'react';
import { StyleSheet, FlatList, Platform, StatusBar, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
    {
        id: 1,
        title: "t1",
        description: "d1",
        image: require("../assets/img/mosh.jpg")
    },
    {
        id: 1,
        title: "t2",
        description: "d2eee",
        image: require("../assets/img/mosh.jpg")
    },
];

export default function MessagesScreen() {
    return (
        <SafeAreaView>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={
                    ({item}) => <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})
