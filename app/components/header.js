import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Pet Feeder Logs</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: "20%",
    width: "100%",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8FBC8F",
    borderRadius: 8,
  },
  title: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 8,
    backgroundColor: "#8FBC8F",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  }
});

export default Header;