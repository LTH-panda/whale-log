import {Categories, PostContainer} from 'components/organism';
import {CategoriesProps} from 'components/organism/Categories';
import {MainDoor} from 'components/templates/Main';
import useCategory from 'hooks/useCategory';
import React from 'react';

function HomePage() {
  const {isCategoryVisible, openCategory, closeCategory} = useCategory();

  const categoriesProps: CategoriesProps = {
    onClick: openCategory,
    isVisible: isCategoryVisible,
    onClickBackDrop: closeCategory,
    categoriesData: ['1', '2', '3'],
  };

  return (
    <>
      <MainDoor />
      <Categories {...categoriesProps} />
      <PostContainer />
    </>
  );
}

export default HomePage;
