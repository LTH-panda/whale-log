import React from 'react';

export type CardProps = {
  children: React.ReactNode;
};

function Card({children}: CardProps) {
  return (
    <div className="flex-1 transition-all bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
      {children}
    </div>
  );
}

export default Card;
