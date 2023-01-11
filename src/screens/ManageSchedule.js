import React from "react";
import { ScrollView, Box, Text, Image, Button, Input, FormControl, Stack, HStack, Select } from "native-base";
import { TouchableOpacity } from "react-native";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const ManageSchedule = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAdmin />

      <Box style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: "#F5F6F8" }}>
        <Box>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>Form Schedule</Text>
        </Box>
        <Box backgroundColor="white" py="5" padding="5">
          <Box style={{ alignItems: "center", marginBottom: 30 }}>
            <Box style={{ padding: 20, borderWidth: 1, borderColor: "#DEDEDE", borderRadius: 4, marginTop: 10 }}>
              <Image source={require("../../assets/spiderman.png")} style={{ width: 160, height: 245 }} alt="spiderman" />
            </Box>
          </Box>

          <FormControl isInvalid space="3">
            <Stack space="2" mb="4">
              <Text fontSize="18">Movie</Text>
              <Select fontSize="16" accessibilityLabel="Select Movie" width="full" height="12" placeholder="Select Movie" borderRadius="16" onValueChange={(itemValue) => setGenre(itemValue)}>
                <Select.Item label="Action" value="Action" />
                <Select.Item label="Drama" value="Drama" />
                <Select.Item label="Adventure" value="Adventure" />
                <Select.Item label="Family" value="Family" />
                <Select.Item label="Comedy" value="backend" />
              </Select>
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Price</Text>
              <Input type="text" placeholder="10" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Premiere</Text>
              <Select fontSize="16" accessibilityLabel="Select Premiere" width="full" height="12" placeholder="Select Premiere" borderRadius="16" onValueChange={(itemValue) => setGenre(itemValue)}>
                <Select.Item label="ebv.id" value="ebv.id" />
                <Select.Item label="cineOne" value="cineOne" />
                <Select.Item label="hiflix" value="hiflix" />
              </Select>
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Location</Text>
              <Select fontSize="16" accessibilityLabel="Select Location" width="full" height="12" placeholder="Select Location" borderRadius="16" onValueChange={(itemValue) => setGenre(itemValue)}>
                <Select.Item label="Purwokerto" value="Purwokerto" />
                <Select.Item label="Jakarta" value="Jakarta" />
                <Select.Item label="Bandung" value="Bandung" />
                <Select.Item label="Bogor" value="Bogor" />
                <Select.Item label="Surabaya" value="Surabaya" />
              </Select>
            </Stack>
            <Stack space="2" mb="4">
              <Text fontSize="18">Release date</Text>
              <Input type="text" placeholder="07/05/2020" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <HStack space="5">
              <Stack space="2" mb="4" flex="1">
                <Text fontSize="18">Date Start</Text>
                <Input type="number" placeholder="2" bg="#FCFDFE" fontSize="16" borderRadius="12" />
              </Stack>
              <Stack space="2" mb="4" flex="1">
                <Text fontSize="18">Date End</Text>
                <Input type="number" placeholder="13" bg="#FCFDFE" fontSize="16" borderRadius="12" />
              </Stack>
            </HStack>
            <Stack space="2" mb="4" flex="1">
              <Text fontSize="18">Time</Text>
              <Stack style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Stack>
                  <TouchableOpacity style={{ width: 95, alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>08:30am</Text>
                  </TouchableOpacity>
                </Stack>
                <Stack>
                  <TouchableOpacity style={{ width: 95, alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>08:30am</Text>
                  </TouchableOpacity>
                </Stack>
                <Stack>
                  <TouchableOpacity style={{ width: 95, alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>08:30am</Text>
                  </TouchableOpacity>
                </Stack>
                <Stack>
                  <TouchableOpacity style={{ width: 95, alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>08:30am</Text>
                  </TouchableOpacity>
                </Stack>

                <Stack>
                  <TouchableOpacity style={{ width: 95, alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>08:30am</Text>
                  </TouchableOpacity>
                </Stack>
                <Stack>
                  <TouchableOpacity style={{ width: 95, alignItems: "center", paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16 }}>08:30am</Text>
                  </TouchableOpacity>
                </Stack>
              </Stack>
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
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Data Schedule</Text>

        <Box style={{ flexDirection: "row", marginVertical: 15 }} space="">
          <Box style={{ flex: 1 }} mr='3'>
            <Select fontSize="16" accessibilityLabel="Sort" width="full" height="12" placeholder="Sort" borderRadius="16" onValueChange={(itemValue) => setGenre(itemValue)}>
             
            </Select>
          </Box>
          <Box style={{ flex: 1, borderRadius: 16 }} mr='3'>
            <Select fontSize="16" accessibilityLabel="Location" width="full" height="12" placeholder="Location" borderRadius="16" onValueChange={(itemValue) => setGenre(itemValue)}>
            
            </Select>
          </Box>
          <Box style={{ flex: 1, borderRadius: 16 }}>
            <Select fontSize="16" accessibilityLabel="Movie" width="full" height="12" placeholder="Movie" borderRadius="16" onValueChange={(itemValue) => setGenre(itemValue)}>
              
            </Select>
          </Box>
        </Box>

        <Box style={{ flex: 1, backgroundColor: "white", padding: 30, marginBottom: 25, borderRadius: 8 }}>
          <HStack style={{ paddingBottom: 15, borderBottomWidth: 1, borderColor: "#DEDEDE", marginBottom: 10 }}>
            <Box flex="1" alignItems="center" justifyContent="center">
              <Image source={require("../../assets/ebvId.png")} />
            </Box>

            <Box flex="1">
              <Text fontSize="26">ebv.id</Text>
              <Text style={{ color: "#AAAAAA", fontSize: 16 }}>Whatever street No.12, South Purwokerto</Text>
            </Box>
          </HStack>

          <Box style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>

            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>

            <Box>
              <TouchableOpacity style={{ flex: 1, width: 68, alignItems: "center", paddingVertical: 10 }}>
                <Text style={{ fontSize: 16 }}>08:30am</Text>
              </TouchableOpacity>
            </Box>
          </Box>

          <Box style={{ flexDirection: "row", marginVertical: 20 }}>
            <Text style={{ flex: 1, fontSize: 18 }}>Price</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>$10.00/seat</Text>
          </Box>

          <HStack space="5">
            <Box flex="1">
              <TouchableOpacity onPress={() => navigation.navigate("Order")} style={{ borderWidth: 1, borderColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 10 }}>
                <Text style={{ color: "#1b30cf" }}>Update</Text>
              </TouchableOpacity>
            </Box>

            <Box flex="1">
              <TouchableOpacity onPress={() => navigation.navigate("Order")} style={{ borderWidth: 1, borderColor: "#ED2E7E", alignItems: "center", borderRadius: 4, padding: 10 }}>
                <Text style={{ color: "#ED2E7E" }}>Delete</Text>
              </TouchableOpacity>
            </Box>
          </HStack>
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

export default ManageSchedule;
