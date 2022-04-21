/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: {
      isOpen: false,
      content: { status: null, message: null },
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.value.isOpen = true;
      state.value.content.status = action.payload.status;
      state.value.content.message = action.payload.message;
    },
    closeModal: (state) => {
      state.value.isOpen = false;
      state.value.content.status = null;
      state.value.content.message = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
