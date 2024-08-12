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
    <form onSubmit={handleSubmit} className="m-4 flex justify-end gap-2">
      <input ref={(node) => input = node} 
        className="" type="text" placeholder="Add todo" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit">{"Add"}</button>
    </form>
  );
};

export default AddTodo;
