import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../configs/colors";


const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if(!imageUri) selectImage();
    else 
        Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: "Yes", onPress: () => onChangeImage(null) },
            { text: "No" },
        ]);
  }

  const selectImage = async() => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 0.5,
        });

        if(!result.canceled)
            onChangeImage(result.assets[0].uri);
    }
    catch(err) {
        console.log(err);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && (
                <MaterialCommunityIcons name="camera" size={40} color="black" />
            )}
            {imageUri && (
                <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
            )}
        </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
});
