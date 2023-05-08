import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const styles = {
  card: {
    background: '#F4D8CD',
    color: '#465775',
    position: 'relative',
  },
  hoverContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  imgHover: {
    opacity: 1,
    transition: 'opacity 0.3s',
  },
  button: {
    background: '#6C757D',
    color: '#FFFFFF',
    fontSize: '2rem',
  },
  title: {
    fontSize: '2rem',
  },
  buttonText: {
    color: '#FFF4E9',
  },
};

const Project = ({ title, imageUrl, href, buttonText, githubLink }) => {
  return (
    <div
      className="card h-100"
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.hover-content').style.opacity = 1;
        e.currentTarget.querySelector('.card-img-top').style.opacity = 0.2;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.hover-content').style.opacity = 0;
        e.currentTarget.querySelector('.card-img-top').style.opacity = 1;
      }}
    >
      <img src={imageUrl} className="card-img-top" alt={title} style={styles.imgHover} />
      <div className="hover-content" style={styles.hoverContent}>
        <h4 className="card-title" style={styles.title}>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
        </h4>
        <a
          href={href}
          className="btn"
          style={styles.button}
          target="_blank"
          rel="noreferrer"
        >
          <span style={styles.buttonText}>{buttonText}</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
