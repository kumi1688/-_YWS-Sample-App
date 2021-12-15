import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { readData, writeData } from "../db/index";

export default function db_controller({ collection, data }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => writeData(collection, data)}
      >
        <Text>DB 쓰기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => readData(collection)}
      >
        <Text>DB 읽기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9db35",
    padding: 10,
  },
});
