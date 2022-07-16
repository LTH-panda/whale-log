import {POST_EMPTY_MESSAGE} from 'commons/constants/string';
import {Post} from 'pages';
import React from 'react';
import PostCard from '../PostCard';

export type PostContainerProps = {
  posts: Post[];
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
          categories={P.attributes.categories.data}
          id={P.id}
          title={P.attributes.title}
          body={P.attributes.body}
          date={P.attributes.updatedAt}
          key={P.id}
        />
      ))}
    </div>
  );
}

export default PostCotainer;
