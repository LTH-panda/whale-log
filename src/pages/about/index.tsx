import server from 'api/server';
import {AboutCareer, AboutDoor} from 'components/templates/About';
import {GetStaticProps} from 'next';
import React from 'react';

function AboutPage({careers}: {careers: Career[]}) {
  return (
    <>
      <AboutDoor />
      <AboutCareer careerData={careers} />
    </>
  );
}

export default AboutPage;

export type Career = {
  id: number;
  attributes: {
    title: string;
    desc: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await server.get('/careers');
  const careers = res.data.data;

  return {
    props: {careers},
  };
};
