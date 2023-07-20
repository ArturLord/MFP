import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsersStatus', async () => {
  const {data} = await axios.get(`https://deebf77f001a3003.mokky.ru/users`);

   return data[0]
});
