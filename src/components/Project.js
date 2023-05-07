import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const styles = {
  card: {
    background: '#F4D8CD',
    color: '#465775',
  },
  button: {
    background: '#6C757D', // Custom button background color
    color: '#FFFFFF', // Custom button text color
    fontSize: '2rem',
  },
  title: {
    fontSize: '2rem',
  },
};

const Project = ({ title, imageUrl, description, href, buttonText, githubLink }) => {
  return (
    <div className="card h-100" style={styles.card}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h4 className="card-title" style={styles.title}>
          {title}{' '}
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <a href={href} className="btn" style={styles.button} target="_blank" rel="noreferrer">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Project;