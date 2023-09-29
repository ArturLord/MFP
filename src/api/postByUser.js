import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostByUser = createAsyncThunk('postsByUser/fetchPostsStatus', async () => {
  const { data } = await axios.get('https://cb8db50fad985f5f.mokky.dev/postsByUser');
  return data;
});
