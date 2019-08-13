import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import logo from "../assets/logo.png";

export default function Main() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.buttonText}>Main</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  button: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#df4723",
    borderWidth: 0,
    borderRadius: 4,
    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
