import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SidePanel({ translateX, setTranslateX }) {
  console.log(translateX);
  return (
    <TouchableOpacity
      onPress={() => setTranslateX(420)}
      style={{
        transform: [{ translateX: translateX }],
        position: "absolute",
        top: 30,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
      }}
    >
      <View
        style={{
          width: 200,
          height: "100%",
          backgroundColor: "gray",
          right: 0,
          top: 0,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={styles.topBanner}>
            <Text>Welcome</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text> Terms and conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Rules</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> About us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text> FAQs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="log-out-outline" size={24} color="white" />
            <Text style={{ fontSize: 10, color: "white" }}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="book" size={24} color="white" />
            <Text style={{ fontSize: 10, color: "white" }}>Tutorial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="call" size={24} color="white" />
            <Text style={{ fontSize: 10, color: "white" }}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
  },
  topBanner: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingLeft: 10,
    height: 40,
    width: "100%",
    backgroundColor: "#597C64",
    marginTop: 2,
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
  },
  footerButton: {
    width: "33%",
    backgroundColor: "#597C64",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
