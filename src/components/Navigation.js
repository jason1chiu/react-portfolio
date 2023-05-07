import React from 'react';
import thesis from '../assets/links/Chiu_Thesis.pdf';

const linkStyles = {
  color: '#465775',
  fontSize: '2rem',
  textDecoration: 'none',
};

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
          className="btn btn-light btn-link text-decoration-none"
          onClick={() => handlePageChange('Portfolio')}
          style={linkStyles}
        >
          Portfolio
        </button>
        <button
          type="button"
          className="btn btn-light btn-link text-decoration-none"
          onClick={() => handlePageChange('Contact')}
          style={linkStyles}
        >
          Contact
        </button>
        <button
          type="button"
          className="btn btn-light btn-link text-decoration-none"
          onClick={() => handlePageChange('Resume')}
          style={linkStyles}
        >
          Resume
        </button>
        <button type="button" className="btn btn-light btn-link text-decoration-none">
          <a href={thesis} target="_blank" rel="noreferrer" style={linkStyles}>
            Thesis
          </a>
        </button>
      </section>
    </nav>
  );
};

export default Navigation;