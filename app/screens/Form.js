import React, { useState, useEffect } from "react";
import { StyleSheet,
  View,
  Text, 
  TouchableOpacity, 
  TextInput, 
  FlatList,
  ScrollView
} from "react-native";
import getLogs from "../services";

export default function AppForm() {
  const [input, setInput] = useState('0');
  const [logs, setLogs] = useState([]);

  useEffect(() => {armazenaLogs()}, [])
  const armazenaLogs = async () => {
    try {
      const logs = await getLogs(input);
      setLogs(logs.data);
    } catch (err) {
      console.log(err);
    }
  }
  const pegaLogs = () => {
    if(logs){
      console.log(logs)
      logs.forEach(function(log){
        console.log(logs)
        return (
          <View>
            <Text>{log.log}</Text>
          </View>
        )
      });
    } else { 
      return (
        <View><Text>sem logs</Text></View>
      )
    }
  }

    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Bowl' 
          style={styles.input} 
          value={input} 
          onChangeText={(text) => setInput(text)}>
          </TextInput>
        <TouchableOpacity onPress={armazenaLogs}>
          <Text>Recuperar Logs</Text>
        </TouchableOpacity>
        {pegaLogs()}
      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      paddingLeft: 10,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "#2222",
    },
    flatList: {
      flex: 1,
    }
  });