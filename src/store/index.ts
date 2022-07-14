import {configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import reducer, {RootState} from './rootReducer';

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
