import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsersStatus',
  async () => {
    const { data } = await axios.get("http://localhost:3000/users"
    );
    return data;

  },
);
