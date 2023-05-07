// Import React and the Navigation component
import React from 'react';
import Navigation from './Navigation';

// Define some styles for the section and heading
const styles = {
  section: {
    background: '#D8D174',
    color: '#465775',
    fontSize: '2rem',
  },
  heading: {
    fontSize: '2.5rem',
  },
};

// Define the Header component
const Header = ({ handlePageChange }) => {
  // Render a section with the website title and navigation links
  return (
    <section className="row" style={styles.section}>
      <section className="col-12">
        <h1 className="text-center mt-3 p-1" style={styles.heading}>Jason Chiu</h1>
      </section>
      <section className="col-12 mb-3">
        <Navigation handlePageChange={handlePageChange} />
      </section>
    </section>
  );
};

// Export the Header component as the default export of this module
export default Header;