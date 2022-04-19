import { ChangeEventHandler } from 'react';

type Props = {
  id: string;
  isError: boolean;
  name: string;
  value: string;
  placeholder: string;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  id,
  isError,
  name,
  value,
  placeholder,
  handleOnChange,
}: Props) => {
  const variant = isError ? 'border-2 border-red-600 rounded-xl' : '';

  return (
    <input
      className={`p-2 bg-white rounded-xl w-full text-black ${variant}`}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
