import React from "react";
import { ScrollView, Box, Text, Image, Button, Input, FormControl, Stack, HStack, TextArea, Select } from "native-base";
import { TouchableOpacity } from "react-native";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const ManageMovie = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAdmin />

      <Box style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: "#F5F6F8" }}>
        <Box>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>Form Movie</Text>
        </Box>
        <Box backgroundColor="white" py="5" padding="5">
          <Box style={{ alignItems: "center", marginBottom: 30 }}>
            <Box style={{ padding: 20, borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 4, marginTop: 10 }}>
              <Image source={require("../../assets/spiderman.png")} style={{ width: 160, height: 245 }} alt="spiderman" />
            </Box>
          </Box>

          <FormControl isInvalid space="3">
            <Stack space="2" mb="4">
              <Text fontSize="18">Movie Name</Text>
              <Input type="text" defaultValue="Spider-man: Homecoming" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Category</Text>
              <Input type="text" defaultValue="Action, Adventure, Sci-Fi" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Director</Text>
              <Input type="text" defaultValue="Jon Watts" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Cast</Text>
              <Input type="text" defaultValue="Tom Holland, Michael Keaton" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Release date</Text>
              <Input type="text" defaultValue="07/05/2020" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <HStack space="5">
              <Stack space="2" mb="4" flex="1">
                <Text fontSize="18">Duration Hour</Text>
                <Input type="number" defaultValue="2" bg="#FCFDFE" fontSize="16" borderRadius="12" />
              </Stack>
              <Stack space="2" mb="4" flex="1">
                <Text fontSize="18">Duration Minute</Text>
                <Input type="number" defaultValue="13" bg="#FCFDFE" fontSize="16" borderRadius="12" />
              </Stack>
            </HStack>
            <Stack space="2" mb="4" flex="1">
              <Text fontSize="18">Synopsis</Text>
              <TextArea defaultValue="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | " bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Button bg="white" style={{ backgroundColor: "white", padding: 15, alignItems: "center", borderRadius: 4, borderWidth: 2, borderColor: "#1b30cf" }}>
                <Text style={{ fontSize: 18, color: "#1b30cf" }}>Reset</Text>
              </Button>
            </Stack>
            <Stack space="2">
              <Button bg="white" style={{ backgroundColor: "#1b30cf", padding: 15, alignItems: "center", borderRadius: 4, borderWidth: 2, borderColor: "#1b30cf" }}>
                <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Box>

      <Box style={{ paddingHorizontal: 30, paddingBottom: 40, backgroundColor: "#F5F6F8" }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Data Movie</Text>

        <Box style={{ flexDirection: "row", width: 300, marginTop: 15 }}>
            <Box style={{ flex: 1, backgroundColor: "white", marginRight:10,borderRadius: 16  }}>
              <Select
                accessibilityLabel="Sort"
                width="full"
                height="12"
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
            </Box>
            <Box style={{ flex: 2 }}>
              <Input  borderRadius='16' style={{backgroundColor: "white" }} placeholder="Search Movie Name ..." />
            </Box>
          </Box>

        <Box style={{ flexDirection: "row", marginTop: 30, flexWrap: "wrap", justifyContent: "space-between" }}>
          <Box style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
            <Box style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/blackWidow.png")} style={{ width: 120, height: 185 }} />
            </Box>
            <Box style={{ width: 120 }}>
              <Box style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Black Widow</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Action, Adventure, Sci-Fi</Text>
              </Box>

              <Box>
                <TouchableOpacity bg="white"  style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>

          <Box style={{ padding: 15, borderRadius: 6, marginRight: 15, marginBottom: 15, backgroundColor: "white" }}>
            <Box style={{ marginBottom: 10 }}>
              <Image source={require("../../assets/theWitches.png")} style={{ width: 120, height: 185 }} />
            </Box>
            <Box style={{ width: 120 }}>
              <Box style={{ alignItems: "center", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>The Witches</Text>
                <Text style={{ textAlign: "center", color: "#A0A3BD" }}>Adventure, Comedy, Family</Text>
              </Box>

              <Box>
                <TouchableOpacity bg="white" style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, paddingVertical: 5 }}>
                  <Text style={{ color: "#1b30cf" }}>Details</Text>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <Box style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>1</Text>
            </TouchableOpacity>
          </Box>
          <Box style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>2</Text>
            </TouchableOpacity>
          </Box>
          <Box style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>3</Text>
            </TouchableOpacity>
          </Box>
          <Box style={{ marginRight: 10 }}>
            <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 17 }}>4</Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>

      <Footer />
    </ScrollView>
  );
};

export default ManageMovie;
