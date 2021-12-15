import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import DB_Controller from "../components/DB_Controller";
import * as Device from "expo-device";

export default function DeviceInfoScreen() {
  const [data, setData] = useState(null);

  function getDeviceInfo() {
    const info = [
      {
        id: 1,
        value: Device.isDevice ? "True" : "False",
        title: "실제기기여부",
      },
      {
        id: 2,
        value: Device.manufacturer,
        title: "제조사",
      },
      {
        id: 3,
        value: Device.modelName,
        title: "모델명",
      },
      {
        id: 4,
        value: `${Device.totalMemory / (1024 * 1024)} MB`,
        title: "메모리사용량(MB)",
      },
      {
        id: 5,
        value: Device.osVersion,
        title: "OS 버전",
      },
      {
        id: 6,
        value: Device.platformApiLevel,
        title: "플랫폼 API 버전",
      },
      {
        id: 7,
        value: Device.deviceName,
        title: "기기 이름",
      },
    ];
    return info;
  }

  useEffect(() => {
    const info = getDeviceInfo();
    setData(info);
  }, []);

  function getItem({ item }) {
    return (
      <SafeAreaView style={styles.itemBox}>
        <Text style={styles.item}>
          {item.title}: {item.value}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    data && (
      <SafeAreaView style={styles.container}>
        <DB_Controller collection="DeviceInfo" data={data} />
        <View>
          <FlatList
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            style={styles.list}
            data={data}
            renderItem={getItem}
          />
        </View>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  list: {
    backgroundColor: "white",
  },
  itemBox: {
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  item: {
    fontSize: 16,
    color: "black",
  },
  seperator: {
    backgroundColor: "#e0e0e0",
    height: 3,
  },
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
