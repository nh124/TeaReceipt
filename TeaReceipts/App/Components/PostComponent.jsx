import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PageModelComponent from "./PageModelComponent";
import { EvilIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function PostComponent() {
  return (
    <PageModelComponent>
      <View style={styles.headingContainer}>
        <Image
          style={{ width: 100, height: 50 }}
          source={require("../../assets/shareLarge.png")}
        />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            fontSize: 20,
            color: "gray",
          }}
        >
          Add a Post
        </Text>
      </View>
      <View style={styles.inputContainerStyle}>
        <Text style={styles.labelStyle}>Add a post</Text>
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.inputStyle}
            placeholder="Type your post"
            multiline={true}
          />
          <TouchableOpacity>
            <EvilIcons name="image" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </PageModelComponent>
  );
}
const styles = StyleSheet.create({
  headingContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainerStyle: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  labelStyle: {
    color: "#CACACA",
    width: "80%",
    fontSize: 16,
  },
  inputStyle: {
    borderColor: "#CACACA",
    padding: 5,
    borderWidth: 1,
    width: "80%",
    color: "black",
    fontWeight: "bold",
    // flexWrap: "wrap",
  },
});
