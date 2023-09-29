import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsersStatus', async () => {
  const {data} = await axios.get(`https://cb8db50fad985f5f.mokky.dev/users`);

   return data[0]
});
