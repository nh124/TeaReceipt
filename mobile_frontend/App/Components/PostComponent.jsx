import React from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  setPostUpdated,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
export const PostComponents = ({ post }) => {
  if (post.image[0] !== null) {
    const imagePath = post.image[0]?.path;
    console.log(imagePath);
  }
  const updatePostLike = async () => {
    // try {
    //   const token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzY2VhODNmLWMxZjItNDM1Zi1iZTc4LTc1MjM3MGQ3MmRiNCIsIm5hbWUiOiJOdXIgSGFxdWUiLCJlbWFpbCI6Im51ci5oYXF1ZTk5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidXNlcjUyOTkiLCJwYXNzd29yZCI6IiQyYiQxMCQudDIxbHRBRGtVYWNVWWxjRFV6dFZlbWRveHFjemhFMC9QdWtNRzBmeHd6aHBzc0U4ck1qSyIsImlhdCI6MTcwOTk0MjU2MH0.ZsS9PXqrXfYVSYXVKhaqGP0aWJe93VcU6aDpHyPxV7M"; // Replace with your actual bearer token

    //   const postId = post?.id; // Assuming post.id exists in your scope

    //   const response = await axios.put(
    //     "http://10.0.2.2:8000/post/updatePostLike",
    //     {
    //       id: postId,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   console.log(response);
    //   setPostUpdated(true);
    // } catch (error) {
    //   console.error("Error posting data:", error);
    // }

    try {
      const token = ""; // Replace with your actual bearer token

      const response = await axios.put(
        "http://10.0.2.2:8000/post/updatePostLike",
        { id: "1f9734ac-b472-4e22-9f20-946397d4f210" },
        {
          headers: {
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
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View style={styles.ProfileStyle}>
        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold" }}>
          {post.name}
        </Text>
      </View>
      <View style={styles.PostCard}>
        {post?.image?.length !== 0 && (
          <View style={styles.imageContainer}>
            <View style={styles.image}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/cat.jpeg")}
              />
            </View>
            <View style={styles.image}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/cat.jpeg")}
              />
            </View>
            <View style={styles.image}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/cat.jpeg")}
              />
            </View>
            <View style={styles.image}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../../assets/cat.jpeg")}
              />
            </View>
          </View>
        )}
        <Text style={{ marginTop: 10, width: "100%", textAlign: "left" }}>
          {post.caption}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#e3e3e3",
        }}
      >
        <TouchableOpacity
          style={{
            width: "33%",
            marginRight: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#bcbcbc",
            padding: 5,
          }}
        >
          <Ionicons name="heart" size={20} color="black" />
          <Text style={{ marginLeft: 5 }} onPress={() => updatePostLike()}>
            Like {post.likes}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "33%",
            marginRight: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 0.5,
            borderColor: "#bcbcbc",
            padding: 5,
          }}
        >
          <Ionicons name="chatbubble" size={20} color="black" />
          <Text style={{ marginLeft: 5 }}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "33%",
            marginRight: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 0.5,
            borderColor: "#bcbcbc",
            padding: 5,
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/share.png")}
          />
          <Text style={{ marginLeft: 5 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  hamburgerButton: {
    position: "relative",
  },
  ProfileStyle: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginRight: 90,
    position: "absolute",
    left: 80,
  },

  loginLogoutStyle: {
    flexDirection: "row",
    backgroundColor: "#597C64",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    padding: 20,
  },
  containerStyle: {
    paddingTop: 30,
    height: "100%",
    position: "relative",
  },
  // image: {
  //   // backgroundColor: "black",
  //   width: 150,
  // },
  PostCard: {
    width: "100%",
    flexDirection: "col",
    justifyContent: "start",
    alignItems: "start",
    marginTop: 10,

    paddingLeft: 10,
    paddingBottom: 10,
  },
});
