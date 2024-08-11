import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  editable: boolean;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now().toString(), text: action.payload, completed: false, editable: false });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string, value: string }>) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.value;
      }
    },
    toggleEdit: (state, action: PayloadAction<string>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.editable = !todo.editable;
      }
    },
  }
});

export const { addTodo, toggleTodo, removeTodo, editTodo, toggleEdit } = todoSlice.actions;

export default todoSlice.reducer;
