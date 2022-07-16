import {categoryCurrent, categoryVisible} from 'coils/category';
import {useRecoilState, useSetRecoilState} from 'recoil';

const useCategory = () => {
  const [isCategoryVisible, setIsCategoryVisible] =
    useRecoilState(categoryVisible);
  // const [current, setCurrent] = useSetRecoilState(categoryCurrent);

  const openCategory = () => setIsCategoryVisible(true);
  const closeCategory = () => setIsCategoryVisible(false);

  return {isCategoryVisible, openCategory, closeCategory};
};

export default useCategory;
