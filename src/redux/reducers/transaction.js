import { createSlice } from "@reduxjs/toolkit";

import { createTransaction } from "../actions/transaction";

const initialState = {
  movieId: "",
  cinemaId: "",
  bookingDate: "",
  bookingTime: "",
  seatNum: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  paymentMethodId: "",
};

const transactionReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    chooseMovie: (state, {payload}) => {
      state.movieId = payload.movieId
      state.cinemaId = payload.cinemaId
      state.bookingDate = payload.bookingDate
      state.bookingTime = payload.bookingTime
    },
    chooseSeat: (state, action) => {
      state.seatNum = action.payload.seatNum
    },
  },
  extraReducers: (build) => {
    build.addCase(createTransaction.pending, (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const {
  chooseMovie,
  chooseSeat,
  //  choosePayment
} = transactionReducer.actions;

export default transactionReducer.reducer;
