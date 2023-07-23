import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import postsReducer from './slices/postsSlice';
import postsUserReducer from './slices/postsByUser';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    postsUser: postsUserReducer,
    auth: authSlice,
  },
});
