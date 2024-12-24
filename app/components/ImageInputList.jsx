import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './ImageInput'

const ImageInputList = ({imageUris, onAddImage, onRemoveImage}) => {

    const scrollRef = useRef();

  return (
    <View>
        <ScrollView horizontal ref={scrollRef} onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
            <View style={styles.container}>
                {imageUris.map((uri) => (
                    <View key={uri} style={styles.image}>
                            <ImageInput 
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                    </View>
                ))}

                <ImageInput onChangeImage={uri => onAddImage(uri)} />
            </View>
        </ScrollView>
    </View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        marginRight: 10,
    }
})