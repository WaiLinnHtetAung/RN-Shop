import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import colors from '../configs/colors';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

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
      targetScreen: routes.MESSAGES
    },
  ];

const AccountScreen = () => {
  const navigation = useNavigation();
  const {user, logout} = useAuth();

  return (
    <GestureHandlerRootView>
      <Screen style={styles.screen}>
          <View style={styles.container}>
              <ListItem 
                  title={user.name}
                  subTitle={user.email}
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
                      onPress={() => navigation.navigate(item.targetScreen)}
                  />
                  )}
              />
          </View>
          <ListItem
              title="Log Out"
              IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
              onPress={() => logout()}
          />
      </Screen>
    </GestureHandlerRootView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        paddingTop: 0
    },
    container: {
        marginVertical: 20
    }
})