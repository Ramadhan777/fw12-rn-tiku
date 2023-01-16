import React from "react";
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { FormControl, Alert, VStack, HStack, IconButton, CloseIcon, Text } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import HeaderLogin from "../components/HeaderLogin";
import http from "../helper/http";
import { useNavigation } from "@react-navigation/native";

import { Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const validationSchema = Yup.object({
  code: Yup.string().required("Required"),
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const ResetPassword = ({ route }) => {
  const [isPassword, setIsPassword] = React.useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigation = useNavigation();
  const email = route.params.email;

  const updatePassword = async (form) => {
    try{

      if (form.password === form.confirmPassword) {
        const { data } = await http().post("/auth/resetPassword", { email, ...form });

      navigation.navigate("Login", { message: "Password has been updated, please relogin" });
    } else {
      setErrorMessage("Password and confirm password not match");
    }
    } catch(err) {
      setErrorMessage('Code Invalid')
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderLogin title="Set Password" description="set your new password" />
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
        onSubmit={updatePassword}
        initialValues={{
          code: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
          <FormControl isInvalid>
            <View>
              <View style={{ marginBottom: 15, position: "relative" }}>
                <Text style={styles.inputLabel}>Code</Text>
                <TextInput onChangeText={handleChange("code")} onBlur={handleBlur("code")} type='number' placeholder="Write your code" style={styles.inputForm} name="code" />
                {errors.code && <FormControl.ErrorMessage>{errors.code}</FormControl.ErrorMessage>}
              </View>
              <View style={{ marginBottom: 15, position: "relative" }}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput onChangeText={handleChange("password")} onBlur={handleBlur("password")} placeholder="Write your password" style={styles.inputForm} secureTextEntry={isPassword ? true : false} name="password" />
                <View style={{ position: "absolute", right: 10, bottom: 15 }}>{isPassword ? <Icon name="eye-off" size={20} onPress={() => setIsPassword(false)} /> : <Icon name="eye" size={20} onPress={() => setIsPassword(true)} />}</View>
                {errors.password && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
              </View>

              <View style={{ marginBottom: 15, position: "relative" }}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  placeholder="Write your confirm password"
                  style={styles.inputForm}
                  secureTextEntry={isConfirmPassword ? true : false}
                  name="confirmPassword"
                />
                <View style={{ position: "absolute", right: 10, bottom: 15 }}>
                  {isConfirmPassword ? <Icon name="eye-off" size={20} onPress={() => setIsConfirmPassword(false)} /> : <Icon name="eye" size={20} onPress={() => setIsConfirmPassword(true)} />}
                </View>
                {errors.confirmPassword && <FormControl.ErrorMessage>{errors.confirmPassword}</FormControl.ErrorMessage>}
              </View>

              <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.inputButton}>
                  <Text style={{ color: "white", fontSize: 17 }}>Submit</Text>
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

export default ResetPassword;
