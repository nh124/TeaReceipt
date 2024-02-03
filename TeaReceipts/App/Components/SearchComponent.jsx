import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import PageModelComponent from "./PageModelComponent";

export default function SearchComponent() {
  const arr = Array.from({ length: 10 }, (_, index) => index);
  return (
    <PageModelComponent>
      <View style={styles.inputContainerStyle}>
        <Text style={styles.labelStyle}>Search</Text>
        <TextInput style={styles.inputStyle} placeholder="Search" />
      </View>
      <View
        style={{
          width: "100%",
          paddingTop: 10,
          alignItems: "center",
        }}
      >
        <View style={styles.filterContainer}>
          <Text style={{ marginRight: 5 }}>Search based on: </Text>
          <TouchableOpacity style={styles.filterButtonStyle}>
            <Text>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonStyle}>
            <Text>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonStyle}>
            <Text>City</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={styles.recentSearchContainer}>
          <Text style={{ fontWeight: "bold" }}>Your recent searches</Text>
          <ScrollView
            style={{
              flexDirection: "column",
              marginBottom: 5,
            }}
          >
            {arr.map((index) => (
              <View style={styles.searchCardStyle} key={index}>
                <View
                  style={{
                    borderRadius: 50,
                    overflow: "hidden",
                    marginRight: 10,
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/cat.jpeg")}
                  />
                </View>
                <Text>Bob henry</Text>
              </View>
            ))}
          </ScrollView>
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
  labelStyle: {
    color: "#CACACA",
    width: "80%",
    fontSize: 16,
  },
  inputStyle: {
    borderColor: "#CACACA",
    padding: 10,
    borderWidth: 1,
    width: "80%",
    color: "black",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    alignItems: "center",
  },
  filterButtonStyle: {
    backgroundColor: "#D0D0D0",
    padding: 7,
    borderRadius: 10,
    marginRight: 5,
  },
  recentSearchContainer: {
    paddingTop: 20,
    width: "80%",
  },
  searchCardStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 5,

    backgroundColor: "#D9D9D9",
  },
});
