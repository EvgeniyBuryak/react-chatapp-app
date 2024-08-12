import React from "react";
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';

const FilterTodo: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (newFilter: 'all' | 'complete' | 'uncomplete') => {
    dispatch(setFilter(newFilter));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const allInput = e.currentTarget.querySelectorAll('input');
    allInput.forEach(input => {
      if (input.nodeName === "INPUT" && e.target !== input) {
        input.checked = false;
      } else if (e.target === input) {
        input.checked = true;
      }
    });
  };

  return (
    <form onChange={handleSubmit} className="m-4 flex justify-end gap-2">
      <label className="flex items-center space-x-2">
        <input className="form-checkbox h-5 w-5 text-blue-600"
          type="checkbox" value={"all"} defaultChecked onChange={() => handleFilterChange('all')} />
        <span>Все</span>
      </label>
      <label className="flex items-center space-x-2">
        <input className="form-checkbox h-5 w-5 text-blue-600"
          type="checkbox" value={"completed"}          onChange={() => handleFilterChange('complete')} />
        <span>Выполненные</span>
      </label>
      <label className="flex items-center space-x-2">
        <input className="form-checkbox h-5 w-5 text-blue-600"
          type="checkbox" value={"not_completed"}      onChange={() => handleFilterChange('uncomplete')} />
        <span>Невыполненные</span>
      </label>
    </form>
  );
};

export default FilterTodo;
