import React from 'react';

export type ButtonProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isFull?: boolean;
};

function Button({title, onClick, isFull = false}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        !isFull && 'self-start'
      } p-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white `}>
      {title}
    </button>
  );
}

export default Button;
