import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Pressable } from "native-base";

const NowShowing = () => {
  const [show, setShow] = React.useState(null);

  return (
    <View style={{ paddingTop: 30, paddingHorizontal: 30, backgroundColor: "#D6D8E7", height: 380, position: "relative" }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
        <Text style={{ flex: 1, color: "#1b30cf", fontSize: 22, fontWeight: "bold" }}>Now Showing</Text>
        <Text style={{ color: "#1b30cf", fontSize: 18 }}>view all</Text>
      </View>

      <ScrollView horizontal style={{ position: "absolute", top: 80, left: 30 }}>
        <View style={{ flexDirection: "row", flexWrap: "nowrap", marginBottom: 15 }}>
          <View>
            <Pressable
              borderColor={"#FFFFFF"}
              backgroundColor={show === 1 ? "#FFFFFF" : null}
              elevation={show === 1 ? 3 : 0}
              style={{
                padding: 15,
                borderWidth: 2,
                borderRadius: 8,
                marginRight: 15,
              }}
              onPress={() => (show === 1 ? setShow(null) : setShow(1))}
            >
              <View style={{ marginBottom: 10 }}>
                <Image source={require("../../assets/spiderman.png")} />
              </View>
              {show === 1 ? (
                <View style={{ width: 120 }}>
                  <View style={{ alignItems: "center", marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Spider-Man: H...</Text>
                    <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
                  </View>

                  <View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                      <Text style={{ color: "#1b30cf", fontSize: 16 }}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </Pressable>
          </View>

          <View>
            <Pressable
              elevation={show === 2 ? 3 : 0}
              borderColor={"#FFFFFF"}
              backgroundColor={show === 2 ? "#FFFFFF" : null}
              style={{ padding: 15, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 8, marginRight: 15, position: "relative", zIndex: 10 }}
              onPress={() => (show === 2 ? setShow(null) : setShow(2))}
            >
              <View style={{ marginBottom: 10 }}>
                <Image source={require("../../assets/theLionKing.png")} />
              </View>
              {show === 2 ? (
                <View style={{ width: 120 }}>
                  <View style={{ alignItems: "center", marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Spider-Man: H...</Text>
                    <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
                  </View>

                  <View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                      <Text style={{ color: "#1b30cf" }}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </Pressable>
          </View>

          <View>
            <Pressable
              elevation={show === 3 ? 3 : 0}
              borderColor={"#FFFFFF"}
              backgroundColor={show === 3 ? "#FFFFFF" : null}
              style={{ padding: 15, borderWidth: 2, borderColor: "#FFFFFF", borderRadius: 8, marginRight: 15 }}
              onPress={() => (show === 3 ? setShow(null) : setShow(3))}
            >
              <View style={{ marginBottom: 10 }}>
                <Image source={require("../../assets/johnWick.png")} style={{ width: 120, height: 185 }} />
              </View>
              {show === 3 ? (
                <View style={{ width: 120 }}>
                  <View style={{ alignItems: "center", marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Spider-Man: H...</Text>
                    <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
                  </View>

                  <View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                      <Text style={{ color: "#1b30cf" }}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NowShowing;
