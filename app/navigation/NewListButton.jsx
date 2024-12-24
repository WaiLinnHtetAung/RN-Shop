import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../configs/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewListButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white} />
        </View>
    </TouchableOpacity>
  )
}

export default NewListButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        bottom: 35,
        alignSelf: 'center'
    }
})