import React, { useState } from 'react';
import { StyleSheet, FlatList, View} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const intialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/img/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/img/mosh.jpg")
    },
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState(intialMessages);
    const [refreshing, setrefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected: ", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                        )}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: "T3",
                            description: "D3",
                            image: require("../assets/img/mosh.jpg")
                        },
                    ]);
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
})
