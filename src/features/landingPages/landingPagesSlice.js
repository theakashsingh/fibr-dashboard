// src/features/landingPages/landingPagesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  landingPages: [],
};

const landingPagesSlice = createSlice({
  name: 'landingPages',
  initialState,
  reducers: {
    addLandingPage: (state, action) => {
      const newPage = { id: uuidv4(), ...action.payload };
      state.landingPages.push(newPage);
    },
    updateLandingPage: (state, action) => {
      const updatedPage = action.payload;
      const index = state.landingPages.findIndex((page) => page.id === updatedPage.id);
      if (index !== -1) {
        state.landingPages[index] = updatedPage;
      }
    },
    deleteLandingPage: (state, action) => {
      const id = action.payload;
      state.landingPages = state.landingPages.filter((page) => page.id !== id);
    },
  },
});

export const { addLandingPage, updateLandingPage, deleteLandingPage } = landingPagesSlice.actions;
export default landingPagesSlice.reducer;
