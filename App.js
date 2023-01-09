import React from 'react';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import HomeBeforeLogin from './src/screens/HomeBeforeLogin';
import HomeAfterLogin from './src/screens/HomeAfterLogin';
import ListMovie from './src/screens/ListMovie';
import MovieDetail from './src/screens/MovieDetail';
import Order from './src/screens/Order';
import Payment from './src/screens/Payment';
import OrderHistory from './src/screens/OrderHistory';

export default function App() {
  return (
   <>
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <HomeBeforeLogin /> */}
      {/* <HomeAfterLogin /> */}
      {/* <ListMovie /> */}
      {/* <MovieDetail /> */}
      {/* <Order /> */}
      <Payment />
      {/* <OrderHistory /> */}
   </>
  );
}
