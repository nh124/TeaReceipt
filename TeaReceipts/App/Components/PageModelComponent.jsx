// TeaRecipesComponent.js

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SidePanel from "./SidePanel";
import { Ionicons } from "@expo/vector-icons";

const TeaRecipesComponent = ({ children }) => {
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

      <ScrollView>{children}</ScrollView>
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
});

export default TeaRecipesComponent;
