/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const selectedTrackUriSlice = createSlice({
  name: 'selectedTrackUri',
  initialState: {
    value: [] as string[],
  },
  reducers: {
    insertSelectedTrackUri: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    removeSelectedTrackUri: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((track) => track !== action.payload);
    },
    clearSelectedTrackUri: (state) => {
      state.value = [];
    },
  },
});

export const {
  insertSelectedTrackUri,
  removeSelectedTrackUri,
  clearSelectedTrackUri,
} = selectedTrackUriSlice.actions;
export default selectedTrackUriSlice.reducer;
