import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from 'api/auth';
import { Status } from './postsSlice';

const initialState = {
  token: null,
    email: null,
    user: null,
    status: Status.LOADING,
  }

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logoutUser: (state) => {
        state.email = null;
      },
      setUserAuth: (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.response;
        state.user = action.payload.data;
      },
    },
    extraReducers: (builder) => {
      
        builder.addCase(registerUser.pending, (state) => {
          state.loading = true        
          state.error = null;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload.token
          state.email = action.payload.email       
        })
          builder.addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        })


        builder.addCase(loginUser.pending, (state) => {
          state.status = Status.LOADING;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
          state.status = Status.SUCCESS;
          state.token = action.payload.data.token;
          state.email = action.payload.email;
          state.user = action.payload.data;
        });
        builder.addCase(loginUser.rejected, (state) => {
          state.status = Status.ERROR;
        });
    },
  });
  
  export const { logoutUser, setUserAuth } = authSlice.actions;
  
  export default authSlice.reducer;