import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  LayoutAnimation,
  Image,
} from "react-native";
import axios from "axios";
import PageModelComponent from "./PageModelComponent";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

export default function AddPostComponent() {
  const imageDir = FileSystem.documentDirectory + "/images";

  const ensureDirExists = async () => {
    const dir = await FileSystem.getInfoAsync(imageDir);
    if (!dir.exists) {
      await FileSystem.makeDirectoryAsync(imageDir, { intermediates: true });
    }
  };

  const [images, setImages] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    city: "",
    phoneNumber: "",
    message: "",
    images: [],
  });
  useEffect(() => {
    console.log(images);
  }, [images]);
  const launchImageSelector = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) saveImage(result.assets[0].uri);
  };

  const onChange = (inputName, value) => {
    setPostData({
      ...postData,
      [inputName]: value,
    });
  };
  const saveImage = async (uri) => {
    await ensureDirExists();
    const fileName = new Date().getTime() + ".jpg";
    const dest = imageDir + fileName;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImages([...images, dest]);
    setPostData({
      ...postData,
      images: [...postData.images, dest],
    });
  };

  const postDataToServer = async () => {
    try {
      const formData = new FormData();
      formData.append("phone_number", postData.phoneNumber);
      formData.append("city", postData.city);
      formData.append("caption", postData.message);
      formData.append("name", postData.name);

      // Append images to formData
      postData.images.forEach((image, index) => {
        formData.append("images", {
          uri: image,
          type: "image/jpeg",
          name: `image_${index}.jpg`,
        });
      });

      const token = ""; // Replace with your actual bearer token

      const response = await axios.post(
        "http://10.0.2.2:8000/post/createPost",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <PageModelComponent>
      <View style={styles.inputContainerStyle}>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <TextInput
            placeholder="Type your name"
            onChangeText={(text) => onChange("name", text)}
            value={postData.name}
            multiline={true}
            style={{
              width: "100%",
              height: 50,
              borderWidth: 1, // Add border width
              flex: 1,
              justifyContent: "start",
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
            }}
          />
          <TextInput
            placeholder="Enter your city"
            onChangeText={(text) => onChange("city", text)}
            value={postData.city}
            multiline={true}
            style={{
              width: "100%",
              height: 50,
              borderWidth: 1, // Add border width
              marginTop: 10,
              flex: 1,
              justifyContent: "start",
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
            }}
          />
          <TextInput
            placeholder="Enter your phone number"
            onChangeText={(text) => onChange("phoneNumber", text)}
            value={postData.phoneNumber}
            multiline={true}
            style={{
              width: "100%",
              height: 50,
              borderWidth: 1, // Add border width
              marginTop: 10,
              flex: 1,
              justifyContent: "start",
              padding: 10,
              borderColor: "gray",
              borderRadius: 5,
            }}
          />
          <TextInput
            placeholder="Type your post"
            onChangeText={(text) => onChange("message", text)}
            value={postData.message}
            multiline={true}
            style={{
              width: "100%",
              height: 300,
              marginTop: 10,
              borderWidth: 1, // Add border width
              flex: 1,
              justifyContent: "start",
              padding: 10,
              textAlignVertical: "top",
              borderColor: "gray",
              borderRadius: 5,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => launchImageSelector()}
              style={{
                backgroundColor: "#cacaca",
                borderRadius: 5,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                height: 100,
              }}
            >
              <Entypo name="images" size={50} color="black" />
            </TouchableOpacity>
            {images.map((imageUri, index) => (
              <Image
                key={index}
                style={{ width: 100, height: 100 }}
                source={{ uri: `file://${imageUri}` }}
              />
            ))}
          </View>
          <View
            style={{
              width: "100%",
              height: 50,
              flex: 1,
              justifyContent: "center", // Align items to the end
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#597C64",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => postDataToServer()}
            >
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PageModelComponent>
  );
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  inputStyle: {
    borderColor: "#CACACA",
    padding: 10,
    width: "100%",
    color: "black",
    fontWeight: "bold",
    textAlignVertical: "top",
  },
});
