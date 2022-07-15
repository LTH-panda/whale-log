import {atom} from 'recoil';

export const searchVisible = atom<boolean>({
  key: 'searchVisible',
  default: false,
});

export const searchValue = atom<string>({
  key: 'searchValue',
  default: '',
});
