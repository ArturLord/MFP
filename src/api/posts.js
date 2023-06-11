import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPostsStatus',
  async ({currentPage, setPhotosTotal, posts}) => {
    const prevPosts = posts;
    const { data, headers } = await axios.get(`http://localhost:3000/posts/?_page=${currentPage}&_limit=5`);
  
      if (currentPage === 1) {
        setPhotosTotal(headers['x-total-count']);
        // setPosts([...data]);
        return data;
      } else {
        setPhotosTotal(headers['x-total-count']);
        // setPosts([...prevPosts, ...data]);
        return [...prevPosts, ...data];
    }
  },
);