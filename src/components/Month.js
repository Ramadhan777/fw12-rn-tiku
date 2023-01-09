import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Month = ({month}) => {
  return (
    <View>
      <TouchableOpacity style={{ width: 120, height: 40, borderWidth: 1, borderColor: "#1b30cf", marginRight: 10, borderRadius: 6, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#1b30cf" }}>{month}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Month;
