/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    resetToken: (state) => {
      state.value = null;
    },
  },
});

export const { setToken, resetToken } = tokenSlice.actions;
export default tokenSlice.reducer;
