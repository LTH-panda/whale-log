import {CATEGORIES_TITLE} from 'commons/constants/string';
import {BottomSheet, Button, Tag} from 'components/atoms';
import Link from 'next/link';
import {Category} from 'pages';
import React from 'react';

export type CategoriesProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isVisible: boolean;
  onClickBackDrop: React.MouseEventHandler<HTMLDivElement>;
  categoriesData: Category[];
  onClickTag: React.MouseEventHandler<HTMLSpanElement>;
};

function Categories({
  title = CATEGORIES_TITLE,
  onClick,
  isVisible,
  onClickBackDrop,
  categoriesData,
  onClickTag,
}: CategoriesProps) {
  return (
    <>
      <Button title={title} onClick={onClick} isFull />
      <BottomSheet isVisible={isVisible} onClickBackDrop={onClickBackDrop}>
        <div className="flex flex-wrap items-start w-full gap-4 p-8 bg-white rounded-t-lg h-96 max-w-body">
          {categoriesData &&
            categoriesData.map(C => (
              <Link
                href={{
                  pathname: '/explore/[category]',
                  query: {category: C.attributes.category},
                }}
                // as={`/explore?category=${C.attributes.category}`}
                passHref>
                <a href="replace">
                  <Tag
                    title={C.attributes.category}
                    onClick={onClickTag}
                    key={C.id}
                  />
                </a>
              </Link>
            ))}
        </div>
      </BottomSheet>
    </>
  );
}

export default Categories;
