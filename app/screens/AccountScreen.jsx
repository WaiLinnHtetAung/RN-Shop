import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import colors from '../configs/colors';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';

const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem 
                title="Mosh Hamedani"
                subTitle="bHt2F@example.com"
                image={require("../../assets/mosh.jpg")}
            />
        </View>
        <View style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={(menuItem) => menuItem.title}
                renderItem={({ item }) => (
                <ListItem
                    title={item.title}
                    IconComponent={
                    <Icon
                        name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}
                    />
                    }
                />
                )}
            />
        </View>
        <ListItem
            title="Log Out"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
    </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})