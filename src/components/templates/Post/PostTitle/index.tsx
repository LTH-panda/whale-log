import React from 'react';

export type PostTitleProps = {
  title: string;
  date: string;
};

function PostTitle({title, date}: PostTitleProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl font-suitSemiBold">{title}</h1>
      <div className="p-4 border-l-2 border-blue-500 border-solid">{date}</div>
    </div>
  );
}

export default PostTitle;
