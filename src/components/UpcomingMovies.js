import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Month from "./Month";
import { useNavigation } from "@react-navigation/native";
import http from "../helper/http";

const UpcomingMovies = () => {
  const navigation = useNavigation();
  const [upcoming, setUpcoming] = React.useState([]);

  React.useEffect(() => {
    http()
      .get("/movies/upcoming")
      .then((res) => setUpcoming(res.data.results));
  }, []);

  return (
    <View style={{ paddingHorizontal: 30, marginVertical: 50 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ flex: 1, fontSize: 22, fontWeight: "bold" }}>Upcoming Movies</Text>
        <Text onPress={() => navigation.navigate("ListMovie")} style={{ color: "#1b30cf", fontSize: 18 }}>
          view all
        </Text>
      </View>

      <ScrollView horizontal>
        <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "nowrap", overflowX: "scroll", marginBottom: 20 }}>
          <Month month="September" />
          <Month month="October" />
          <Month month="November" />
          <Month month="December" />
          <Month month="January" />
          <Month month="February" />
          <Month month="March" />
          <Month month="April" />
          <Month month="May" />
          <Month month="June" />
          <Month month="July" />
          <Month month="August" />
        </View>
      </ScrollView>

      <ScrollView horizontal>
        <View style={{ flexDirection: "row", flexWrap: "nowrap", overflowX: "scroll" }}>
          {upcoming.map((movie, i) => (
            <View key={i} style={{ padding: 15, borderWidth: 2, borderColor: "#DEDEDE", borderRadius: 6, marginRight: 15 }}>
              <View style={{ marginBottom: 10 }}>
                <Image source={{
                      uri: movie.picture,
                    }}
                    style={{ width: 120, height: 180 }}/>
              </View>
              <View style={{ width: 120 }}>
                <View style={{ alignItems: "center", justifyContent:'center', marginBottom: 10, height: 80 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: 'center' }}>{movie.title}</Text>
                  <Text style={{ textAlign: "center", color: "#A0A3BD" }}>{movie.genre}</Text>
                </View>

                <View>
                  <TouchableOpacity onPress={() => navigation.navigate("MovieDetail", {
                    movieId: movie.id
                  })} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                    <Text style={{ color: "#1b30cf" }}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

  
        </View>
      </ScrollView>
    </View>
  );
};

export default UpcomingMovies;
