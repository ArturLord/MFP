import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from 'api/posts';

export const Status = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  posts: [],
  currentPage: 1,
  status: Status.LOADING,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setMutatePhoto(state, action) {
      state.posts = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING;
      // state.posts = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = Status.ERROR;
      state.posts = [];
    });
  },
});

export const { setPosts, setCurrentPage, setMutatePhoto } = postsSlice.actions;

export default postsSlice.reducer;
