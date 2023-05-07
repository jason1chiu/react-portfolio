import React from 'react';
import Navigation from './Navigation';

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

const Header = ({ handlePageChange }) => {
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

export default Header;