import {Description} from 'components/molecule';
import React from 'react';

export type ExploreDoorProps = {
  title: string;
  desc: string;
};

function ExploreDoor({title, desc}: ExploreDoorProps) {
  return <Description title={title} desc={desc} />;
}

export default ExploreDoor;
