import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto mt-20 space-y-6 pb-3">{children}</div>
  );
};
export default Container;
