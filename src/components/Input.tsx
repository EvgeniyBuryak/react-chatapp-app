import React from 'react';

interface IInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  nodeInput?: (node: HTMLInputElement) => void;
};

const Input: React.FC<IInputProps> = ({
  nodeInput,
  ...props
}) => {
  return(
    <input ref={nodeInput}
        className="shadow appearance-none border rounded w-full py-2 px-3 
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder={props.placeholder} {...props} />
  );
};

export default Input;
