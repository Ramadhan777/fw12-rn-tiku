import React from "react";
import { ScrollView, Box, Text, Image, Button, Input, FormControl, Stack, HStack, TextArea } from "native-base";
import { TouchableOpacity } from "react-native";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAdmin />

      <Box style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: "#F5F6F8" }}>
        <Box>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>Form Movie</Text>
        </Box>

        <Box mb="10">
          <Image source={require("../../assets/grafik.png")} />
        </Box>

        <Box backgroundColor="white" py="5" padding="5">
          <FormControl isInvalid space="3">
            <Stack space="2" mb="4">
              <Input type="text" placeholder="Select Movie" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Input type="text" placeholder="Select Premiere" bg="#FCFDFE" fontSize="16" borderRadius="12" />
            </Stack>
            <Stack space="2" mb="4">
              <Input type="text" placeholder="Select Location" bg="#FCFDFE" fontSize="16" borderRadius="12" />
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

      <Footer />
    </ScrollView>
  );
};

export default Dashboard;
