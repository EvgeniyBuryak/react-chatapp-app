import React from 'react';

interface IButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};

const Button: React.FC<IButtonProps> = ({
  title,
  type,
  onClick,
  ...props
}) => {
  return(
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      type={type ? type : "button"}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
