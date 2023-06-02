import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setPostsByUser } from 'redux/slices/postsSlice';

export const fetchPostByUser = createAsyncThunk(
  'postsByUser/fetchPostsStatus',
  async () => {
    const { data } = await axios.get("http://localhost:3000/postsByUser"
    );
    return (data[0].posts)

  },
);
