import React from "react";
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { FormControl, Stack, Input, Text, Button, HStack, Spinner, Heading, VStack, IconButton, CloseIcon, Alert } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import HeaderLogin from "../components/HeaderLogin";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/auth";
import { refreshError } from "../redux/reducers/auth";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const Login = ({ route }) => {
  const [isPassword, setIsPassword] = React.useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  let message = null;

  if (route.params) {
    message = route.params.message;
  }

  const login = (form) => {
    dispatch(loginAction(form));
  };

  const setStateNull = () => {
    dispatch(refreshError());
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={login}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
          <>
            <HeaderLogin title="Sign In" description="Sign in with your data that you entered during your registration" />
            {error && (
              <Alert w="100%" status="error" mb="3">
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

            {message && (
              <Alert w="100%" status="success" mb="3">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                      <Alert.Icon mt="1" />
                      <Text fontSize="md" color="coolGray.800">
                        {message}
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Alert>
            )}
            <View>
              <FormControl isInvalid>
                <Stack space="2" mb="4">
                  <Text fontSize="18">Email</Text>
                  <Input onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} placeholder="jonasrodrigu123@gmail.com" bg="#FCFDFE" fontSize="16" />
                  {errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                </Stack>

                <View style={{ marginBottom: 15 }}>
                  <Text style={styles.inputLabel}>Password</Text>

                  <HStack positive="relative">
                    <Input
                      onChangeText={handleChange("password")}
                      width="full"
                      value={values.password}
                      onBlur={handleBlur("password")}
                      placeholder="Write your password"
                      style={styles.inputForm}
                      secureTextEntry={isPassword ? true : false}
                      name="password"
                    />
                    <View style={{ position: "absolute", right: 10, bottom: 15 }}>
                      {isPassword ? <Icon name="eye-off" size={20} onPress={() => setIsPassword(false)} /> : <Icon name="eye" size={20} onPress={() => setIsPassword(true)} />}
                    </View>
                  </HStack>
                  {errors.password && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                </View>
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
                    <Text style={{ color: "white", fontSize: 17 }}>Sign In</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
                  <Text style={{ fontSize: 17 }}>
                    Forgot your password?{" "}
                    <Text style={{ color: "#1b30cf", textDecorationLine: "underline" }} onPress={() => navigation.navigate("ForgotPassword")}>
                      Reset now
                    </Text>
                  </Text>
                </View>

                <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
                  <Text style={{ fontSize: 17 }}>
                    Don't have an account?{" "}
                    <Text style={{ color: "#1b30cf", textDecorationLine: "underline" }} onPress={() => navigation.navigate("Register")}>
                      Sign Up
                    </Text>
                  </Text>
                </View>
              </FormControl>
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
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
});

export default Login;
