/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export type ModalProps = {
  isVisible: boolean;
  onClickBackDrop: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
};

function Modal({isVisible, onClickBackDrop, children}: ModalProps) {
  return (
    <>
      <div
        onClick={onClickBackDrop}
        className={`${
          !isVisible && 'hidden'
        } absolute inset-0 bg-gray-500 opacity-70 z-10`}
      />
      <div
        className={`${
          !isVisible && 'hidden -translate-y-3/4'
        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 flex justify-center items-center transition-transform`}>
        {children}
      </div>
    </>
  );
}

export default Modal;
