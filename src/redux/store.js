import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import postsReducer from './slices/postsSlice';
import postsUserReducer from './slices/postsByUser';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    postsUser: postsUserReducer,

  },
});
