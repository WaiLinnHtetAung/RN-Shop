import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText'

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={50}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 25,
      paddingVertical: 15,
      alignItems: "center",
      width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    }
})