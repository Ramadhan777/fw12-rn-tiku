import React from "react";
import { VStack, Box, Text, Image, ScrollView, HStack, Pressable, Stack, FormControl, Input } from "native-base";
import { TouchableOpacity } from "react-native";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Icon from "react-native-vector-icons/Feather";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const Profile = () => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutAction())
  }

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <HStack justifyContent="space-between" style={{ marginHorizontal: 50, paddingTop: 15 }}>
        <Pressable onPress={() => navigation.navigate('Profile')}  borderBottomWidth="1" paddingBottom="15" borderColor="#1b30cf">
          <Text fontSize="17">Details Account</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('OrderHistory')}  paddingBottom="15">
          <Text fontSize="17" color="#AAAAAA">
            Order History
          </Text>
        </Pressable>
      </HStack>

      <VStack backgroundColor="#F5F6F8" padding="30">
        <VStack style={{ backgroundColor: "white", borderRadius: 16, marginBottom: 30 }}>
          <Stack padding="10">
            <Text fontSize="17" color="#AAAAAA">
              Info
            </Text>
            <Stack alignItems="center">
              <Image source={require("../../assets/profile.png")} alt="profile" />
              <Stack space="1" alignItems="center">
                <Text fontSize="20">Jonas El Rodriguez</Text>
                <Text fontSize="15" color="#AAAAAA">
                  Moviegoers
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack borderBottomWidth="1" borderColor="#DEDEDE" />

          <Stack alignItems="center">
            <TouchableOpacity onPress={logout}  style={{ width: 200, backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16, marginVertical: 25 }}>
              <Text style={{ fontSize: 18, color: "white" }}>Logout</Text>
            </TouchableOpacity>
          </Stack>
        </VStack>

        <VStack space="3">
          <Text fontSize="20">Account Settings</Text>

          <Stack mb="5">
            <VStack style={{ backgroundColor: "white", borderRadius: 16, marginBottom: 30, paddingHorizontal: 20, paddingVertical: 30 }} space="5">
              <Text fontSize="20" borderBottomWidth="1" paddingBottom="1" borderColor='#AAAAAA"'>
                Detail Information
              </Text>

              <Box>
                <FormControl>
                  <Stack space="2" mb="4">
                    <Text fontSize="18">Full Name</Text>
                    <Input type="text" placeholder="Jonas El Rodriguez" name="fullName" bg="#FCFDFE" fontSize="16" borderRadius="12" />
                  </Stack>

                  <Stack space="2" mb="4">
                    <Text fontSize="18">E-mail</Text>
                    <Input type="email" placeholder="jonasrodrigu123@gmail.com" name="email" bg="#FCFDFE" fontSize="16" borderRadius="12" />
                  </Stack>

                  <Stack space="2" mb="4">
                    <Text fontSize="18">Phone Number</Text>
                    <Input type="text" placeholder="81445687121" name="email" bg="#FCFDFE" fontSize="16" borderRadius="12" />
                  </Stack>
                </FormControl>
              </Box>
            </VStack>
            <Stack>
              <TouchableOpacity style={{ backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16 }}>
                <Text style={{ fontSize: 18, color: "white" }}>Update Changes</Text>
              </TouchableOpacity>
            </Stack>
          </Stack>
          <Stack>
            <VStack style={{ backgroundColor: "white", borderRadius: 16, marginBottom: 30, paddingHorizontal: 20, paddingVertical: 30 }} space="5">
              <Text fontSize="20" borderBottomWidth="1" paddingBottom="1" borderColor='#AAAAAA"'>
                Account and Privacy
              </Text>

              <Box>
                <FormControl>
                  <Stack space="2" mb="4">
                    <Text fontSize="18">New Password</Text>
                    <Input
                      type={show1 ? "text" : "password"}
                      InputRightElement={
                        <Pressable onPress={() => setShow1(!show1)} mr="3">
                          <Icon name={show1 ? "eye" : "eye-off"} size={20} color="muted.400" />
                        </Pressable>
                      }
                      name="newPassword"
                      bg="#FCFDFE"
                      fontSize="16"
                      borderRadius="12"
                    />
                  </Stack>
                  <Stack space="2" mb="4">
                    <Text fontSize="18">Confirm</Text>
                    <Input
                      type={show2 ? "text" : "password"}
                      InputRightElement={
                        <Pressable onPress={() => setShow2(!show2)} mr="3">
                          <Icon name={show2 ? "eye" : "eye-off"} size={20} color="muted.400" />
                        </Pressable>
                      }
                      name="confirmPassword"
                      bg="#FCFDFE"
                      fontSize="16"
                      borderRadius="12"
                    />
                  </Stack>
                </FormControl>
              </Box>
            </VStack>
            <Stack>
              <TouchableOpacity style={{ backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16 }}>
                <Text style={{ fontSize: 18, color: "white" }}>Update Changes</Text>
              </TouchableOpacity>
            </Stack>
          </Stack>
        </VStack>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Profile;
