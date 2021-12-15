import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import DB_Controller from "../components/DB_Controller";

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
        <DB_Controller collection="gps" data={location} />
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
