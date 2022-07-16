import {atom} from 'recoil';

export const categoryVisible = atom<boolean>({
  key: 'categoryVisible',
  default: false,
});
export const categoryCurrent = atom({
  key: 'categoryCurrent',
  default: 'ALL',
});
