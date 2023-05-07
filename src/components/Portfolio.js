// Portfolio.js
import React from 'react';
import AboutMe from './AboutMe';
import IndividualProject from './IndividualProject';
import GroupProject from './GroupProject';

const Portfolio = () => {
  return (
    <div>
      <AboutMe />
      <IndividualProject />
      {/* <GroupProject /> */}
    </div>
  );
};

export default Portfolio;