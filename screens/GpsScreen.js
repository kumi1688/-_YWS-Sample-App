import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

import { readData, writeData } from "../db/index";

export default function GpsScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setLocation({ latitude, longitude });
    }
    getLocation();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // console.log(location);
    text = JSON.stringify(location);
  }

  return (
    location && (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => writeData("gps", location)}
          >
            <Text>DB 쓰기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => readData("gps")}
            style={[styles.button, styles.middleButton]}
          >
            <Text>DB 읽기</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.paragraph}>위도: {location.latitude}</Text>
          <Text style={styles.paragraph}>경도: {location.longitude}</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9db35",
    padding: 10,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
