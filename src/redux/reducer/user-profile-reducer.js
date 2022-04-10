import { createSlice } from "@reduxjs/toolkit";
// create the slice
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    id: null,
    displayName: null,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.id = action.payload.id;
      state.displayName = action.payload.displayName;
    },
  },
});

export const { setUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
