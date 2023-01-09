import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../components/Footer";

const Payment = () => {
  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <View style={{  backgroundColor: "#F5F6F8" }}>
        <View style={{borderBottomRadius: 20, backgroundColor: 'white', flexDirection: "row", paddingHorizontal: 30, paddingVertical: 15}}>

        <Text style={{ flex: 1, fontSize: 24, color: '#AAAAAA' }}>Total Payment</Text>
        <Text style={{ fontSize: 24, color: "#1b30cf" }}>$30</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: "#F5F6F8" }}>
        <Text style={{ fontSize: 22, color: "#14142B", marginBottom: 20 }}>Payment Method</Text>
        <View style={{ backgroundColor: "white", padding: 20, paddingVertical: 40, borderRadius: 16, marginBottom: 30 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View>
              <TouchableOpacity style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}>
                <Image source={require("../../assets/logos_google-pay.png")} style={{ width: 35, height: 14 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}>
                <Image source={require("../../assets/logos_visa.png")} style={{ width: 38, height: 12 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}>
                <Image source={require("../../assets/gopay.png")} style={{ width: 50, height: 16 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}>
                <Image source={require("../../assets/logos_paypal.png")} style={{ width: 15, height: 18 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}>
                <Image source={require("../../assets/Vector.png")} style={{ width: 44, height: 14 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}>
                <Image source={require("../../assets/dana.png")} style={{ width: 52, height: 14 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginVertical: 20 }}>
            <View style={{ borderBottomWidth: 1, borderColor: "#DEDEDE" }}></View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={{ backgroundColor: "white", paddingHorizontal: 20, marginTop: -10 }}>
                <Text style={{ color: "#1b30cf", fontSize: 17 }}>or</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontSize: 17 }}>Pay via cash. </Text>
            <Text style={{ color: "#1b30cf", fontSize: 17 }}>See how it work</Text>
          </View>
        </View>

        <Text style={{ fontSize: 22, color: "#14142B", marginBottom: 20 }}>Personal Info</Text>

        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 16 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 19, color: "#4E4B66", marginBottom: 10 }}>Full Name</Text>
            <TextInput placeholder="Jonas El Rodriguez" style={{ flex: 1, height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, borderRadius: 12 }} name="fullName" />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 19, color: "#4E4B66", marginBottom: 10 }}>Email</Text>
            <TextInput placeholder="jonasrodri123@gmail.com" style={{ flex: 1, height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, borderRadius: 12 }} name="email" />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 19, color: "#4E4B66", marginBottom: 10 }}>Phone Number</Text>
            <TextInput placeholder="81445687121" style={{ flex: 1, height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, borderRadius: 12 }} name="email" />
          </View>

          <View style={{ flex: 1, height: 50, paddingHorizontal: 15, borderRadius: 12, flexDirection: "row", alignItems: "center", backgroundColor: "rgba(244, 183, 64, 0.3)" }}>
            <Icon style={{ fontSize: 19, marginHorizontal: 10 }} name="exclamation-triangle" />
            <Text style={{ fontSize: 19, color: "#4E4B66" }}>Fill your data correctly.</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={{ backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16, marginTop: 30 }}>
            <Text style={{ fontSize: 18, color: "white" }}>Checkout now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default Payment;
