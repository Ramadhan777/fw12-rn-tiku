import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import http from "../helper/http";

const NowShowing = () => {
  const [show, setShow] = React.useState(null);
  const [nowShowing, setNowShowing] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    http()
      .get("/movies/now")
      .then((res) => setNowShowing(res.data.results));
  }, []);

 

  return (
    <View style={{ paddingTop: 30, paddingHorizontal: 30, backgroundColor: "#D6D8E7", height: 380, position: "relative" }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
        <Text style={{ flex: 1, color: "#1b30cf", fontSize: 22, fontWeight: "bold" }}>Now Showing</Text>
        <Text onPress={() => navigation.navigate("ListMovie")} style={{ color: "#1b30cf", fontSize: 18 }}>
          view all
        </Text>
      </View>

      <ScrollView horizontal style={{ position: "absolute", top: 80, left: 30 }}>
        <View style={{ flexDirection: "row", flexWrap: "nowrap", marginBottom: 15 }}>
          {nowShowing.map((movie, i) => (
            <View key={i}>
              <Pressable
                borderColor={"#FFFFFF"}
                backgroundColor={show === i ? "#FFFFFF" : null}
                elevation={show === i ? 3 : 0}
                style={{
                  padding: 15,
                  borderWidth: 2,
                  borderRadius: 8,
                  marginRight: 15,
                }}
                onPress={() => (show === i ? setShow(null) : setShow(i))}
              >
                <View style={{ marginBottom: 10 }}>
                  <Image
                    source={{
                      uri: movie.picture,
                    }}
                    style={{ width: 120, height: 180 }}
                    alt={movie.title}
                  />
                </View>
                {show === i ? (
                  <View style={{ width: 120 }}>
                    <View style={{ alignItems: "center", justifyContent: 'center', marginBottom: 10, height: 80 }}>
                      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>{movie.title}</Text>
                      <Text style={{ textAlign: "center", color: "#A0A3BD" }}>{movie.genre}</Text>
                    </View>

                    <View>
                      <TouchableOpacity onPress={() => navigation.navigate("MovieDetail", {
                        movieId: movie.id
                      })} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                        <Text style={{ color: "#1b30cf", fontSize: 16 }}>Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : null}
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NowShowing;
