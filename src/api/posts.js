import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPostsStatus',
  async ({currentPage}) => {
    const { data } = await axios.get(`http://localhost:3000/posts/?_page=${currentPage}&_limit=5`
    );
    console.log(currentPage, 'crwe')
    return data;
  },
);