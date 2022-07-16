import server from 'api/server';
import {PostMarkdown, PostTitle} from 'components/templates/Post';
import {GetStaticPaths, GetStaticProps} from 'next';
import {Post} from 'pages';
import React from 'react';

function PostPage({post}: {post: Post}) {
  return (
    <>
      <PostTitle
        title={post.attributes.title}
        date={post.attributes.updatedAt}
      />
      <PostMarkdown markdown={post.attributes.body} />
    </>
  );
}

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await server.get('/posts');
  const posts: Post[] = res.data.data;

  const paths = posts.map(P => ({
    params: {id: P.id.toString()},
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
  const res = await server.get(`/posts/${params?.id}`);
  const post = res.data.data;

  return {
    props: {
      post,
    },
  };
};
