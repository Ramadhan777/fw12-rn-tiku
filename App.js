import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import ForgotPassword from "./src/screens/ForgotPassword";
import ResetPassword from "./src/screens/ResetPassword";
import HomeBeforeLogin from "./src/screens/HomeBeforeLogin";
import HomeAfterLogin from "./src/screens/HomeAfterLogin";
import ListMovie from "./src/screens/ListMovie";
import MovieDetail from "./src/screens/MovieDetail";
import Order from "./src/screens/Order";
import Payment from "./src/screens/Payment";
import OrderHistory from "./src/screens/OrderHistory";
import Profile from "./src/screens/Profile";
import TicketResult from "./src/screens/TicketResult";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={{colors: { background: 'white'}}}>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeBeforeLogin} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}}/>
          <Stack.Screen name="HomeAfterLogin" component={HomeAfterLogin} options={{headerShown: false}} />
          <Stack.Screen name="ListMovie" component={ListMovie} options={{headerShown: false}}/>
          <Stack.Screen name="MovieDetail" component={MovieDetail} options={{headerShown: false}}/>
          <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/>
          <Stack.Screen name="Payment" component={Payment} options={{headerShown: false}}/>
          <Stack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="TicketResult" component={TicketResult} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
