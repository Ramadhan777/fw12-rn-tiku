import React from "react";
import { ScrollView, View, Image, TouchableOpacity} from "react-native";
import { HStack, Pressable, Text } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <HStack justifyContent="space-between" style={{ marginHorizontal: 50, paddingTop: 15 }}>
        <Pressable onPress={() => navigation.navigate("Profile")} paddingBottom="15" >
          <Text fontSize="17" color="#AAAAAA">Details Account</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("OrderHistory")} paddingBottom="15" borderBottomWidth="1" borderColor="#1b30cf">
          <Text fontSize="17" >
            Order History
          </Text>
        </Pressable>
      </HStack>
      <View style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: "#F5F6F8" }}>
        <View>
          <View style={{ backgroundColor: "white", paddingVertical: 30, borderRadius: 12, marginBottom: 30 }}>
            <View style={{ marginBottom: 30, paddingHorizontal: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <Image source={require("../../assets/cineOne.png")} />
              </View>
              <Text style={{ flex: 1, fontSize: 16, color: "#6B6B6B", marginBottom: 10 }}>Tuesday, 07 July 2020 - 04:30pm</Text>
              <Text style={{ fontSize: 20 }}>Spider-Man: Homecoming</Text>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: "#E6E6E6", marginBottom: 20 }} />

            <View style={{ paddingHorizontal: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TicketResult")}  style={{ backgroundColor: "#00BA88", alignItems: "center", borderRadius: 8, padding: 10 }}>
                <Text style={{ color: "white" }}>Ticket in active</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={{ backgroundColor: "white", paddingVertical: 30, borderRadius: 12, marginBottom: 10 }}>
            <View style={{ marginBottom: 30, paddingHorizontal: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <Image source={require("../../assets/ebvId.png")} />
              </View>
              <Text style={{ flex: 1, fontSize: 16, color: "#6B6B6B", marginBottom: 10 }}>Tuesday, Monday, 14 June 2020 - 02:00pm</Text>
              <Text style={{ fontSize: 20 }}>Avengers: End Game</Text>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: "#E6E6E6", marginBottom: 20 }} />

            <View style={{ paddingHorizontal: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TicketResult")} style={{ backgroundColor: "#6E7191", alignItems: "center", borderRadius: 8, padding: 10 }}>
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
