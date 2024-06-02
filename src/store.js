// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import landingPagesReducer from './features/landingPages/landingPagesSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    landingPages: landingPagesReducer,
    auth: authReducer,
  },
});

export default store;