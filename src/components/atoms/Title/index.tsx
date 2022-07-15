import React from 'react';

export type TitleProps = {
  title: string;
};

function Title({title}: TitleProps) {
  return <h1 className="text-6xl font-suitHeavy">{title}</h1>;
}

export default Title;
