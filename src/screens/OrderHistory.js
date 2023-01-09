import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";

const OrderHistory = () => {
  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <View style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: "#F5F6F8" }}>
        <View>
          <View style={{ backgroundColor: "white", paddingVertical: 30, borderRadius: 12, marginBottom: 10 }}>
            <View style={{ marginBottom: 15, paddingHorizontal: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <Image source={require("../../assets/cineOne.png")} />
              </View>
              <Text style={{ flex: 1, fontSize: 16, color: "#6B6B6B", marginBottom: 10 }}>Tuesday, 07 July 2020 - 04:30pm</Text>
              <Text style={{ fontSize: 20 }}>Spider-Man: Homecoming</Text>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: "#E6E6E6", marginBottom: 20 }} />

            <View style={{paddingHorizontal: 20}}>
              <TouchableOpacity style={{ backgroundColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 10 }} 
            >
                <Text style={{ color: "white" }}>Ticket in active</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={{ backgroundColor: "white", paddingVertical: 30, borderRadius: 12, marginBottom: 10 }}>
            <View style={{ marginBottom: 15, paddingHorizontal: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <Image source={require("../../assets/cineOne.png")} />
              </View>
              <Text style={{ flex: 1, fontSize: 16, color: "#6B6B6B", marginBottom: 10 }}>Tuesday, 07 July 2020 - 04:30pm</Text>
              <Text style={{ fontSize: 20 }}>Spider-Man: Homecoming</Text>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: "#E6E6E6", marginBottom: 20 }} />

            <View style={{paddingHorizontal: 20}}>
              <TouchableOpacity style={{ backgroundColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 10 }}>
                <Text style={{ color: "white" }}>Ticket in active</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default OrderHistory;
