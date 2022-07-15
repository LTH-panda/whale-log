import {categoryVisible} from 'coils/category';
import {useRecoilState} from 'recoil';

const useCategory = () => {
  const [isCategoryVisible, setIsCategoryVisible] =
    useRecoilState(categoryVisible);

  const openCategory = () => setIsCategoryVisible(true);
  const closeCategory = () => setIsCategoryVisible(false);

  return {isCategoryVisible, openCategory, closeCategory};
};

export default useCategory;
