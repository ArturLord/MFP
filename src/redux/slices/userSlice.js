import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from 'api/users';

import { Status } from 'redux/@types';
import { getIsAuthLS } from 'utils/getisAuthLS';

const initialState = {
  users: [],
  authUser: {},
  status: Status.LOADING,
  email: getIsAuthLS(),
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },

    setAuthUser(state, action) {
      state.authUser = action.payload;
    },

    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    
      const json = JSON.stringify({
        isAuth: true,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      });
      localStorage.setItem('auth', json);
    },

    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.authUser = [];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.authUser = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.authUser = [];
    });
  },
});

export const { setUser, setAuthUser, setUsers, removeUser } = userSlice.actions;

export default userSlice.reducer;
