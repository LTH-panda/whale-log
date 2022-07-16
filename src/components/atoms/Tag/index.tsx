/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export type TagProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

function Tag({title, onClick}: TagProps) {
  return (
    <span
      onClick={onClick}
      className="px-3 py-1 text-sm transition-colors duration-300 bg-blue-400 rounded-lg hover:bg-slate-400 hover:text-white font-suitLight ">
      {title}
    </span>
  );
}

export default Tag;
