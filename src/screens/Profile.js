import React from "react";
import { VStack, Box, Text, Image, ScrollView, HStack, Pressable, Stack, FormControl, Input, Alert, IconButton, CloseIcon } from "native-base";
import { TouchableOpacity } from "react-native";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Icon from "react-native-vector-icons/Feather";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helper/http";
import { launchImageLibraryAsync } from "expo-image-picker";

import { Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number"),
});

const validationSchema2 = Yup.object({
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const Profile = () => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [profile, setProfile] = React.useState({});
  const token = useSelector((state) => state.auth.token);
  const [successUpdatePhoto, setSuccessUpdatePhoto] = React.useState("");
  const [savePhoto, setSavePhoto] = React.useState(false);
  const [successUpdateProfile, setSuccessUpdateProfile] = React.useState("");
  const [successUpdatePassword, setSuccessUpdatePassword] = React.useState("");
  const [errorUpdateProfile, setErrorUpdateProfile] = React.useState("");
  const [errorUpdatePassword, setErrorUpdatePassword] = React.useState("");
  const [preview, setPreview] = React.useState({});

  
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
    navigation.navigate("Home");
  };

  React.useEffect(() => {
    http(token)
      .get("/profile")
      .then((res) => setProfile(res.data.results));
  }, [token]);

  const updateProfile = async (form) => {
    try {
      const res = await http(token).patch("/profile", form);
      console.log(res)

      setErrorUpdateProfile("");
      setSuccessUpdateProfile(res.data.message);
    } catch (error) {
      setErrorUpdateProfile("Email or phone number already exist");
      setSuccessUpdateProfile("");
    }
  };

  const updatePassword = async (form) => {
    try {
      if (form.password === form.confirmPassword) {
        const { data } = await http(token).patch("/profile", form);

        setErrorUpdatePassword("");
        setSuccessUpdatePassword("Password updated");
      } else {
        setErrorUpdatePassword("Password and confirm password not match");
        setSuccessUpdatePassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setStateNull = (state) => {
    if (state === "errorPassword") {
      setErrorUpdatePassword("");
    } else if (state === "successPassword") {
      setSuccessUpdatePassword("");
    } else if (state === "successProfile") {
      setSuccessUpdateProfile("");
    } else if (state === 'successPhoto') {
      setSuccessUpdatePhoto("");
    }else {
      setErrorUpdateProfile("");
    }
  };

  const editPhoto = async () => {
    const result = await launchImageLibraryAsync();

    setSavePhoto(true)
    console.log(result.assets[0])

    if (!result.canceled) {
      setPreview(result.assets[0]);
    }
  };

  const uploadPhoto = async () => {
    try{
      const obj = {
        type:  'image/jpeg',
        uri: preview.uri,
        name: 'picture',
      };
      const form = new FormData();
      form.append("picture", obj);
      const data = await http(token).patch("/profile/upload", form, {
        headers: {
          Accept: "multipart/form-data, application/json",
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(data)

      setSavePhoto(false)
      setSuccessUpdatePhoto("Photo profile update");
    } catch(err){
      console.log(err)
    }
  };

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <HStack justifyContent="space-between" style={{ marginHorizontal: 50, paddingTop: 15 }}>
        <Pressable onPress={() => navigation.navigate("Profile")} borderBottomWidth="1" paddingBottom="15" borderColor="#1b30cf">
          <Text fontSize="17">Details Account</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("OrderHistory")} paddingBottom="15">
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
            {successUpdatePhoto && (
                      <Alert w="100%" status="success">
                        <VStack space={2} flexShrink={1} w="100%">
                          <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                              <Alert.Icon mt="1" />
                              <Text fontSize="md" color="coolGray.800">
                                {successUpdatePhoto}
                              </Text>
                            </HStack>
                            <IconButton
                              onPress={() => setStateNull("successPhoto")}
                              variant="unstyled"
                              _focus={{
                                borderWidth: 0,
                              }}
                              icon={<CloseIcon size="3" />}
                              _icon={{
                                color: "coolGray.600",
                              }}
                            />
                          </HStack>
                        </VStack>
                      </Alert>
                    )}
              <Stack alignItems="center" mb="3">
                {profile.picture ? (
                  <Image source={{ uri: profile.picture }} alt="profile" width="150" height="150" borderRadius="300" mb="2" borderWidth="1" borderColor="#DEDEDE" />
                ) : preview.uri ? (
                  <Image source={{ uri: preview.uri }} alt="profile" width="150" height="150" borderRadius="300" mb="2" borderWidth="1" borderColor="#DEDEDE" />
                ) : (
                  <Image source={require("../../assets/defaultUser.png")} alt="profile" width="150" height="150" borderRadius="300" mb="2" borderWidth="1" borderColor="#DEDEDE" />
                )}
                <Text onPress={editPhoto}>Edit Photo</Text>
                {savePhoto && (
                  <TouchableOpacity onPress={() => uploadPhoto()} style={{ backgroundColor: "#1b30cf", alignItems: "center", borderRadius: 4, padding: 3, width: 80, marginTop:5}}>
                    <Text color='white'>Save photo</Text>
                  </TouchableOpacity>
                )}
              </Stack>
              <Stack space="1" alignItems="center">
                <Text fontSize="20">{`${profile.firstName} ${profile.lastName}`}</Text>
                <Text fontSize="15" color="#AAAAAA">
                  Moviegoers
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack borderBottomWidth="1" borderColor="#DEDEDE" />

          <Stack alignItems="center">
            <TouchableOpacity onPress={logout} style={{ width: 200, backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16, marginVertical: 25 }}>
              <Text style={{ fontSize: 18, color: "white" }}>Logout</Text>
            </TouchableOpacity>
          </Stack>
        </VStack>

        <VStack space="3">
          <Text fontSize="20">Account Settings</Text>

          <Formik
            validationSchema={validationSchema}
            onSubmit={updateProfile}
            initialValues={{
              firstName: "",
              lastName: "",
              email: profile.email,
              phoneNumber: profile.phoneNumber,
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
              <FormControl isInvalid>
                <Stack mb="5">
                  <VStack style={{ backgroundColor: "white", borderRadius: 16, marginBottom: 30, paddingHorizontal: 20, paddingVertical: 30 }} space="2">
                    <Text fontSize="20" borderBottomWidth="1" paddingBottom="1" borderColor='#AAAAAA"'>
                      Detail Information
                    </Text>

                    {successUpdateProfile && (
                      <Alert w="100%" status="success">
                        <VStack space={2} flexShrink={1} w="100%">
                          <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                              <Alert.Icon mt="1" />
                              <Text fontSize="md" color="coolGray.800">
                                {successUpdateProfile}
                              </Text>
                            </HStack>
                            <IconButton
                              onPress={() => setStateNull("successProfile")}
                              variant="unstyled"
                              _focus={{
                                borderWidth: 0,
                              }}
                              icon={<CloseIcon size="3" />}
                              _icon={{
                                color: "coolGray.600",
                              }}
                            />
                          </HStack>
                        </VStack>
                      </Alert>
                    )}
                    {errorUpdateProfile && (
                      <Alert w="100%" status="error">
                        <VStack space={2} flexShrink={1} w="100%">
                          <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                              <Alert.Icon mt="1" />
                              <Text fontSize="md" color="coolGray.800">
                                {errorUpdateProfile}
                              </Text>
                            </HStack>
                            <IconButton
                              onPress={() => setStateNull("errorProfile")}
                              variant="unstyled"
                              _focus={{
                                borderWidth: 0,
                              }}
                              icon={<CloseIcon size="3" />}
                              _icon={{
                                color: "coolGray.600",
                              }}
                            />
                          </HStack>
                        </VStack>
                      </Alert>
                    )}

                    <Box>
                      <Stack space="2" mb="4">
                        <Text fontSize="18">Full Name</Text>
                        <Input type="text" defaultValue={`${profile.firstName} ${profile.lastName}`} name="fullName" bg="#FCFDFE" fontSize="16" borderRadius="12" />
                      </Stack>

                      <Stack space="2" mb="4">
                        <Text fontSize="18">E-mail</Text>
                        <Input onChangeText={handleChange("email")} onBlur={handleBlur("email")} defaultValue={profile.email} type="email" name="email" bg="#FCFDFE" fontSize="16" borderRadius="12" />
                        {errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                      </Stack>

                      <Stack space="2" mb="4">
                        <Text fontSize="18">Phone Number</Text>
                        <Input onChangeText={handleChange("phoneNumber")} onBlur={handleBlur("phoneNumber")} defaultValue={profile.phoneNumber} type="text" name="email" bg="#FCFDFE" fontSize="16" borderRadius="12" />
                        {errors.phoneNumber && <FormControl.ErrorMessage>{errors.phoneNumber}</FormControl.ErrorMessage>}
                      </Stack>
                    </Box>
                  </VStack>
                  <Stack>
                    <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16 }}>
                      <Text style={{ fontSize: 18, color: "white" }}>Update Changes</Text>
                    </TouchableOpacity>
                  </Stack>
                </Stack>
              </FormControl>
            )}
          </Formik>

          <Stack>
            <Formik
              validationSchema={validationSchema2}
              onSubmit={updatePassword}
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                <>
                  <VStack style={{ backgroundColor: "white", borderRadius: 16, marginBottom: 30, paddingHorizontal: 20, paddingVertical: 30 }} space="2">
                    <Text fontSize="20" borderBottomWidth="1" paddingBottom="1" borderColor='#AAAAAA"'>
                      Account and Privacy
                    </Text>

                    {successUpdatePassword && (
                      <Alert w="100%" status="success">
                        <VStack space={1} flexShrink={1} w="100%">
                          <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={3} flexShrink={1}>
                              <Alert.Icon mt="1" />
                              <Text fontSize="md" color="coolGray.800">
                                {successUpdatePassword}
                              </Text>
                            </HStack>
                            <IconButton
                              onPress={() => setStateNull("successPassword")}
                              variant="unstyled"
                              _focus={{
                                borderWidth: 0,
                              }}
                              icon={<CloseIcon size="3" />}
                              _icon={{
                                color: "coolGray.600",
                              }}
                            />
                          </HStack>
                        </VStack>
                      </Alert>
                    )}
                    {errorUpdatePassword && (
                      <Alert w="100%" status="error">
                        <VStack space={2} flexShrink={1} w="100%">
                          <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                              <Alert.Icon mt="1" />
                              <Text fontSize="md" color="coolGray.800">
                                {errorUpdatePassword}
                              </Text>
                            </HStack>
                            <IconButton
                              onPress={() => setStateNull("errorPassword")}
                              variant="unstyled"
                              _focus={{
                                borderWidth: 0,
                              }}
                              icon={<CloseIcon size="3" />}
                              _icon={{
                                color: "coolGray.600",
                              }}
                            />
                          </HStack>
                        </VStack>
                      </Alert>
                    )}

                    <Box>
                      <FormControl isInvalid>
                        <Stack space="2" mb="4">
                          <Text fontSize="18">New Password</Text>
                          <Input
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
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
                          {errors.password && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                        </Stack>
                        <Stack space="2" mb="4">
                          <Text fontSize="18">Confirm Password</Text>
                          <Input
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
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
                          {errors.confirmPassword && <FormControl.ErrorMessage>{errors.confirmPassword}</FormControl.ErrorMessage>}
                        </Stack>
                      </FormControl>
                    </Box>
                  </VStack>
                  <Stack>
                    <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16 }}>
                      <Text style={{ fontSize: 18, color: "white" }}>Update Changes</Text>
                    </TouchableOpacity>
                  </Stack>
                </>
              )}
            </Formik>
          </Stack>
        </VStack>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Profile;
