import {SEARCHBAR_PLACEHOLDER} from 'commons/constants/string';
import {Modal, TextField} from 'components/atoms';
import {SearchIcon} from 'components/atoms/Icons';
import React from 'react';

export type SearchProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isVisible: boolean;
  onClickBackDrop: React.MouseEventHandler<HTMLDivElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Search({
  onClick,
  isVisible,
  onClickBackDrop,
  onSubmit,
  value,
  onChange,
}: SearchProps) {
  return (
    <>
      <button type="button" onClick={onClick}>
        <SearchIcon />
      </button>
      <Modal isVisible={isVisible} onClickBackDrop={onClickBackDrop}>
        <form onSubmit={onSubmit} className="p-8 bg-white rounded-lg">
          <TextField
            placeholder={SEARCHBAR_PLACEHOLDER}
            value={value}
            onChange={onChange}
            autoFocus
          />
        </form>
      </Modal>
    </>
  );
}

export default Search;
