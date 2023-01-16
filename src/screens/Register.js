import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import HeaderLogin from "../components/HeaderLogin";
import { useNavigation } from "@react-navigation/native";
import { FormControl, Alert, VStack, Stack, Input, Text, Button, HStack, Heading, Spinner, IconButton, CloseIcon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/auth";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { Formik } from "formik";
import { refreshError } from "../redux/reducers/auth";

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().password().min(8, "Min length 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number").required("Required")
});

const Register = () => {
  const [isPassword, setIsPassword] = React.useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading)
  const error = useSelector((state) => state.auth.error);

  const register = (form) => {
    dispatch(registerAction(form));
  };

  const setStateNull = () => {
    dispatch(refreshError())
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={register}
        initialValues={{
          firstName: null,
          lastName: null,
          phoneNumber: '',
          email: "",
          password: "",
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
          <>
            <HeaderLogin title="Sign Up" description="Fill your additional details" />
            {error && (
              <Alert w="100%" status="error" mb='3'>
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                      <Alert.Icon mt="1" />
                      <Text fontSize="md" color="coolGray.800">
                        {error}
                      </Text>
                    </HStack>
                    <IconButton
                    onPress={setStateNull}
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
            <View>
              <FormControl isInvalid>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>First Name</Text>
                  <Input onChangeText={handleChange("firstName")} onBlur={handleBlur("firstName")} placeholder="Write your first name" style={styles.inputForm} name="firstName" />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Last Name</Text>
                  <Input onChangeText={handleChange("lastName")} onBlur={handleBlur("lastName")} placeholder="Write your last name" style={styles.inputForm} name="lastName" />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <Input onChangeText={handleChange("phoneNumber")} onBlur={handleBlur("phoneNumber")} placeholder="Write your phone number" style={styles.inputForm} name="phoneNumber" />
                  {errors.phoneNumber && <FormControl.ErrorMessage>{errors.phoneNumber}</FormControl.ErrorMessage>}

                </View>

                <Stack space="2" mb="4">
                  <Text fontSize="18">Email</Text>
                  <Input onChangeText={handleChange("email")} onBlur={handleBlur("email")} placeholder="jonasrodrigu123@gmail.com" v bg="#FCFDFE" fontSize="16" />
                  {errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                </Stack>

                <View style={{ marginBottom: 15 }}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <HStack position="relative">
                    <Input width="full" onChangeText={handleChange("password")} onBlur={handleBlur("password")} placeholder="Write your password" style={styles.inputForm} type={isPassword ? "password" : "text"} name="password" />
                    <View style={{ position: "absolute", right: 10, bottom: 15 }}>
                      {isPassword ? <Icon name="eye-off" size={20} onPress={() => setIsPassword(false)} /> : <Icon name="eye" size={20} onPress={() => setIsPassword(true)} />}
                    </View>
                  </HStack>
                  {errors.password && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                </View>
              </FormControl>

              {isLoading && (
                  <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                      Loading
                    </Heading>
                  </HStack>
                )}

              <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.inputButton}>
                  <Text style={{ color: "white", fontSize: 17 }}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
                <Text style={{ fontSize: 17 }}>
                  Already have account?{" "}
                  <Text onPress={() => navigation.navigate("Login")} style={{ color: "#1b30cf", textDecorationLine: "underline" }}>
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 19,
    color: "#4E4B66",
    marginBottom: 7,
  },
  inputForm: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#FCFDFE",
    borderRadius: 4,
  },
  inputButton: {
    flex: 1,
    backgroundColor: "#1b30cf",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
});

export default Register;
