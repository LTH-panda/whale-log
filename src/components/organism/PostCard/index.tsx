import {Card, Tag} from 'components/atoms';
import React from 'react';

export type PostCardProps = {
  category: string;
  title: string;
  body: string;
  date: string;
};

function PostCard({category, title, body, date}: PostCardProps) {
  return (
    <Card>
      <div className="p-8">
        <Tag title={category} />
        <h2 className="py-3 text-xl font-suitSemiBold">{title}</h2>
        <div className="pb-2 text-base text-gray-500 font-suitLight">
          {body}
        </div>
        <div className="text-sm text-gray-400 font-suitLight">{date}</div>
      </div>
    </Card>
  );
}

export default PostCard;
