import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../configs/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({ 
  icon, 
  items, 
  selectedItem, 
  onSelectedItem, 
  placeholder,
  numberOfColumns = 1,
  width = "100%" ,
  PickerItemComponent = PickerItem
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
            <View style={[styles.container, { width }]}>
                {icon && (
                    <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyle.colors.medium}
                    style={styles.icon}
                    />
                )}
                {selectedItem ? (
                    <AppText style={styles.text}>{selectedItem.label}</AppText>  
                  ) : (
                    <AppText style={styles.placeholder}>{placeholder}</AppText>  
                  )
                }
                <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={defaultStyle.colors.medium}
                />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={isModalVisible} animationType="slide">
            <Screen>
              <Button title="Close" onPress={() => setIsModalVisible(false)} />
              <FlatList
                  data={items}
                  numColumns={numberOfColumns}
                  keyExtractor={(item) => item.value.toString()}
                  renderItem={({ item }) => (
                      <PickerItemComponent 
                          item={item}
                          label={item.label} 
                          onPress={() => {
                              setIsModalVisible(false);
                              onSelectedItem(item);
                          }} 
                      />
                  )}
              />
            </Screen>
        </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyle.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
