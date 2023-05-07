// Import React and fortawesome icons
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Define some styles for the section, link, and icon
const styles = {
  section: {
    background: '#D8D174',
    color: '#465775',
  },
  link: {
    color: '#465775',
    fontSize: '2rem',
    textDecoration: 'none'
  },
  icon: {
    fontSize: '2.5rem',
  },
};

// Define the Footer component
const Footer = () => {
  // Render the footer section with three social media links
  return (
    <section className="col-12" style={styles.section}>
      <nav className="navbar">
        <section className="container-fluid justify-content-center align-items-center btn-group">
          <button type="button" className="btn btn-link">
            <a href="https://www.facebook.com/jasonchiu1991/" target="_blank" rel="noreferrer" className="social-icon social-icon--facebook">
              <FontAwesomeIcon icon={faFacebook} style={{ ...styles.link, ...styles.icon }} />
              <section>
                <span style={styles.link}>Facebook</span>
              </section>
            </a>
          </button>
          <button type="button" className="btn btn-link">
            <a href="https://github.com/jason1chiu/" target="_blank" rel="noreferrer" className="social-icon social-icon--github">
              <FontAwesomeIcon icon={faGithub} style={{ ...styles.link, ...styles.icon }} />
              <section>
                <span style={styles.link}>Github</span>
              </section>
            </a>
          </button>
          <button type="button" className="btn btn-link">
            <a href="https://www.linkedin.com/in/chien-cheng-chiu-0a0930257/" target="_blank" rel="noreferrer" className="social-icon social-icon--linkedin">
              <FontAwesomeIcon icon={faLinkedin} style={{ ...styles.link, ...styles.icon }} />
              <section>
                <span style={styles.link}>LinkedIn</span>
              </section>
            </a>
          </button>
        </section>
      </nav>
    </section>
  );
};

// Export the Footer component as the default export of this module
export default Footer;