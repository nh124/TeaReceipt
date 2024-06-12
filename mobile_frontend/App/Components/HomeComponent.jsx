import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SidePanel from "./SidePanel";
import { PostComponents } from "./PostComponent";
import axios from "axios";

const HomeComponent = () => {
  const [translateX, setTranslateX] = useState(420);
  const [posts, setPosts] = useState([]);
  const [postUpdated, setPostUpdated] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      // if (!postUpdated) return;
      try {
        const token = ""; // Replace with your actual bearer token

        const response = await axios.get(
          "http://10.0.2.2:8000/post/getAllPosts",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };
    getPosts();
  }, []);
  console.log("Posts:" + posts);
  return (
    <SafeAreaView style={styles.containerStyle}>
      {/* Logo */}
      <View style={styles.loginLogoutStyle}>
        <View style={styles.logStyle}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../assets/teaCup.png")}
          />
          <Text style={styles.textStyle}>Tea Receipts</Text>
        </View>
        <TouchableOpacity
          style={styles.hamburgerButton}
          onPress={() => setTranslateX(0)}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <SidePanel translateX={translateX} setTranslateX={setTranslateX} />
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {posts.map((post) => {
            return <PostComponents key={post.id} post={post} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "#e3e3e3",
    // padding: 10,
  },
});

export default HomeComponent;
