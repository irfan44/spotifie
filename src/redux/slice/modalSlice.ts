/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: {
      isOpen: false,
      content: null,
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.value.isOpen = true;
      state.value.content = action.payload;
    },
    closeModal: (state) => {
      state.value.isOpen = false;
      state.value.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
