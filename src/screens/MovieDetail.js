import React from "react";
import { ScrollView, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Input, Pressable, Select, Text } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import http from "../helper/http";
import moment from "moment";
import { useDispatch } from "react-redux";
import { chooseMovie } from "../redux/reducers/transaction";

const MovieDetail = ({ route }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const movieId = route.params.movieId;
  const [movie, setMovie] = React.useState({});
  const [cinema, setCinema] = React.useState([]);
  const [city, setCity] = React.useState("Purwokerto");
  const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [selectedTime, setSelectedTime] =  React.useState("");
  const [selectedCinema, setSelectedCinema] =  React.useState(null);

   const selectTime = (time, cinemaId) => {
    setSelectedTime(time);
    setSelectedCinema(cinemaId);
  };

  React.useEffect(() => {
    http()
      .get(`/movies/${movieId}`)
      .then((res) => setMovie(res.data.results));

    http()
      .get(`/movies/schedules?movieId=${movieId}&date=${date}&city=${city}`)
      .then((data) => data.data)
      .then((res) => res.results)
      .then((result) => setCinema(result));
  }, []);

  const showFormattedDate = (date) => {
    const options = {
      year: "numeric",
      day: "numeric",
      month: "long",
    };
    return new Date(date).toLocaleString("en-US", options);
  };

  const book = () => {
    dispatch(chooseMovie({
      movieId,
      cinemaId: selectedCinema,
      bookingDate: date,
      bookingTime: selectedTime
    }))
    navigation.navigate('Order')
  }

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <View style={{ padding: 20, borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 8 }}>
            <Image source={{ uri: movie.picture }} style={{ width: 160, height: 245 }} />
          </View>
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: "#D6D8E7", paddingBottom: 40 }}>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>{movie.title}</Text>
            <Text style={{ fontSize: 18, color: "#4E4B66" }}>{movie.genre}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <View style={{ marginBottom: 30, height: 70 }}>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Release date</Text>
                <Text style={{ fontSize: 18 }}>{showFormattedDate(movie.releaseDate)}</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Duration</Text>
                <Text style={{ fontSize: 18 }}>{movie.duration ? movie.duration : "Duration"}</Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ marginBottom: 30, height: 70 }}>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Directed by</Text>
                <Text style={{ fontSize: 18 }}>{movie.director ? movie.director : "Director"}</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, color: "#8692A6", marginBottom: 5 }}>Casts</Text>
                <Text style={{ fontSize: 18 }}>{movie.casts ? movie.casts : "Casts"}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Synopsis</Text>
          <Text style={{ fontSize: 17, color: "#8692A6" }}>{movie.synopsis}</Text>
        </View>
      </View>

      <View style={{ backgroundColor: "#F5F6F8", paddingVertical: 40, paddingHorizontal: 30 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Showtime and Tickets</Text>

          <View style={{ alignItems: "center", marginTop: 20, backgroundColor: "#EFF0F6", marginHorizontal: 20, height: 40 }}>
            <Input type="date" px="10" fontSize="16" accessibilityLabel="Set a city" width="full" height="10" placeholder="Set a city" borderColor="0" />
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
          {cinema.map((cinema, i) => (
            <View key={i} style={{ flex: 1, backgroundColor: "white", padding: 30, marginBottom: 25 }}>
              <View style={{ alignItems: "center", paddingBottom: 15, borderBottomWidth: 1, borderColor: "#DEDEDE", marginBottom: 10 }}>
                <View>
                  <Image source={require("../../assets/ebvId.png")} />
                </View>
                <Text style={{ color: "#AAAAAA", fontSize: 17, width: 200, textAlign: "center", marginTop: 15 }}>{cinema.address}</Text>
              </View>

              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {cinema.schedules.map((schedule, i) => (
                  <View key={i}>
                    <Pressable onPress={(e) => selectTime(schedule, cinema.id)} style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                      <Text style={{ fontSize: 16,}} color={selectedTime === schedule && selectedCinema === cinema.id ? '#1b30cf': 'black'}>{schedule}</Text>
                    </Pressable>
                  </View>
                ))}
              </View>

              <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <Text style={{ flex: 1, fontSize: 18 }}>Price</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>$10.00/seat</Text>
              </View>

              <View>
                <TouchableOpacity onPress={book} style={{ backgroundColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 10 }}>
                  <Text style={{ color: "white" }}>Book now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
