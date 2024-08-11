import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoSlice";
import { useState } from "react";

interface IEditTodoProps {
  id: string;
  value: string;
  onClose: () => void;
};

const EditTodo: React.FC<IEditTodoProps> = ({ id, value, onClose }) => {
  const [text, setText] = useState(value);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    dispatch(editTodo({ id, value: text }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" autoFocus />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditTodo;
