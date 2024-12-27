import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

import AppText from './AppText'
import colors from '../configs/colors'
import { useNetInfo } from '@react-native-community/netinfo'

const OfflineNotice = () => {
    const netInfo = useNetInfo();
    if(netInfo.type == 'unknown' && !netInfo.isInternetReachable) 
    return (
            <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection ...</AppText>
            </View>
        )
    return null
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        top: Constants.statusBarHeight,
        zIndex: 100
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }   
})