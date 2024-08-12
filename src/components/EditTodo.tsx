import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoSlice";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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
    <form className="flex flex-row justify-between gap-4 mb-2" onSubmit={handleSubmit}>
      <Input value={text} onChange={(e) => setText(e.target.value)} autoFocus />
      <div className="flex gap-2">
        <Button title={"Сохранить"} type="submit"     />
        <Button title={"Отменить"}  onClick={onClose} />
      </div>
    </form>
  );
};

export default EditTodo;
