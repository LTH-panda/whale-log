import {POST_EMPTY_MESSAGE} from 'commons/constants/string';
import React from 'react';
import PostCard, {PostCardProps} from '../PostCard';

export type PostContainerProps = {
  posts: PostCardProps[];
};

function PostCotainer({posts}: PostContainerProps) {
  if (!posts)
    return (
      <div className="flex items-center justify-center py-20 text-gray-500">
        {POST_EMPTY_MESSAGE}
      </div>
    );

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map(P => (
        <PostCard
          category={P.category}
          title={P.title}
          body={P.body}
          date={P.date}
          key={P.id}
        />
      ))}
    </div>
  );
}

export default PostCotainer;
