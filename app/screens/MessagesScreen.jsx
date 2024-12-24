import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Screen from '../components/Screen'
import ListItem from '../components/lists/ListItem'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
    {
      id: 1,
      title: "Mosh Hamedani",
      description: "Hey! Is this item still available?",
      image: require("../../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "Mosh Hamedani",
      description:
        "I'm interested in this item. When will you be able to post it?",
      image: require("../../assets/mosh.jpg"),
    },
  ];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <GestureHandlerRootView>
      <Screen>
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => (
                <ListItem 
                  title={item.title} 
                  subTitle={item.description} 
                  image={item.image} 
                  onPress={() => handleDelete(item)} 
                  renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: "Mosh Hamedani",
                        description:
                        "I'm interested in this item. When will you be able to post it?",
                        image: require("../../assets/mosh.jpg"),
                    },
                ]);
            }}
        />
      </Screen>
    </GestureHandlerRootView>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})