import React from 'react';

export type TagProps = {
  title: string;
};

function Tag({title}: TagProps) {
  return (
    <span className="px-3 py-1 text-sm transition-colors duration-300 bg-blue-400 rounded-lg hover:bg-slate-400 hover:text-white font-suitLight ">
      {title}
    </span>
  );
}

export default Tag;
