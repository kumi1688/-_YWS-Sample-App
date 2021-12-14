import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccScreen from "./AccScreen";
import GpsScreen from "./GpsScreen";
import DeviceInfoScreen from "./DeviceInfoScreen";

import { MaterialIcons } from "@expo/vector-icons";

const accIcon = {
  tabBarIcon: ({ color, size }) => (
    <MaterialIcons name="timeline" size={24} color="black" />
  ),
};
const gpsIcon = {
  tabBarIcon: ({ color, size }) => (
    <MaterialIcons name="gps-fixed" size={24} color="black" />
  ),
};
const deviceIcon = {
  tabBarIcon: ({ color, size }) => (
    <MaterialIcons name="device-unknown" size={24} color="black" />
  ),
};

const Tab = createBottomTabNavigator();

export default function RootScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="3축 가속도 센서"
        component={AccScreen}
        options={accIcon}
      />
      <Tab.Screen name="GPS" component={GpsScreen} options={gpsIcon} />
      <Tab.Screen
        name="Device"
        component={DeviceInfoScreen}
        options={deviceIcon}
      />
    </Tab.Navigator>
  );
}
