import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const NowShowing = () => {
  return (
    <View style={{ paddingTop: 30, paddingHorizontal: 30, backgroundColor: "#D6D8E7", height: 375 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ flex: 1, color: "#1b30cf", fontSize: 22, fontWeight: "bold" }}>Now Showing</Text>
        <Text style={{ color: "#1b30cf", fontSize: 18 }}>view all</Text>
      </View>

      <ScrollView horizontal>
        <View style={{ flexDirection: "row", alignItems: "center", fleViewxWrap: "nowrap", overflowX: "scroll" }}>
          <View style={{ padding: 15, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 6, marginRight: 15 }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/spiderman.png")} />
            </View>
            <View style={{ width: 120, display: "none" }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Spider-Man: H...</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ padding: 15, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 6, marginRight: 15 }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/theLionKing.png")} />
            </View>
            <View style={{ width: 120, display: "none" }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Spider-Man: H...</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ padding: 15, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 6, marginRight: 15 }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/johnWick.png")} style={{ width: 120, height: 185 }} />
            </View>
            <View style={{ width: 120, display: "none" }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Spider-Man: H...</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NowShowing;
