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
  },
});

export const { setUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
