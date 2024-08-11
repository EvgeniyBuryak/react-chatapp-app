import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

function App() {
  return (
    <div
      className='App'
      style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Todo List</h1>
      <FilterTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
