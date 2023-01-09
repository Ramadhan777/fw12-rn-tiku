import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const EmailBox = () => {
  return (
    <View style={{ flex: 1, marginVertical: 30, paddingVertical: 30, paddingHorizontal: 30, marginHorizontal: 20, borderRadius: 8, boxShadow: "0 8 16 rgba(186, 186, 186, 0.15)", borderWidth: 1 }}>
      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <Text style={{ fontSize: 21, color: "#4E4B66" }}>Be the vanguard of the</Text>
        <Text style={{ fontSize: 43, color: "#1b30cf", fontWeight: "bold" }}>Moviegoers</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View>
          <TextInput style={{ height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, backgroundColor: "#FCFDFE", borderRadius: 4, marginBottom: 15 }} placeholder="Type your email" />
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: "#1b30cf", flexDirection: "row", height: 40, borderRadius: 4, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, color: "white" }}>Join now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center"}}>
        <View style={{ paddingVertical: 20, flex: 1, width: 200 }}>
          <Text style={{ textAlign: "center", color: '#6E7191' }}>By joining you as a Tickitz member, we will always send you the latest updates via email .</Text>
        </View>
      </View>
    </View>
  );
};

export default EmailBox;
