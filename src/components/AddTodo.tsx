import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  let input: HTMLInputElement | null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input?.value.trim()) return;
    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={(node) => input = node} type="text" placeholder="Add todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
