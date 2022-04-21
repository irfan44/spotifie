/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    id: null,
    displayName: null,
    displayImage: null,
    href: null,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.id = action.payload.id;
      state.displayName = action.payload.displayName;
      state.displayImage = action.payload.displayImage;
      state.href = action.payload.href;
    },
    resetUserProfile: (state) => {
      state.id = null;
      state.displayName = null;
      state.displayImage = null;
      state.href = null;
    },
  },
});

export const { setUserProfile, resetUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
