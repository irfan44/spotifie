import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="container mt-20 space-y-6 mx-auto pb-3">{children}</div>
  );
};
export default Container;
