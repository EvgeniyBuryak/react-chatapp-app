import React from "react";
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';
import Checkbox from "./Checkbox";

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
    <form onChange={handleSubmit} className="m-4 flex justify-center gap-14">
      <Checkbox value="all"   title="Все" defaultChecked onClick={() => handleFilterChange('all')} />
      <Checkbox value="complete"   title="Выполненные"   onClick={() => handleFilterChange('complete')} />
      <Checkbox value="uncomplete" title="Невыполненные" onClick={() => handleFilterChange('uncomplete')} />
    </form>
  );
};

export default FilterTodo;
