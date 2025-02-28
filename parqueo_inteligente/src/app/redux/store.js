import { configureStore } from '@reduxjs/toolkit';
import parqueoReducer from './parqueoSlice';

export const store = configureStore({
  reducer: {
    parqueo: parqueoReducer,
  },
});
