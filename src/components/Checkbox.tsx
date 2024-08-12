import React from "react";

interface ICheckboxProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title: string;
  value: string;
  onClick: () => void;
};

const Checkbox: React.FC<ICheckboxProps> = ({
  title,
  value,
  onClick,
  ...props
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input className="form-checkbox h-5 w-5 text-blue-600"
        type="checkbox" value={value} onClick={onClick} {...props} />
      <span className="flex-wrap" style={{ textDecoration: props.checked ? 'line-through' : 'none' }}>
        {title}
      </span>
    </label>
  );
};

export default Checkbox;
