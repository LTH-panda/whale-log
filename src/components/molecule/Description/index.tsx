import {Title} from 'components/atoms';
import React from 'react';

export type DescriptionProps = {
  title: string;
  desc: string;
};

function Description({title, desc}: DescriptionProps) {
  return (
    <div className="flex flex-col gap-8">
      <Title title={title} />
      <div>{desc}</div>
    </div>
  );
}

export default Description;
