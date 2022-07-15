/* eslint-disable jsx-a11y/no-autofocus */
import React, {useEffect, useRef} from 'react';

export type TextFieldProps = {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
};

function TextField({placeholder, value, onChange, autoFocus}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  });

  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={inputRef}
      className="p-4 transition-colors border-b-2 w-96 focus:outline-none focus:border-b-2 focus:border-blue-500"
    />
  );
}

export default TextField;
