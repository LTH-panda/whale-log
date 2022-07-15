import {Header} from 'components/organism';
import {HeaderProps} from 'components/organism/Header';
import useSearch from 'hooks/useSearch';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({children}: LayoutProps) {
  const {
    visible,
    value,
    openSearch,
    closeSearch,
    changeSearchValue,
    resetSearchValue,
  } = useSearch();
  const headerProps: HeaderProps = {
    searchProps: {
      onClick: openSearch,
      isVisible: visible,
      onClickBackDrop: () => {
        closeSearch();
        resetSearchValue();
      },
      onSubmit: e => {
        e.preventDefault();
      },
      value,
      onChange: changeSearchValue,
    },
  };

  return (
    <>
      <Header {...headerProps} />
      <div className="flex flex-col gap-8 p-8">{children}</div>
    </>
  );
}

export default Layout;
