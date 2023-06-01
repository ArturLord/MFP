import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotosStatus',
  async () => {
    const { data } = await axios.get('http://localhost:3000/posts'
    );
    return data;
  },
);
