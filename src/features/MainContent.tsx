import React from 'react';
import { AddTodo, TodoList, FilterTodo } from '../components';

function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-bold mb-4">Todo List</h1>
        <FilterTodo />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default MainContent;
