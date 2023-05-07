import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar">
      <section className="container-fluid btn-group justify-content-center align-items-center">
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href="#about">
            About
          </a>
        </button>
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href="#individualProjects">
            Individual Projects
          </a>
        </button>
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href="#groupProjects">
            Group Projects
          </a>
        </button>
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href="#contact">
            Contact
          </a>
        </button>
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href="../assets/links/Resume.pdf">
            Resume
          </a>
        </button>
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href="./assets/links/Master's Thesis.pdf">
            Thesis
          </a>
        </button>
      </section>
    </nav>
  );
};

export default Navigation;