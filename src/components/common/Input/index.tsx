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
      className={`w-full rounded-xl bg-white p-2 text-black ${variant}`}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
