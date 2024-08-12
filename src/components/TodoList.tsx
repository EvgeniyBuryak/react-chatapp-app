import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTodo, removeTodo, toggleEdit } from '../store/todoSlice';
import EditTodo from './EditTodo';

const TodoList: React.FC = () => {
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
    <ul className="bg-blue-100 p-6 rounded-lg shadow-md">
      {visibleTodos.map(todo =>
        todo.editable ? (
          <EditTodo key={todo.id} id={todo.id} value={todo.text} onClose={() => handleCloseEditor(todo.id)} />
        ) : (
          <li key={todo.id} className="flex flex-row justify-between gap-4 mb-2">
            <label className="flex items-center space-x-2">
              <input
                onClick={() => dispatch(toggleTodo(todo.id))}
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="form-checkbox h-5 w-5 text-blue-600"
              >
              </input>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            </label>
            <div className="flex gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleCloseEditor(todo.id)}
              >
                {"Edit"}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                {"Remove"}
              </button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default TodoList;
