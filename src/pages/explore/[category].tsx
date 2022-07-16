import server from 'api/server';
import {Categories, PostContainer} from 'components/organism';
import {CategoriesProps} from 'components/organism/Categories';
import {ExploreDoor} from 'components/templates/Explore';
import useCategory from 'hooks/useCategory';
import {GetStaticPaths, GetStaticProps} from 'next';
import {Category} from 'pages';
import React from 'react';

function CategoryPage({posts, categories}) {
  const {
    isCategoryVisible,
    categoryCurrent,
    openCategory,
    closeCategory,
    setCategory,
  } = useCategory();

  const categoriesProps: CategoriesProps = {
    title: categoryCurrent,
    onClick: openCategory,
    isVisible: isCategoryVisible,
    onClickBackDrop: closeCategory,
    categoriesData: categories,
    onClickTag: e => setCategory(e.currentTarget.innerText),
  };

  return (
    <>
      <ExploreDoor />
      <Categories {...categoriesProps} />
      <PostContainer posts={posts} />
    </>
  );
}

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await server.get('/categories');
  const categories = res.data.data;

  const paths = categories.map((C: Category) => ({
    params: {category: C.attributes.category},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postsRes = await server.get(
    `/posts?populate[categories][attribute][title]=${params.category}`,
  );
  const categoriesRes = await server.get('/categories');
  const posts = postsRes.data.data;
  const categories = categoriesRes.data.data;

  return {
    props: {
      posts,
      categories,
    },
  };
};
