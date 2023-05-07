import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const styles = {
  section: {
    background: '#D8D174',
    color: '#465775',
  },
  link: {
    color: '#465775',
    fontSize: '2rem',
  },
  icon: {
    fontSize: '2.5rem',
  },
};

const Footer = () => {
  return (
    <section className="col-12" style={styles.section}>
      <nav className="navbar">
        <section className="container-fluid justify-content-center align-items-center btn-group">
          <button type="button" className="btn btn-light btn-link">
            <a href="#contact" className="social-icon social-icon--phone" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This top tooltip is themed via CSS variables.">
            <FontAwesomeIcon icon={faPhone} style={{ ...styles.link, ...styles.icon }} />
              <section>
              <span style={styles.link}>Phone</span>
              </section>
            </a>
          </button>
          <button type="button" className="btn btn-light btn-link">
            <a href="https://www.facebook.com/jasonchiu1991/" target="_blank" rel="noreferrer" className="social-icon social-icon--facebook">
              <FontAwesomeIcon icon={faFacebook} style={{ ...styles.link, ...styles.icon }} />
              <section>
                <span style={styles.link}>Facebook</span>
              </section>
            </a>
          </button>
          <button type="button" className="btn btn-light btn-link">
            <a href="https://github.com/jason1chiu/" target="_blank" rel="noreferrer" className="social-icon social-icon--github">
              <FontAwesomeIcon icon={faGithub} style={{ ...styles.link, ...styles.icon }} />
              <section>
                <span style={styles.link}>Github</span>
              </section>
            </a>
          </button>
          <button type="button" className="btn btn-light btn-link">
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

export default Footer;