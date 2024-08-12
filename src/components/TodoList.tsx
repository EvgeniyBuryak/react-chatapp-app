import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTodo, removeTodo, toggleEdit } from '../store/todoSlice';
import EditTodo from './EditTodo';
import Checkbox from './Checkbox';
import Button from './Button';

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
    <ul className="bg-blue-50 p-6 rounded-lg shadow-md">
      {visibleTodos.map(todo =>
        todo.editable ? (
          <EditTodo key={todo.id} id={todo.id} value={todo.text} onClose={() => handleCloseEditor(todo.id)} />
        ) : (
          <li key={todo.id} className="flex flex-row justify-between gap-4 mb-2">
            <Checkbox value="todo" title={todo.text} onClick={() => dispatch(toggleTodo(todo.id))}
              checked={todo.completed} readOnly />
            <div className="flex gap-2">
              <Button title={"Редактировать"} onClick={() => handleCloseEditor(todo.id)} />
              <Button title={"Удалить"} onClick={() => dispatch(removeTodo(todo.id))} />
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default TodoList;
