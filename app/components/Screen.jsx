import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        
    },
    view: {
        flex: 1,
    }
})