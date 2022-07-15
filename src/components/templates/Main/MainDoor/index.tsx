import {MAIN_DOOR_DESC, MAIN_DOOR_TITLE} from 'commons/constants/string';
import {Description} from 'components/molecule';
import React from 'react';

function MainDoor() {
  return <Description title={MAIN_DOOR_TITLE} desc={MAIN_DOOR_DESC} />;
}

export default MainDoor;
