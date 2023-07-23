import { createSlice } from '@reduxjs/toolkit';
import { fetchPostByUser } from 'api/postByUser';

import { Status } from 'redux/@types';

const initialState = {
  postsByUser: [],
  status: Status.LOADING,
};

const postsByUserSlice = createSlice({
  name: 'postsByUser',
  initialState,
  reducers: {
    setPostsByUser(state, action) {
      state.postsByUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPostByUser.pending, (state) => {
      state.status = Status.LOADING;
      state.postsByUser = [];
    });
    builder.addCase(fetchPostByUser.fulfilled, (state, action) => {
      state.postsByUser = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPostByUser.rejected, (state) => {
      state.status = Status.ERROR;
      state.postsByUser = [];
    });
  },
});

export const { setPostsByUser } = postsByUserSlice.actions;

export default postsByUserSlice.reducer;
