import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Select, CheckIcon } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Month from "../components/Month";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const ListMovie = () => {
  const navigation = useNavigation();
  const [genre, setGenre] = React.useState("");

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />

      <View style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: "#F5F6F8" }}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>List Movie</Text>

          <View style={{ flexDirection: "row", width: 300, marginTop: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", marginRight:10,borderRadius: 16  }}>
              <Select
                selectedValue={genre}
                accessibilityLabel="Sort"
                width="full"
                height="10"
                placeholder="Sort"
                borderRadius='16'
                onValueChange={(itemValue) => setGenre(itemValue)}
              >
                <Select.Item label="Action" value="Action" />
                <Select.Item label="Drama" value="Drama" />
                <Select.Item label="Adventure" value="Adventure" />
                <Select.Item label="Family" value="Family" />
                <Select.Item label="Comedy" value="backend" />
              </Select>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput style={{ padding: 5, paddingLeft: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 16 }} placeholder="Search Movie Name ..." />
            </View>
          </View>

          <ScrollView horizontal>
            <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "nowrap", overflowX: "scroll", marginTop: 15 }}>
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
        </View>

        <View style={{ flexDirection: "row", marginTop: 30, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <View style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/blackWidow.png")} style={{ width: 120, height: 185 }} />
            </View>
            <View style={{ width: 120 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Black Widow</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/theWitches.png")} style={{ width: 120, height: 185 }} />
            </View>
            <View style={{ width: 120 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>The Witches</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Adventure, Comedy, Family</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/blackWidow.png")} style={{ width: 120, height: 185 }} />
            </View>
            <View style={{ width: 120 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Black Widow</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/theWitches.png")} style={{ width: 120, height: 185 }} />
            </View>
            <View style={{ width: 120 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>The Witches</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Adventure, Comedy, Family</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default ListMovie;
