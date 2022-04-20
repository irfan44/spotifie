import { MouseEventHandler } from 'react';

type Props = {
  primary?: boolean;
  title: string;
  type: 'button' | 'submit' | 'reset';
  handleOnClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ primary, title, type, handleOnClick }: Props) => {
  const variant = primary
    ? 'bg-green-500'
    : 'bg-transparent border border-green-500 text-white';

  return (
    <button
      className={`rounded-xl py-2 px-5 font-bold ${variant}`}
      type={type}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
};

export default Button;
