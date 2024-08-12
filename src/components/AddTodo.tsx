import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import Button from './Button';
import Input from './Input';

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
      <Input  nodeInput={(node) => input = node} placeholder="добавить todo" />
      <Button title={"Добавить"} type="submit" />
    </form>
  );
};

export default AddTodo;
