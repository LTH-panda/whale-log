import {categoryCurrent, categoryVisible} from 'coils/category';
import {useRecoilState, useResetRecoilState} from 'recoil';

const useCategory = () => {
  const [isCategoryVisible, setIsCategoryVisible] =
    useRecoilState(categoryVisible);
  const [current, setCurrent] = useRecoilState(categoryCurrent);

  const openCategory = () => setIsCategoryVisible(true);
  const closeCategory = () => setIsCategoryVisible(false);
  const setCategory = (category: string) => setCurrent(category);
  const resetCategory = useResetRecoilState(categoryCurrent);

  return {
    isCategoryVisible,
    categoryCurrent: current,
    openCategory,
    closeCategory,
    setCategory,
    resetCategory,
  };
};

export default useCategory;
