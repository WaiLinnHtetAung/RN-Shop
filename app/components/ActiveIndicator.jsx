import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const ActiveIndicator = ({visible = false}) => {
    if(!visible) return null
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
            autoPlay
            loop
            style={{width: 200, height: 200}}
            source={require('../../assets/loader/loading.json')}
        />
    </View>
  )
}

export default ActiveIndicator
