import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => (
  <View style={styles.container}>
    <View style={styles.view1}>
      <Text style={styles.title}>Pet Feeder Logs</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    height: "20%",
    width: "100%",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  view1: {
    width: "80%",
    height: "40%",
    backgroundColor: "#8FBC8F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 8,
    backgroundColor: "#8FBC8F",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  }
});

export default Header;