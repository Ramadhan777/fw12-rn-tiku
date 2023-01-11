import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Home from "./Home";
import ListMovie from "./ListMovie";
import MovieDetail from "./MovieDetail";
import Order from "./Order";
import Payment from "./Payment";
import OrderHistory from "./OrderHistory";
import Profile from "./Profile";
import TicketResult from "./TicketResult";
import ManageMovie from "./ManageMovie";
import ManageSchedule from "./ManageSchedule";
import Dashboard from "./Dashboard";

import { useSelector } from "react-redux";

export default function Main() {
  const Stack = createNativeStackNavigator();
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  return (
    <NavigationContainer theme={{ colors: { background: "white" } }}>
      <NativeBaseProvider>
        <Stack.Navigator>
          {!token && (
            <>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
              <Stack.Screen name="ListMovie" component={ListMovie} options={{ headerShown: false }} />
            </>
          )}

          {token && role === "user" ? (
            <>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="ListMovie" component={ListMovie} options={{ headerShown: false }} />
              <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ headerShown: false }} />
              <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
              <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
              <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
              <Stack.Screen name="TicketResult" component={TicketResult} options={{ headerShown: false }} />
            </>
          ) : null}

          {token && role === "admin" ? (
            <>
              <Stack.Screen name="ManageMovie" component={ManageMovie} options={{ headerShown: false }} />
              <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
              <Stack.Screen name="ManageSchedule" component={ManageSchedule} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </>
          ) : null}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
