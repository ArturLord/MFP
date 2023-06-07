import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status, setPosts } from 'redux/slices/postsSlice';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPostsStatus',
  async ({currentPage, setPhotosTotal,posts, status, setPosts}) => {
    const prevPosts = posts;
    const { data, headers } = await axios.get(`http://localhost:3000/posts/?_page=${currentPage}&_limit=5`);
  
      if (currentPage === 1) {
        setPhotosTotal(headers['x-total-count']);
        setPosts([...data]);

      } else {
        setPhotosTotal(headers['x-total-count']);
        setPosts([...prevPosts, ...data]);
    }
    return data;
  },
);