import {ABOUT_DOOR_DESC, ABOUT_DOOR_TITLE} from 'commons/constants/string';
import {Description} from 'components/molecule';
import React from 'react';

function AboutDoor() {
  return <Description title={ABOUT_DOOR_TITLE} desc={ABOUT_DOOR_DESC} />;
}

export default AboutDoor;
