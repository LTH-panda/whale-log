import {atom} from 'recoil';

export const categoryVisible = atom<boolean>({
  key: 'categoryVisible',
  default: false,
});
