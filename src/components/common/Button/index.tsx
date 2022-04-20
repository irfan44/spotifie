import { MouseEventHandler } from 'react';

type Props = {
  title: string;
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary' | 'tertiary';
  handleOnClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ title, type, variant, handleOnClick }: Props) => {
  const variantColor = () => {
    switch (variant) {
      case 'primary':
        return 'border text-white hover:bg-white hover:text-black hover:border';
      case 'secondary':
        return 'border bg-white text-black hover:bg-transparent hover:text-white hover:border';
      case 'tertiary':
        return 'bg-green-500 text-white hover:bg-green-600';
      default:
        return 'border text-white';
    }
  };

  return (
    <button
      className={`rounded-2xl py-2 px-4 font-bold ${variantColor()}`}
      type={type}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
};

export default Button;
