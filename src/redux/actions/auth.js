import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helper/http";

export const loginAction = createAsyncThunk("auth/loginAsync", async ({ email, password }) => {
  try {
    const { data } = await http().post(`auth/login`, { email, password });

    return data.results;
  } catch (err) {
    const error = err.response.data.message;
    return error
  }
});

export const registerAction = createAsyncThunk("auth/registerAction", async ({ firstName, lastName, phoneNumber, email, password }) => {
  try {
    const { data } = await http().post(`auth/register`, { firstName, lastName, phoneNumber, email, password });
    return data.results;
  } catch (err) {
    const error = err.response.data.message;
    return error
  }
});
