import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import getLogs from "../services";

export default function AppForm() {
  const [input, setInput] = useState("0");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    armazenaLogs();
  }, []);
  const armazenaLogs = async () => {
    try {
      const logs = await getLogs(input);
      setLogs(logs.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%', marginTop: 100}}>
        <TextInput
          placeholder="Bowl"
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
        ></TextInput>
      </View>
        <TouchableOpacity style={{padding: 10, backgroundColor: 'green', borderRadius: 20, marginTop: 10}} onPress={armazenaLogs}>
          <Text>Recuperar Logs</Text>
        </TouchableOpacity>
      <View style={{ paddingTop: 10 }}>
        <Text>LOGS</Text>
        <FlatList
          data={logs}
          renderItem={({ item }) => <Text>{item.log}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#2222",
  },
});
