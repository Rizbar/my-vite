import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import voteReducer from '../features/voteSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    vote: voteReducer,
  },
});