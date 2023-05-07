import React from 'react';

const Project = ({ title, imageUrl, description, href, buttonText }) => {
  return (
    <div className="card my-3">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Project;