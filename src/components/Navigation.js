// Import React and the pdf file
import React from 'react';
import thesis from '../assets/links/Chiu_Thesis.pdf';

// Define some styles
const linkStyles = {
  color: '#465775',
  fontSize: '2rem',
  textDecoration: 'none',
};

// Define a navigation component with buttons for each section and a link to a thesis
const Navigation = ({ handlePageChange }) => {
  return (
    <nav className="navbar">
      <section className="container-fluid btn-group justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-light btn-link text-decoration-none"
          onClick={() => handlePageChange('AboutMe')}
          style={linkStyles}
        >
          About
        </button>
        <button
          type="button"
          className="btn btn-link text-decoration-none"
          onClick={() => handlePageChange('Portfolio')}
          style={linkStyles}
        >
          Portfolio
        </button>
        <button
          type="button"
          className="btn btn-link text-decoration-none"
          onClick={() => handlePageChange('Contact')}
          style={linkStyles}
        >
          Contact
        </button>
        <button
          type="button"
          className="btn btn-link text-decoration-none"
          onClick={() => handlePageChange('Resume')}
          style={linkStyles}
        >
          Resume
        </button>
        <button type="button" className="btn btn-link text-decoration-none">
          <a href={thesis} target="_blank" rel="noreferrer" style={linkStyles}>
            Thesis
          </a>
        </button>
      </section>
    </nav>
  );
};

// Export the Navigation component as the default export of this module
export default Navigation;