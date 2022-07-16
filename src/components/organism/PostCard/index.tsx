import {Card, Tag} from 'components/atoms';
import Link from 'next/link';
import {Category} from 'pages';
import React from 'react';
import getUrlSpaceToDash from 'utils/getUrlSpaceToDash';

export type PostCardProps = {
  categories: Category[];
  id: number;
  title: string;
  body: string;
  date: string;
};

function PostCard({categories, id, title, body, date}: PostCardProps) {
  return (
    <Link
      href={{pathname: '/post/[id]', query: {id}}}
      as={`/${getUrlSpaceToDash(title)}`}
      passHref>
      <a href="replace">
        <Card>
          <div className="p-8">
            <div className="flex gap-4">
              {categories?.map(C => (
                <Tag title={C.attributes.category} key={C.id} />
              ))}
            </div>
            <h2 className="py-3 text-xl font-suitSemiBold">{title}</h2>
            <div className="pb-2 text-base text-gray-500 font-suitLight">
              {body}
            </div>
            <div className="text-sm text-gray-400 font-suitLight">{date}</div>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default PostCard;
