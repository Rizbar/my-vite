import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [
    { id: 1, text: 'Belajar React' },
    { id: 2, text: 'Buat Project' },
  ],
  selectedTodoId: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    selectTodo: (state, action) => {
      state.selectedTodoId = action.payload;
    },
  },
});

export const { selectTodo } = todoSlice.actions;
export default todoSlice.reducer;