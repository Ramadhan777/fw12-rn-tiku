import React from "react";
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { FormControl, Stack, Input, Text, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderLogin from "../components/HeaderLogin";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/auth";

const validationSchema = Yup.object({
  // firstName: Yup.string()
  //   .max(15, 'Must be 15 characters or less')
  //   .required('Required'),
  // lastName: Yup.string()
  //   .max(20, 'Must be 20 characters or less')
  //   .required('Required'),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const Login = () => {
  const [isPassword, setIsPassword] = React.useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const login = (form) => {
    dispatch(loginAction(form));
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
            <View>
              <FormControl isInvalid>
                <Stack space="2" mb="4">
                  <Text fontSize="18">Email</Text>
                  <Input onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} placeholder="jonasrodrigu123@gmail.com" v bg="#FCFDFE" fontSize="16" />
                  {errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                </Stack>

                <View style={{ marginBottom: 15, position: "relative" }}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <Input onChangeText={handleChange("password")} onBlur={handleBlur("password")} placeholder="Write your password" style={styles.inputForm} secureTextEntry={isPassword ? true : false} name="password" />
                  <View style={{ position: "absolute", right: 10, bottom: 15 }}>
                    {isPassword ? <Icon name="eye-slash" size={20} onPress={() => setIsPassword(false)} /> : <Icon name="eye" size={20} onPress={() => setIsPassword(true)} />}
                  </View>
                </View>

                <View>
                  <Button onPress={handleSubmit} style={styles.inputButton}>
                    <Text style={{ color: "white", fontSize: 17 }}>Sign In</Text>
                  </Button>
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
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
});

export default Login;
