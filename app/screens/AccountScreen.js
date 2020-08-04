import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { FlatList } from 'react-native-gesture-handler';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Alexis Isidoro" subTitle="alexis.isidoro_91@hotmail.com" image={require("../assets/img/mosh.jpg")}/>
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems} keyExtractor={menuItem => menuItem.title} ItemSeparatorComponent={ListItemSeparator} renderItem={({item}) => 
                    <ListItem title={item.title} IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                    }/>}
                />
            </View>
            <ListItem title="Cerrar sesión" IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightLightGray,
    },
    container: {
        marginBottom: 20,
    }
})
