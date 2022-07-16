import {Logo} from 'components/atoms';
import {Nav} from 'components/molecule';
import React from 'react';
import Search, {SearchProps} from '../Search';

export type HeaderProps = {
  searchProps: SearchProps;
};

function Header({searchProps}: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-8 p-8">
      <span className="mr-auto">
        <Logo />
      </span>
      <Nav />
      {/* <Search {...searchProps} /> */}
    </header>
  );
}

export default Header;
