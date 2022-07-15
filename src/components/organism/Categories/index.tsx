import {CATEGORIES_TITLE} from 'commons/constants/string';
import {BottomSheet, Button, Tag} from 'components/atoms';
import React from 'react';

export type CategoriesProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isVisible: boolean;
  onClickBackDrop: React.MouseEventHandler<HTMLDivElement>;
  categoriesData: string[];
};

function Categories({
  title = CATEGORIES_TITLE,
  onClick,
  isVisible,
  onClickBackDrop,
  categoriesData,
}: CategoriesProps) {
  return (
    <>
      <Button title={title} onClick={onClick} isFull />
      <BottomSheet isVisible={isVisible} onClickBackDrop={onClickBackDrop}>
        <div className="flex flex-wrap items-start w-full gap-4 p-8 bg-white rounded-t-lg h-96 max-w-body">
          {categoriesData && categoriesData.map(C => <Tag title={C} key={C} />)}
        </div>
      </BottomSheet>
    </>
  );
}

export default Categories;
