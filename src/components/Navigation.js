import React from 'react';
import { Link } from 'react-router-dom';
import thesis from '../assets/links/Chiu_Thesis.pdf';

const linkStyles = {
  color: '#465775',
  fontSize: '2rem',
};


const Navigation = () => {
  // define the link style object
  return (
    <nav className="navbar">
      <section className="container-fluid btn-group justify-content-center align-items-center">
        <button type="button" className="btn btn-light btn-link text-decoration-none">
          <Link to="/" style={linkStyles}>
            About
          </Link>
        </button>
        <button type="button" className="btn btn-light btn-link text-decoration-none">
          <Link to="/portfolio" style={linkStyles}>
            Portfolio
          </Link>
        </button>
        <button type="button" className="btn btn-light btn-link text-decoration-none">
          <Link to="/contact" style={linkStyles}>
            Contact
          </Link>
        </button>
        <button type="button" className="btn btn-light btn-link text-decoration-none">
          <Link to="/resume" style={linkStyles}>
            Resume
          </Link>
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