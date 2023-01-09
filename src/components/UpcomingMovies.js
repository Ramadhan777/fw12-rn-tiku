import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Month from "./Month";

const UpcomingMovies = () => {
  return (
    <View style={{ marginVartical: 30, paddingHorizontal: 30, paddingVertical: 30 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ flex: 1, fontSize: 22, fontWeight: "bold" }}>Upcoming Movies</Text>
        <Text style={{ color: "#1b30cf", fontSize: 18 }}>view all</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "nowrap", overflowX: "scroll", marginBottom: 20,}}>
        <Month month='September'/>
        <Month month='October'/>
        <Month month='November'/>
        <Month month='December'/>
        <Month month='January'/>
        <Month month='February'/>
        <Month month='March'/>
        <Month month='April'/>
        <Month month='May'/>
        <Month month='June'/>
        <Month month='July'/>
        <Month month='August'/>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "nowrap", overflowX: "scroll" }}>
        
        <View style={{ padding: 15, borderWidth: 2, borderColor: "#DEDEDE", borderRadius: 6, marginRight: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Image source={require("../../assets/blackWidow.png")} style={{ width: 120, height: 185 }} />
          </View>
          <View style={{ width: 120 }}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Black Widow</Text>
              <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
            </View>

            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                <Text style={{ color: "#1b30cf" }}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ padding: 15, borderWidth: 2, borderColor: "#DEDEDE", borderRadius: 6, marginRight: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Image source={require("../../assets/theWitches.png")} style={{ width: 120, height: 185 }} />
          </View>
          <View style={{ width: 120 }}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>The Witches</Text>
              <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Adventure, Comedy, Family</Text>
            </View>

            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                <Text style={{ color: "#1b30cf" }}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ padding: 15, borderWidth: 2, borderColor: "#DEDEDE", borderRadius: 6, marginRight: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Image source={require("../../assets/tenet.png")} style={{ width: 120, height: 185 }} />
          </View>
          <View style={{ width: 120 }}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tenet</Text>
              <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Sci-Fi</Text>
            </View>

            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                <Text style={{ color: "#1b30cf" }}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpcomingMovies;