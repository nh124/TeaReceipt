import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SidePanel from "./SidePanel";

export default function NotificationComponent() {
  const postsArray = Array.from({ length: 10 }, (_, index) => index);
  const [translateX, setTranslateX] = useState(420);
  return (
    <SafeAreaView style={styles.containerStyle}>
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
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          padding: 3,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Notifications</Text>
        <TouchableOpacity
          style={{
            padding: 6,
            borderRadius: 10,
            backgroundColor: "#70EE9C",
          }}
        >
          <Text style={{ color: "#3b3a3a" }}>Clear</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            {postsArray.map((index) => (
              <TouchableOpacity style={styles.notificationCard} key={index}>
                <Ionicons name="chatbubble" size={24} color="black" />
                <Text
                  style={{
                    marginLeft: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque amet quae
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notificationCard: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 2,
  },
  containerStyle: {
    paddingTop: 30,
    height: "100%",
    position: "relative",
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
  logStyle: {
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
});
