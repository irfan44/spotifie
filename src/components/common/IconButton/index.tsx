import React, { MouseEventHandler } from 'react';

type Props = {
  id?: string;
  icon: React.ReactNode;
  title: string;
  type: 'button';
  variant: 'add' | 'remove' | 'default';
  handleOnClick?: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({
  id,
  icon,
  title,
  type,
  variant,
  handleOnClick,
}: Props) => {
  const variantColor = () => {
    switch (variant) {
      case 'add':
        return 'hover:text-green-500 focus:text-green-500';
      case 'remove':
        return 'hover:text-red-500 focus:text-red-500';
      default:
        return 'text-white focus:text-white';
    }
  };
  return (
    <button
      id={id}
      className={`rounded-xl p-2 text-lg ${variantColor()}`}
      title={title}
      type={type}
      onClick={handleOnClick}
    >
      {icon}
    </button>
  );
};
export default IconButton;
