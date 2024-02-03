import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInpu,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", username, password);
    navigation.navigate("Home");
  };
  const redirectRegister = () => {
    // Navigate to the Register screen
    navigation.navigate("Register");
  };
  return (
    <SafeAreaView style={styles.loginStyle}>
      <View style={{ position: "relative", width: 100 }}>
        <View style={styles.designStyle}>
          <Svg width="200" height="200" viewBox="0 0 200 200">
            <Path
              fill="#FDA83E"
              fillOpacity={0.5}
              d="M70.5,-22.8C79.9,5.9,68,41.5,43.7,58.9C19.3,76.3,-17.4,75.5,-34.9,60C-52.4,44.4,-50.7,14.3,-41.6,-14C-32.6,-42.3,-16.3,-68.6,7.1,-70.9C30.6,-73.3,61.2,-51.5,70.5,-22.8Z"
              transform="translate(100 100)"
            />
          </Svg>
        </View>
        <View style={styles.designStyleOuter}>
          <Svg width="200" height="200" viewBox="0 0 200 200">
            <Path
              fill="#FDA83E"
              // fillOpacity={0.5}
              d="M70.5,-22.8C79.9,5.9,68,41.5,43.7,58.9C19.3,76.3,-17.4,75.5,-34.9,60C-52.4,44.4,-50.7,14.3,-41.6,-14C-32.6,-42.3,-16.3,-68.6,7.1,-70.9C30.6,-73.3,61.2,-51.5,70.5,-22.8Z"
              transform="translate(100 100)"
            />
          </Svg>
        </View>
      </View>

      {/* Logo */}
      <View style={styles.loginLogoutStyle}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../assets/teaCup.png")}
        />
        <Text style={styles.textStyle}>Tea Receipts</Text>
      </View>
      <View style={styles.loginFormStyle}>
        <Text style={styles.textStyle}>Hello</Text>
        <Text style={styles.textStyleSmall}>Sign into your account</Text>
        {/* Login form */}
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Username</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={{ width: "80%", alignItems: "flex-end" }}>
          <Text style={{ color: "#CACACA" }}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerStyle}>
        <Text> Don't have an account?</Text>
        <TouchableOpacity onPress={redirectRegister}>
          <Text style={{ color: "#ba5a11", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginStyle: {
    backgroundColor: "#F8F7FB",
    width: "100%",
    height: "100%",
    position: "relative",
    padding: 10,
  },
  designStyle: {
    position: "absolute",
    right: -10,
    zIndex: 10,
    top: 10,
  },
  designStyleOuter: {
    position: "absolute",
    right: 0,
    zIndex: 10,
  },

  inputContainerStyle: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  textStyle: {
    color: "#394458",
    fontWeight: "bold",
    fontSize: 30,
  },
  footerStyle: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyleSmall: {
    color: "#394458",
    fontWeight: "bold",
    fontSize: 15,
  },
  loginLogoutStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40%",
  },

  loginFormStyle: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  inputStyle: {
    height: 30,
    borderColor: "#CACACA",
    borderWidth: 0,
    borderBottomWidth: 1,
    width: "80%",
    color: "black",
    fontWeight: "bold",
    // backgroundColor: "green",
  },
  labelStyle: {
    color: "#CACACA",
    // backgroundColor: "black",
    width: "80%",
    fontSize: 16,
  },
  loginButton: {
    width: "60%",
    backgroundColor: "#FDA83E",
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
