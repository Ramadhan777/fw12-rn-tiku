import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const Order = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <View style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: "#F5F6F8" }}>
        <Text style={{ fontSize: 22, color: "#14142B", marginBottom: 20 }}>Choose Your Seat</Text>

        <View style={{ backgroundColor: "white", paddingHorizontal: 15, paddingVertical: 40, borderRadius: 16 }}>
          <View style={{ borderBottomWidth: 5, borderColor: "#1b30cf", marginBottom: 15, borderRadius: 3 }}></View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ flex: 1 }}>
              {[" ", " ", " ", " ", " ", " ", " "].map((rows, i) => {
                return (
                  <View key={i} style={{ flexDirection: "row" }}>
                    {[0, 1, 2, 3, 4, 5, 6].map((num, i) => {
                      return <TouchableOpacity key={i} style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#D6D8E7", marginRight: 5, marginBottom: 5 }}></TouchableOpacity>;
                    })}
                  </View>
                );
              })}
            </View>

            <View style={{ flex: 1, alignItems: "flex-end" }}>
              {[" ", " ", " ", " ", " ", " ", " "].map((rows, i) => {
                return (
                  <View key={i} style={{ flexDirection: "row" }}>
                    {[0, 1, 2, 3, 4, 5, 6].map((num, i) => {
                      return <TouchableOpacity key={i} style={{ width: 14, height: 14, borderRadius: 2, backgroundColor: "#D6D8E7", marginRight: 5, marginBottom: 5 }}></TouchableOpacity>;
                    })}
                  </View>
                );
              })}
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 20, color: "#14142B", marginBottom: 20 }}>Seating key</Text>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <View style={{ flexDirection: "row", marginRight: 40 }}>
                <Icon name="arrow-down" size={20} />
                <Text style={{ fontSize: 18, color: "#14142B", marginLeft: 10 }}>A -G</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Icon name="arrow-right" size={20} />
                <Text style={{ fontSize: 18, color: "#14142B", marginLeft: 10 }}>1 -14</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <View style={{ flexDirection: "row", marginRight: 30 }}>
                <View style={{ width: 20, height: 20, borderRadius: 5, backgroundColor: "#D6D8E7", marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: "#14142B" }}>Available</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 20, height: 20, borderRadius: 5, backgroundColor: "#1b30cf", marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: "#14142B" }}>Selected</Text>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 20, height: 20, borderRadius: 5, backgroundColor: "#6E7191", marginRight: 10 }} />
                <Text style={{ fontSize: 18, color: "#14142B" }}>Sold</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 22, color: "#14142B", marginTop: 30, marginBottom: 15 }}>Order Info</Text>

        <View style={{ backgroundColor: "white", paddingVertical: 25, borderRadius: 6 }}>
          <View style={{ alignItems: "center", marginBottom: 15 }}>
            <View>
              <Image source={require("../../assets/cineOne.png")} />
            </View>
            <Text style={{ fontSize: 24, marginVertical: 5 }}>CineOne21 Cinema</Text>
            <Text style={{ fontSize: 15 }}>Spider-Man: Homecoming</Text>
          </View>

          <View style={{ marginHorizontal: 20, marginBottom: 30 }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ flex: 1, fontSize: 18, color: "#6B6B6B" }}>Tuesday, 07 July 2020</Text>
              <Text style={{ fontSize: 18 }}>02:00pm</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ flex: 1, fontSize: 18, color: "#6B6B6B" }}>One ticket price</Text>
              <Text style={{ fontSize: 18 }}>$10</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ flex: 1, fontSize: 18, color: "#6B6B6B" }}>Seat choosed</Text>
              <Text style={{ fontSize: 18 }}>C4, C5, C6</Text>
            </View>
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: "#E6E6E6" }} />

          <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20 }}>
            <Text style={{ flex: 1,  fontSize: 24}}>Total Payment</Text>
            <Text style={{  fontSize: 24, color: '#1b30cf' }}>$30</Text>
          </View>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Payment')}  style={{backgroundColor: '#1b30cf', padding: 12, alignItems: 'center', borderRadius: 16, marginTop: 30, }}>
                <Text style={{  fontSize: 18, color: 'white' }}>Checkout now</Text>
            </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default Order;
