// Import React and the pdf file
import React from 'react';
import resume from '../assets/links/resume.pdf';

// Define some styles
const styles = {
  section: {
    background: '#D8D174',
    color: '#465775',
  },
  link: {
    textDecoration: 'none',
    fontSize: '2.5rem',
  },
  proficiency: {
    background: '#F4D8CD',
    color: '#465775',
    fontSize: '1.5rem',
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  button: {
    background: '#6C757D',
  },
  buttonText:{
    color: "#FFF4E9"
  }
};

// Define a Resume component that renders proficiencies and a resume
const Resume = () => {
  const proficiencies = [
    'HTML, CSS, and Git',
    'Advanced CSS',
    'JavaScript',
    'Web APIs',
    'Third-Party APIs',
    'Server-Side APIs',
    'Node.js',
    'Object-Oriented Programming (OOP)',
    'Express.js',
    'SQL',
    'Object-Relational Mapping (ORM)',
    'Model-View-Controller (MVC)',
    'Computer Science for JavaScript',
    'NoSQL',
    'Progressive Web Applications (PWA)',
    'React',
    'MERN',
    'State',
  ];

  return (
    <section className="resume-section py-5" style={styles.section}>
      <h1 className="text-center mb-4" id="resume">
        Resume
      </h1>
      <div className="text-center mb-4 mx-2">
      <button type="button" className="btn" style={styles.button}>
          <a style={styles.link} href={resume} download>
            <span style={styles.buttonText}>Download Resume</span>
          </a>
        </button>
      </div>
      <div className="row" style={styles.section}>
        <div className="col-12">
          <h2 className="text-center mb-3">Proficiencies</h2>
          <div className="d-flex justify-content-center">
            <ul className="list-group text-center">
              {proficiencies.map((proficiency, index) => (
                <li key={index} className="list-group-item" style={styles.proficiency}>
                  {proficiency}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the Resume component as the default export of this module
export default Resume;