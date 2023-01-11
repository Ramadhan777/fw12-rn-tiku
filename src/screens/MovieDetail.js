import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Select, Pressable } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
// import {DatePicker} from "react-native-date-picker";

const MovieDetail = () => {
  const navigation = useNavigation();
  const [date, setDate] = React.useState(new Date());
  const [dateView, setDateView] = React.useState(false);

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <View style={{ padding: 20, borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 8 }}>
            <Image source={require("../../assets/spiderman.png")} style={{ width: 160, height: 245 }} />
          </View>
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: "#D6D8E7", paddingBottom: 40 }}>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>Spider-Man: Homecoming</Text>
            <Text style={{ fontSize: 18, color: "#4E4B66" }}>Adventure, Action, Sci-Fi</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <View style={{ marginBottom: 30 }}>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Release date</Text>
                <Text style={{ fontSize: 18 }}>June 28, 2017</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Duration</Text>
                <Text style={{ fontSize: 18 }}>2 hrs 13 min</Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ marginBottom: 30 }}>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Directed by</Text>
                <Text style={{ fontSize: 18 }}>Jon Watss</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Casts</Text>
                <Text style={{ fontSize: 18 }}>Tom Holland, Robert Downey Jr., etc.</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Synopsis</Text>
          <Text style={{ fontSize: 17, color: "#8692A6" }}>
            Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by
            thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.{" "}
          </Text>
        </View>
      </View>

      <View style={{ backgroundColor: "#F5F6F8", paddingVertical: 40, paddingHorizontal: 30 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Showtime and Tickets</Text>
          {/* <View>
            <Pressable onPress={() => setDateView(true)} style={{ alignItems: "center", marginTop: 10, backgroundColor: "#EFF0F6", marginHorizontal: 20, height: 40, justifyContent: "center" }}>
              <Text style={{ fontSize: 17 }}>Set a day</Text>
            </Pressable>
            <DatePicker
              modal
              open={dateView}
              date={date}
              onConfirm={(newDate) => {
                setDate(newDate);
                setDateView(false);
              }}
              onCancel={() => {
                setDateView(false);
              }}
            />
          </View> */}
          <View style={{ alignItems: "center", marginTop: 20, backgroundColor: "#EFF0F6", marginHorizontal: 20, height: 40 }}>
            <Select px="10" fontSize="16" accessibilityLabel="Set a day" width="full" height="10" placeholder="Set a city" borderColor="0" onValueChange={(itemValue) => setGenre(itemValue)}>
              <Select.Item label="Purwokerto" value="Purwokerto" />
              <Select.Item label="Jakarta" value="Jakarta" />
              <Select.Item label="Bandung" value="Bandung" />
              <Select.Item label="Bogor" value="Bogor" />
              <Select.Item label="Surabaya" value="Surabaya" />
            </Select>
          </View>
          <View style={{ alignItems: "center", marginTop: 20, backgroundColor: "#EFF0F6", marginHorizontal: 20, height: 40 }}>
            <Select px="10" fontSize="16" accessibilityLabel="Set a city" width="full" height="10" placeholder="Set a city" borderColor="0" onValueChange={(itemValue) => setGenre(itemValue)}>
              <Select.Item label="Purwokerto" value="Purwokerto" />
              <Select.Item label="Jakarta" value="Jakarta" />
              <Select.Item label="Bandung" value="Bandung" />
              <Select.Item label="Bogor" value="Bogor" />
              <Select.Item label="Surabaya" value="Surabaya" />
            </Select>
          </View>
        </View>

        <View>
          <View style={{ flex: 1, backgroundColor: "white", padding: 30, marginBottom: 25 }}>
            <View style={{ alignItems: "center", paddingBottom: 15, borderBottomWidth: 1, borderColor: "#DEDEDE", marginBottom: 10 }}>
              <View>
                <Image source={require("../../assets/ebvId.png")} />
              </View>
              <Text style={{ color: "#AAAAAA", fontSize: 17, width: 200, textAlign: "center", marginTop: 15 }}>Whatever street No.12, South Purwokerto</Text>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginVertical: 20 }}>
              <Text style={{ flex: 1, fontSize: 18 }}>Price</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>$10.00/seat</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Order")} style={{ backgroundColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 10 }}>
                <Text style={{ color: "white" }}>Book now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1, backgroundColor: "white", padding: 30, marginBottom: 25 }}>
            <View style={{ alignItems: "center", paddingBottom: 15, borderBottomWidth: 1, borderColor: "#DEDEDE", marginBottom: 10 }}>
              <View>
                <Image source={require("../../assets/ebvId.png")} />
              </View>
              <Text style={{ color: "#AAAAAA", fontSize: 17, width: 200, textAlign: "center", marginTop: 15 }}>Whatever street No.12, South Purwokerto</Text>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                  <Text style={{ fontSize: 16 }}>08:30am</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginVertical: 20 }}>
              <Text style={{ flex: 1, fontSize: 18 }}>Price</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>$10.00/seat</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Order")} style={{ backgroundColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 10 }}>
                <Text style={{ color: "white" }}>Book now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ borderBottomWidth: 1, borderColor: "#DEDEDE" }}></View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity style={{ backgroundColor: "#F5F6F8", paddingHorizontal: 20, marginTop: -10 }}>
              <Text style={{ color: "#1b30cf" }}>view more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default MovieDetail;
