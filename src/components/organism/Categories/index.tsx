import {CATEGORIES_TITLE} from 'commons/constants/string';
import {BottomSheet, Button, Tag} from 'components/atoms';
import {Category} from 'pages';
import React from 'react';

export type CategoriesProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isVisible: boolean;
  onClickBackDrop: React.MouseEventHandler<HTMLDivElement>;
  categoriesData: Category[];
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
          {categoriesData &&
            categoriesData.map(C => (
              <Tag title={C.attributes.category} key={C.id} />
            ))}
        </div>
      </BottomSheet>
    </>
  );
}

export default Categories;
