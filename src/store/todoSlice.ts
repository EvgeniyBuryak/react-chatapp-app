import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  editable: boolean;
};

export interface IFilter {
  value: "all" | "complete" | "uncomplete";
};

const initialState: { todos: ITodo[], filter: IFilter } = {
  todos: [],
  filter: { value: 'all' },
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now().toString(), text: action.payload, completed: false, editable: false });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string, value: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.value;
      }
    },
    toggleEdit: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.editable = !todo.editable;
      }
    },
    setFilter: (state, action: PayloadAction<IFilter['value']>) => {
      state.filter.value = action.payload;
    },
  }
});

export const { addTodo, toggleTodo, removeTodo, editTodo, toggleEdit, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
