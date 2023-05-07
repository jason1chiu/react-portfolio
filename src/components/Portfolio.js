// Import React, the IndividualProject component and the GroupProject component
import React from 'react';
import IndividualProject from './IndividualProject';
import GroupProject from './GroupProject';

// Define a Portfolio component that renders individual and group projects
const Portfolio = () => {
  return (
    <div>
      <IndividualProject />
      <GroupProject />
    </div>
  );
};

// Export the Portfolio component as the default export of this module
export default Portfolio;