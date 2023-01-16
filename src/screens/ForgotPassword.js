import React from "react";
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { FormControl, Alert, VStack, HStack, IconButton, CloseIcon, Text } from "native-base";
import HeaderLogin from "../components/HeaderLogin";
import { useNavigation } from "@react-navigation/native";
import http from "../helper/http";

import { Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = React.useState("");

  const requestForgotPassword = async (form) => {
    try {
      const { data } = await http().post("/auth/forgotPassword", form);

      navigation.navigate("ResetPassword", {
        email: data.results.email,
      });
    } catch (err) {
      setErrorMessage("Email not registered");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderLogin title="Forgot Password" description="we'll send a link to your email shortly" />
      {errorMessage && (
        <Alert w="100%" status="error" mb="3">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {errorMessage}
                </Text>
              </HStack>
              <IconButton
                onPress={() => setErrorMessage("")}
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

      <Formik
        validationSchema={validationSchema}
        onSubmit={requestForgotPassword}
        initialValues={{
          email: "",
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
          <FormControl isInvalid>
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput onChangeText={handleChange("email")} onBlur={handleBlur("email")} placeholder="Write your email" style={styles.inputForm} name="email" />
                {errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
              </View>

              <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.inputButton}>
                  <Text style={{ color: "white", fontSize: 17 }}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </FormControl>
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

export default ForgotPassword;
