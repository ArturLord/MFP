import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostByUser = createAsyncThunk('postsByUser/fetchPostsStatus', async () => {
  const { data } = await axios.get('https://deebf77f001a3003.mokky.ru/postsByUser');
  return data[0].posts;
});
