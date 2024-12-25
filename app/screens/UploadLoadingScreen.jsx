import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

import colors from '../configs/colors';
import LottieView from 'lottie-react-native';

const UploadLoadingScreen = ({onDone, progress = 0, visible = false}) => {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            {progress < 1 ? (
                <Progress.Bar progress={progress} width={200} color={colors.primary} />
            ) : (
                <LottieView 
                    source={require('../../assets/loader/done.json')}
                    autoPlay
                    loop={false}
                    onAnimationFinish={onDone}
                    style={styles.animation}
                />
            )}
        </View>
    </Modal>
  )
}

export default UploadLoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: 150,
        height: 150
    }
})