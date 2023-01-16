import React from "react";
import { ScrollView, View, TouchableOpacity, TextInput } from "react-native";
import { Select, CheckIcon, Image, Button, Text } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Month from "../components/Month";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import http from "../helper/http";  

const ListMovie = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [amountPage, setAmountPage] = React.useState([]);
  const [genre, setGenre] = React.useState("");
  const [error, setError] = React.useState("");
  const [pageGenre, setPageGenre] = React.useState(1);
  const [amountPageGenre, setAmountPageGenre] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    http()
      .get(`/movies?page=${page}&search=${search}&limit=4`)
      .then((res) => {
        setAmountPageGenre([]);
        pageAmount(res.data.pageInfo.totalData);
        if (res.data.results.length === 0) {
          setMovies([]);
          return setError(`${search} not found`);
        }

        setError("");
        setMovies(res.data.results);
      });
  }, [page, search]);

  const searchMovie = (value) => {
    setSearch(value);
    setPage(1);
  };

  const searchMovieByGenre = (genre, page = 1) => {
    setGenre(genre);
    http()
      .get(`/movies/genre?page=${page}&search=${genre}&limit=4`)
      .then((res) => {
        setAmountPage([]);
        setPageGenre(page);
        pageAmountGenre(res.data.pageInfo.totalData);
        setMovies(res.data.results);
      });
  };

  const pageAmount = (movie) => {
    const pageArr = [];
    const result = parseInt(movie) / 4;
    const pageNum = Math.ceil(result);

    for (i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }

    setAmountPage(pageArr);
  };

  const pageAmountGenre = (movie) => {
    const pageArr = [];
    const result = parseInt(movie) / 4;
    const pageNum = Math.ceil(result);

    for (i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }

    setAmountPageGenre(pageArr);
  };

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />

      <View style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: "#F5F6F8" }}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>List Movie</Text>

          <View style={{ flexDirection: "row", width: 300, marginTop: 15 }}>
            <View style={{ flex: 1, backgroundColor: "white", marginRight: 10, borderRadius: 16 }}>
              <Select accessibilityLabel="Sort" width="full" height="10" placeholder="Sort" borderRadius="16" onValueChange={(itemValue) => searchMovieByGenre(itemValue)}>
                <Select.Item label="Action" value="Action" />
                <Select.Item label="Drama" value="Drama" />
                <Select.Item label="Adventure" value="Adventure" />
                <Select.Item label="Family" value="Family" />
                <Select.Item label="Comedy" value="Comedy" />
              </Select>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput onChangeText={searchMovie} style={{ padding: 5, paddingLeft: 10, backgroundColor: "white", borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 16 }} placeholder="Search Movie Name ..." />
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

        <View style={{ flexDirection: "row", marginTop: 30, flexWrap: "wrap" }}>
          {error && (
            <View style={{alignItems: 'center', flex: 1}}>
              <Text>{error}</Text>
            </View>
          )}
          {movies.map((movie, i) => (
            <View key={i} style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
              <View style={{ marginBottom: 10 }}>
                <Image source={{ uri: movie.picture }} style={{ width: 120, height: 180 }} alt={movie.title} />
              </View>
              <View style={{ width: 120 }}>
                <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 10, height: 80 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>{movie.title}</Text>
                  <Text style={{ textAlign: "center", color: "#A0A3BD" }}>{movie.genre}</Text>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("MovieDetail", {
                        movieId: movie.id,
                      })
                    }
                    style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}
                  >
                    <Text style={{ color: "#1b30cf" }}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          {amountPage?.map((pageNum, i) => (
            <View key={i} style={{ marginRight: 10 }}>
              <Button onPress={() => setPage(pageNum)} style={{ padding: 10, borderRadius: 8 }} bg={page === pageNum ? "#1b30cf" : "white"}>
                <Text style={{ fontSize: 17 }}>{pageNum}</Text>
              </Button>
            </View>
          ))}
          {amountPageGenre?.map((pageNum, i) => (
            <View key={i} style={{ marginRight: 10 }}>
              <Button onPress={() => searchMovieByGenre(genre, pageNum)} style={{ padding: 10, borderRadius: 8 }} bg={pageGenre === pageNum ? "#1b30cf" : "white"}>
                <Text style={{ fontSize: 17 }}>{pageNum}</Text>
              </Button>
            </View>
          ))}
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default ListMovie;
