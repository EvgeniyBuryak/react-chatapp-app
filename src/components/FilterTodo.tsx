import React from "react";
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';

const FilterTodo: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: 'all' | 'complete' | 'uncomplete') => {
    dispatch(setFilter(newFilter));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allInput = e.currentTarget.querySelectorAll('input');
    allInput.forEach(input => {
      if (input.nodeName === "INPUT" && e.target !== input) {
        input.checked = false;
      }
    });
  };

  return (
    <form onChange={handleSubmit} >
      <input type="checkbox" value={"all"} onChange={() => handleFilterChange('all')} />
      <span>Все</span>
      <input type="checkbox" value={"completed"} onChange={() => handleFilterChange('complete')} />
      <span>Выполненные</span>
      <input type="checkbox" value={"not_completed"} onChange={() => handleFilterChange('uncomplete')} />
      <span>Невыполненные</span>
    </form>
  );
};

export default FilterTodo;
