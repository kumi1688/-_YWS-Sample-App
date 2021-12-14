import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";

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
    console.log(location);
    text = JSON.stringify(location);
  }

  return (
    location && (
      <View style={styles.container}>
        <Text style={styles.paragraph}>위도: {location.latitude}</Text>
        <Text style={styles.paragraph}>경도: {location.longitude}</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
