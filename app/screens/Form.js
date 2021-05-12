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
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Bowl</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
        ></TextInput>
      </View>
        <TouchableOpacity style={styles.button} onPress={armazenaLogs}>
          <Text style={styles.buttonText}>Recuperar Logs</Text>
        </TouchableOpacity>
      <View style={styles.logs}>
        <Text style={{fontSize: 20, fontWeight: "bold", paddingBottom: 5}}>{logs.length > 0 ? 'LOGS' : 'Sem LOGS'}</Text>
        <FlatList
          data={logs}
          renderItem={({ item }) => <Text style={styles.content}>{`${item.log}`}</Text>}
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
    justifyContent: "flex-start",
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#2222",
    height: 30,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    padding: 10, 
    backgroundColor: "#8FBC8F", 
    borderRadius: 20, 
    marginTop: 10,
  },
  inputTitle: {
  },
  inputContainer: {
    width: "70%",
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  logs: { 
    paddingTop: 20,
    paddingHorizontal: 40,
    backgroundColor: "#2222",
    height: "50%",
    width: "75%",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center", 
  },
  content: {
    paddingVertical: 3,
    fontSize: 15,
  },
});
