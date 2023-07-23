import { createSlice } from '@reduxjs/toolkit';

import { fetchPosts, toggleLike, sendComment, deleteComment } from 'api/posts';

import { Status } from 'redux/@types';

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
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      if (state.currentPage === 1) {
        state.status = Status.LOADING;
      }
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = Status.ERROR;
      state.posts = [];
    });

    builder.addCase(toggleLike.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);

      if (index !== -1) {
        state.posts[index] = updatedPost;
      }

      state.status = Status.SUCCESS;
    });

    builder.addCase(sendComment.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);

      if (index !== -1) {
        state.posts[index] = updatedPost;
      }

      state.status = Status.SUCCESS;
    });

    builder.addCase(sendComment.rejected, (state, action) => {
      state.status = Status.ERROR;
      console.error('Ошибка при отправке комментария:', action.error);
    });

    builder.addCase(deleteComment.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);

      if (index !== -1) {
        state.posts[index] = updatedPost;
      }

      state.status = Status.SUCCESS;
    });
  },
});

export const { setPosts, setCurrentPage } = postsSlice.actions;

export default postsSlice.reducer;
