import {Cell} from 'components/atoms';
import {Career} from 'pages/about';
import React from 'react';

export type AboutCareerProps = {
  careerData: Career[];
};

function AboutCareer({careerData}: AboutCareerProps) {
  return (
    <div className="flex flex-col gap-4 py-8 border-blue-500 border-solid border-y-2">
      {careerData &&
        careerData.map(C => (
          <Cell
            title={C.attributes.title}
            desc={C.attributes.desc}
            key={C.id}
          />
        ))}
    </div>
  );
}

export default AboutCareer;
