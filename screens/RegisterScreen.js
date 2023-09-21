import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  KeyboardAvoidingView
} from "react-native";
// import CheckBox from '@react-native-community/checkbox';

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import logo from "../assets/logo.jpg";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      {/* Logo */}
      <View>
        <Image
          style={{ width: 250, height: 200, paddingTop: 200 }}
          source={logo}
        />
      </View>

      {/* Email and PW */}
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login into your account
          </Text>
        </View>

        {/* User name box */}
        <View style={{ marginTop: 60 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              borderColor: "#dcdcdc",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Ionicons
              name="person"
              style={{ marginLeft: 8 }}
              size={24}
              color="gray"
            />

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
                marginLeft: 8,
              }}
              placeholder="Enter your username"
            />
          </View>
        </View>

        {/* Email box */}
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              borderColor: "#dcdcdc",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 18,
                marginLeft: 8,
              }}
              placeholder="Enter your email"
            />
          </View>
        </View>

        {/* PW box */}
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              borderColor: "#dcdcdc",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <AntDesign
              name="lock1"
              style={{ marginLeft: 8 }}
              size={24}
              color="gray"
            />

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
                marginLeft: 8,
              }}
              placeholder="Enter your password"
            />
          </View>
        </View>

        {/* Confirm PW box */}
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 5,
              borderRadius: 5,
              borderColor: "#dcdcdc",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <AntDesign
              name="lock1"
              style={{ marginLeft: 8 }}
              size={24}
              color="gray"
            />

            <TextInput
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: confirmPassword ? 16 : 16,
                marginLeft: 8,
              }}
              placeholder="Comfirm your password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
          }}
        >
          {/* <CheckBox 
            disabled={false}
            value={isSelected}
            onValueChange={(newValue) => setSelected(newValue)}
          /> */}
          <Text style={{ fontWeight: "500" }}>
            I accept with
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              {" "}
              Terms of Use{" "}
            </Text>
            <Text style={{ fontWeight: "500" }}>and</Text>
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              {" "}
              Privacy Policy
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: 45 }} />

        {/* Sign In button  */}
        <Pressable
          style={{
            width: 200,
            backgroundColor: "#3064e2",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Sign In
          </Text>
        </Pressable>

        {/* Create account text  */}
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ color: "gray", fontSize: 16, textAlign: "center" }}>
            Don't have an account?
            <Text
              style={{ color: "#3064e2", fontSize: 18, fontWeight: "bold" }}
            >
              {" "}
              Sign up
            </Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
