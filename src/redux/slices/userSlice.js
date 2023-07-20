import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from 'api/users';
import { Status } from './postsSlice';

const initialState = {
  users: [],
  authUser: {},
  status: Status.LOADING,
  email: null,
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
