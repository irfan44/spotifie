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
        return 'border border-green-500 text-green-500 rounded-xl';
      case 'remove':
        return 'border border-red-500 text-red-500 rounded-xl';
      default:
        return 'border border-white text-white';
    }
  };
  return (
    <button
      id={id}
      className={`rounded-xl border p-2 ${variantColor()}`}
      title={title}
      type={type}
      onClick={handleOnClick}
    >
      {icon}
    </button>
  );
};
export default IconButton;
