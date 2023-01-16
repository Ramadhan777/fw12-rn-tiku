import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Input, Pressable, Alert, HStack, VStack, IconButton, CloseIcon, FormControl } from "native-base";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import http from "../helper/http";
import { createTransaction } from "../redux/actions/transaction";

import { Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number"),
});

const Payment = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const transactionData = useSelector((state) => state.transaction);
  const [alertSuccess, setAlertSuccess] = React.useState("");
  const [alertError, setAlertError] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState([]);
  const [payment, setPayment] = React.useState(null);

  const pay = (form) => {
    if(payment === null){
      setAlertError('Please choose a payment method')
    }
    dispatch(createTransaction({ ...transactionData, ...form, paymentMethodId: payment, token }));
    setAlertSuccess("Transaction Success");
  };

  React.useEffect(() => {
    http()
      .get("/paymentMethod")
      .then((data) => data.data)
      .then((res) => setPaymentMethod(res.results));
  }, []);

  return (
    <ScrollView style={{ marginVertical: 40 }}>
      <NavbarAfterLogin />
      <View style={{ backgroundColor: "#F5F6F8" }}>
        <View style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: "white", flexDirection: "row", paddingHorizontal: 30, paddingVertical: 15 }}>
          <Text style={{ flex: 1, fontSize: 24, color: "#AAAAAA" }}>Total Payment</Text>
          <Text style={{ fontSize: 24, color: "#1b30cf" }}>$30</Text>
        </View>
      </View>

      {alertError && (
              <Alert w="100%" status="error" mb="3">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                      <Alert.Icon mt="1" />
                      <Text fontSize="md" color="coolGray.800">
                        {alertError}
                      </Text>
                    </HStack>
                    <IconButton
                      onPress={() => setAlertError('')}
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


      {alertSuccess && (
        <Alert w="100%" status="success">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon mt="1" />
                <Text fontWeight="bold" fontSize="md" color="coolGray.800">
                  {alertSuccess}
                </Text>
              </HStack>
              <IconButton
                onPress={() => setAlertSuccess("")}
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


      <View style={{ paddingHorizontal: 30, paddingVertical: 40, backgroundColor: "#F5F6F8" }}>
        <Formik
          validationSchema={validationSchema}
          onSubmit={pay}
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
            <>
              <Text style={{ fontSize: 22, color: "#14142B", marginBottom: 20 }}>Payment Method</Text>

              <View style={{ backgroundColor: "white", padding: 20, paddingVertical: 40, borderRadius: 16, marginBottom: 30 }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                  {paymentMethod.map((payment, i) => (
                    <View key={i}>
                      <Pressable
                        bg={payment === payment.id ? "#1b30cf" : null}
                        onPress={() => setPayment(payment.id)}
                        style={{ width: 87, height: 40, borderWidth: 1, borderColor: "#DEDEDE", alignItems: "center", justifyContent: "center", borderRadius: 8, marginRight: 10, marginBottom: 10 }}
                      >
                        <Text>{payment.name}</Text>
                      </Pressable>
                    </View>
                  ))}
                </View>

                <View style={{ marginVertical: 20 }}>
                  <View style={{ borderBottomWidth: 1, borderColor: "#DEDEDE" }}></View>
                  <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: "white", paddingHorizontal: 20, marginTop: -10 }}>
                      <Text style={{ color: "#1b30cf", fontSize: 17 }}>or</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <Text style={{ fontSize: 17 }}>Pay via cash. </Text>
                  <Text style={{ color: "#1b30cf", fontSize: 17 }}>See how it work</Text>
                </View>
              </View>

              <Text style={{ fontSize: 22, color: "#14142B", marginBottom: 20 }}>Personal Info</Text>
              <View style={{ backgroundColor: "white", padding: 20, borderRadius: 16 }}>
                <FormControl isInvalid>
                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 19, color: "#4E4B66", marginBottom: 10 }}>Full Name</Text>
                    <Input
                      onChangeText={handleChange("fullName")}
                      onBlur={handleBlur("fullName")}
                      placeholder="Jonas El Rodriguez"
                      style={{ flex: 1, height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, borderRadius: 12 }}
                      name="fullName"
                    />
                  </View>

                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 19, color: "#4E4B66", marginBottom: 10 }}>Email</Text>
                    <Input
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="jonasrodri123@gmail.com"
                      style={{ flex: 1, height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, borderRadius: 12 }}
                      name="email"
                    />
                  </View>

                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 19, color: "#4E4B66", marginBottom: 10 }}>Phone Number</Text>
                    <Input
                      onChangeText={handleChange("phoneNumber")}
                      onBlur={handleBlur("phoneNumber")}
                      placeholder="81445687121"
                      style={{ flex: 1, height: 50, borderWidth: 1, borderColor: "#DEDEDE", paddingHorizontal: 15, fontSize: 18, borderRadius: 12 }}
                      name="phoneNumber"
                    />
                  </View>

                  <View style={{ flex: 1, height: 50, paddingHorizontal: 15, borderRadius: 12, flexDirection: "row", alignItems: "center", backgroundColor: "rgba(244, 183, 64, 0.3)" }}>
                    <Icon style={{ fontSize: 19, marginHorizontal: 10 }} name="exclamation-triangle" />
                    <Text style={{ fontSize: 19, color: "#4E4B66" }}>Fill your data correctly.</Text>
                  </View>
                </FormControl>
              </View>

              <View>
                <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: "#1b30cf", padding: 12, alignItems: "center", borderRadius: 16, marginTop: 30 }}>
                  <Text style={{ fontSize: 18, color: "white" }}>Checkout now</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>

      <Footer />
    </ScrollView>
  );
};

export default Payment;
