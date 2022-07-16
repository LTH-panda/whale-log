import server from 'api/server';
import {Categories, PostContainer} from 'components/organism';
import {CategoriesProps} from 'components/organism/Categories';
import {MainDoor} from 'components/templates/Main';
import useCategory from 'hooks/useCategory';
import {GetStaticProps} from 'next';
import React from 'react';

function HomePage({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) {
  const {isCategoryVisible, openCategory, closeCategory} = useCategory();

  const categoriesProps: CategoriesProps = {
    onClick: openCategory,
    isVisible: isCategoryVisible,
    onClickBackDrop: closeCategory,
    categoriesData: categories,
  };

  return (
    <>
      <MainDoor />
      <Categories {...categoriesProps} />
      <PostContainer posts={posts} />
    </>
  );
}

export default HomePage;

export type Post = {
  id: number;
  attributes: {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories: {data: Category[]};
  };
};

export type Category = {
  id: number;
  attributes: {
    category: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const postsRes = await server.get('/posts?populate=*');
    const categoriesRes = await server.get('/categories');

    const posts = postsRes.data.data;
    const categories = categoriesRes.data.data;

    return {
      props: {
        posts,
        categories,
      },
    };
  } catch (e) {
    return {props: {}};
  }
};
