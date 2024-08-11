import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTodo, removeTodo, toggleEdit } from '../store/todoSlice';
import EditTodo from './EditTodo';

const TodoList = () => {
  const { todos, filter: { value: filter } } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleCloseEditor = (id: string) => {
    dispatch(toggleEdit(id));
  };

  const visibleTodos = todos.filter(todo => {
    if (!filter) return true;
    return filter === 'all'
      ? true
      : filter === 'complete' && todo.completed === true
        ? true
        : filter === 'uncomplete' && todo.completed === false
          ? true
          : false;
  });

  return (
    <ul>
      {visibleTodos.map(todo =>
        todo.editable ? (
          <EditTodo key={todo.id} id={todo.id} value={todo.text} onClose={() => handleCloseEditor(todo.id)} />
        ) : (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleCloseEditor(todo.id)}>Edit</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        )
      )}
    </ul>
  );
};

export default TodoList;
