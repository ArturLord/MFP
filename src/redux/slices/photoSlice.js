import { createSlice } from '@reduxjs/toolkit';

export const Status = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

const initialState = {
    photos: [],
    status: Status.LOADING,
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhoto(state, action) {
      state.photos = action.payload;
  },
    setMutatePhoto(state, action) {
        state.photos = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchApples.pending, (state) => {
      state.status = Status.LOADING;
      state.photos = [];
    });
    builder.addCase(fetchApples.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchApples.rejected, (state) => {
      state.status = Status.ERROR;
      state.photos = [];
    });
  },
});

export const {setPhoto, setMutatePhoto} = photoSlice.actions;

export default photoSlice.reducer;