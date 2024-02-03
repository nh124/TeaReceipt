import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SidePanel from "./SidePanel";

const renderPost = () => {
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
        <View style={styles.image}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require("../../assets/cat.jpeg")}
          />
        </View>
        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold" }}>
          Bob Larry
        </Text>
        <Text> • </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#4f6a9a",
            padding: 4,
            paddingTop: 3,
            paddingBottom: 3,
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "#4f6a9a" }}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.PostCard}>
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
        <Text style={{ marginTop: 10 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt qui
          labore natus, accusantium unde mollitia esse commodi nemo illo
          consectetur perferendis a eos, ducimus blanditiis, nam excepturi hic
          culpa.
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
          <Text style={{ marginLeft: 5 }}>Like</Text>
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
const postsArray = Array.from({ length: 10 }, (_, index) => index);
const HomeComponent = () => {
  const [translateX, setTranslateX] = useState(420);
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
          {postsArray.map((index) => renderPost(index))}
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
