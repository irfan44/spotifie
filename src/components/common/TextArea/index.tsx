import { ChangeEventHandler } from 'react';

type Props = {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  handleOnChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea = ({ id, name, value, placeholder, handleOnChange }: Props) => {
  return (
    <textarea
      className="p-2 bg-white rounded-xl w-full resize-none text-black"
      id={id}
      name={name}
      placeholder={placeholder}
      rows={4}
      value={value}
      onChange={handleOnChange}
    />
  );
};
export default TextArea;
