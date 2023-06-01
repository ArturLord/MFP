import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import photoReducer from './slices/photoSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    photos: photoReducer,
  },
});
