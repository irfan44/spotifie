/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type SelectedTrack = {
  uri: string;
  imgUrl: string;
  trackTitle: string;
  duration: string;
  artistName: string;
  albumName: string;
  externalUrl: string;
};

const selectedTrackSlice = createSlice({
  name: 'selectedTrack',
  initialState: {
    value: [] as SelectedTrack[],
  },
  reducers: {
    insertSelectedTrack: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeSelectedTrack: (state, action) => {
      state.value = state.value.filter(
        (track) => track.uri !== action.payload.uri
      );
    },
    clearSelectedTrack: (state) => {
      state.value = [];
    },
  },
});

export const { insertSelectedTrack, removeSelectedTrack, clearSelectedTrack } =
  selectedTrackSlice.actions;
export default selectedTrackSlice.reducer;
