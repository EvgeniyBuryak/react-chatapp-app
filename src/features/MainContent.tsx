import React from 'react';
import { AddTodo, TodoList, FilterTodo } from '../components';

function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <FilterTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default MainContent;
