import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderLogin from "../components/HeaderLogin";

const Register = () => {
  const [isPassword, setIsPassword] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <HeaderLogin title="Sign Up" description="Fill your additional details" />
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput placeholder="Write your first name" style={styles.inputForm} name="firstName" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput placeholder="Write your last name" style={styles.inputForm} name="lastName" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput placeholder="Write your phone number" style={styles.inputForm} name="phoneNumber" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput placeholder="Write your email" style={styles.inputForm} name="email" />
        </View>

        <View style={{ marginBottom: 15, position: "relative" }}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput placeholder="Write your password" style={styles.inputForm} secureTextEntry={isPassword ? true : false} name="password" />
          <View style={{ position: "absolute", right: 10, bottom: 15 }}>{isPassword ? <Icon name="eye-slash" size={20} onPress={() => setIsPassword(false)} /> : <Icon name="eye" size={20} onPress={() => setIsPassword(true)} />}</View>
        </View>

        <View>
          <TouchableOpacity style={styles.inputButton}>
            <Text style={{ color: "white", fontSize: 17  }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center", marginTop:15}}>
          <Text style={{fontSize: 17 }}>
            Already have account?{" "}
            <Text href="" style={{ color: "#1b30cf", textDecorationLine: "underline" }}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
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
