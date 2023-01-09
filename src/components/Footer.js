import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () => {
  return (
    <View style={{ marginHorizontal: 30, marginTop: 30}}>
    <View style={{marginBottom: 15}}>
      <View style={{ marginBottom: 30 }}>
        <View>
          <Image source={require("../../assets/Tiku.jpg")} style={{ width: 150, height: 60 }} />
        </View>
        <Text style={{ fontSize: 17, width: 280, marginTop: 15, color: "#6E7191" }}>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</Text>
      </View>

      <View style={{ marginBottom: 30 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>Explore</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, color: "#6E7191", marginRight: 50 }}>Home</Text>
          <Text style={{ fontSize: 17, color: "#6E7191" }}>List Movie</Text>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>Our Sponsor</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Image source={require("../../assets/ebvId.png")} />
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require("../../assets/cineOne.png")} />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={require("../../assets/hiflix.png")} />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>Follow us</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Icon name="facebook" style={{ fontSize: 20, color: "#6E7191", marginRight: 30 }} />
          </View>
          <View>
            <Icon name="instagram" style={{ fontSize: 20, color: "#6E7191", marginRight: 30 }} />
          </View>
          <View>
            <Icon name="twitter" style={{ fontSize: 20, color: "#6E7191", marginRight: 30 }} />
          </View>
          <View>
            <Icon name="youtube" style={{ fontSize: 20, color: "#6E7191", marginRight: 30 }} />
          </View>
        </View>
      </View>

      <View></View>
    </View>

    <View>
        <Text style={{ fontSize: 17, color: "#6E7191" }}>© 2020 Tickitz. All Rights Reserved.</Text>
    </View>
    </View>
  );
};

export default Footer;
