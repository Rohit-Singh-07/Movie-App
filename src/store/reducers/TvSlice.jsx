// reducers/tvSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: null, // Set initial state to null
};

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    loadTv: (state, action) => {
      state.info = action.payload;
    },
    removeTv: (state) => {
      state.info = null; // Reset info to null when removing TV data
    },
  },
});

export const { loadTv, removeTv } = tvSlice.actions;

export default tvSlice.reducer;
