import React from "react";
import { VStack, Text, Image, ScrollView, HStack, Box } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";

const TicketResult = () => {
  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />

      <VStack backgroundColor="#F5F6F8" padding="30" px="12">
        <VStack style={{ backgroundColor: "white", borderTopRadius: 8, borderBottomRadius: 1, paddingVertical: 20, alignItems: "center", borderStyle: "dashed", borderBottomWidth: 1, borderColor: "#DEDEDE", position: "relative" }}>
          <Image source={require("../../assets/qrCode.png")} alt='QR Code'/>
          <Box w="10" h="10" backgroundColor="#F5F6F8" borderRadius="20" style={{ position: "absolute", bottom: -20, left: -20 }} />
          <Box w="10" h="10" backgroundColor="#F5F6F8" borderRadius="20" style={{ position: "absolute", bottom: -20, right: -20 }} />
        </VStack>
        <VStack style={{ backgroundColor: "white", borderRadius: 8, marginBottom: 30, paddingVertical: 30, paddingHorizontal: 50, position: "relative" }} space="7">
          <Box w="10" h="10" backgroundColor="#F5F6F8" borderRadius="20" style={{ position: "absolute", top: -20, left: -20 }} />
          <Box w="10" h="10" backgroundColor="#F5F6F8" borderRadius="20" style={{ position: "absolute", top: -20, right: -20 }} />
          <HStack>
            <VStack flex="2">
              <Text color="#AAAAAA">Movie</Text>
              <Text fontWeight="bold" fontSize="16">
                Spider-Man: ..
              </Text>
            </VStack>
            <VStack flex="1">
              <Text color="#AAAAAA">Category</Text>
              <Text fontWeight="bold" fontSize="16">
                Action
              </Text>
            </VStack>
          </HStack>
          <HStack>
            <VStack flex="2">
              <Text color="#AAAAAA">Date</Text>
              <Text fontWeight="bold" fontSize="16">
                07 Jul
              </Text>
            </VStack>
            <VStack flex="1">
              <Text color="#AAAAAA">Time</Text>
              <Text fontWeight="bold" fontSize="16">
                2:00pm
              </Text>
            </VStack>
          </HStack>
          <HStack>
            <VStack flex="2">
              <Text color="#AAAAAA">Count</Text>
              <Text fontWeight="bold" fontSize="16">
                3 pcs
              </Text>
            </VStack>
            <VStack flex="1">
              <Text color="#AAAAAA">Seats</Text>
              <Text fontWeight="bold" fontSize="16">
                C4, C5, C6
              </Text>
            </VStack>
          </HStack>
          <HStack borderWidth="1" borderColor="#DEDEDE" padding="4" borderRadius="6">
            <VStack flex="1">
              <Text fontWeight="bold" fontSize="18">
                Total
              </Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold" fontSize="18">
                $30.00
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default TicketResult;
