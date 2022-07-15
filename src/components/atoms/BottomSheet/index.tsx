/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export type BottomSheetProps = {
  isVisible: boolean;
  onClickBackDrop: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
};

function BottomSheet({isVisible, onClickBackDrop, children}: BottomSheetProps) {
  return (
    <>
      <div
        onClick={onClickBackDrop}
        className={`${
          !isVisible && 'invisible'
        } absolute inset-0 bg-gray-500 opacity-70 z-10`}
      />
      <div
        className={`${
          !isVisible && 'invisible'
        } absolute bottom-0 z-20 inset-x-0 flex justify-center items-center`}>
        {children}
      </div>
    </>
  );
}

export default BottomSheet;
