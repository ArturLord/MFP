import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, pass}, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://deebf77f001a3003.mokky.ru/register', {
        email,
        password: pass,
        firstName: "",
        lastName: "",
        nickname: "",
        avatarUrl: "",
        description: "",
        url: "",
        subscribers: [],
        subscribed: []
      });
      console.log(response, 'ress')

      return response.data;
 } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

  

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, pass}, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://deebf77f001a3003.mokky.ru/auth', {
        email,
        password: pass,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
 }
  }
);
  
