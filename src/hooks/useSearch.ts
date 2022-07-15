import {searchValue, searchVisible} from 'coils/search';
import React from 'react';
import {useRecoilState, useResetRecoilState} from 'recoil';

const useSearch = () => {
  const [visible, setVisible] = useRecoilState(searchVisible);
  const [value, setValue] = useRecoilState(searchValue);
  const resetSearchValue = useResetRecoilState(searchValue);

  const openSearch = () => setVisible(true);
  const closeSearch = () => setVisible(false);
  const changeSearchValue: React.ChangeEventHandler<HTMLInputElement> = e =>
    setValue(e.target.value);

  return {
    visible,
    value,
    openSearch,
    closeSearch,
    changeSearchValue,
    resetSearchValue,
  };
};

export default useSearch;
