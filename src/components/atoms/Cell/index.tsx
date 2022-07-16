import React from 'react';

export type CellProps = {
  title: string;
  desc: string;
};

function Cell({title, desc}: CellProps) {
  return (
    <div className="flex flex-col p-8 bg-white rounded-lg shadow-md md:flex-row">
      <div className="w-2/6 font-suitSemiBold">{title}</div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
}

export default Cell;
