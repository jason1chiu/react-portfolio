// Import React, the Project component and image files
import React from 'react';
import Project from './Project';
import project1 from '../assets/images/4th-project.webp';
import project2 from '../assets/images/6th-project.webp';
import project3 from '../assets/images/12th-project.webp';
import project4 from '../assets/images/8th-project.webp';

// Define some styles for the section
const styles = {
  background: '#D8D174',
  color: '#465775',
  fontSize: '2rem'
}

// Define an array of individual projects with their details
const individualProjects = [
  {
    imageUrl: project1,
    href: 'https://jason1chiu.github.io/javascript-quiz/',
    buttonText: 'App: Math Quiz',
    githubLink: 'https://github.com/jason1chiu/javascript-quiz',
  },
  {
    imageUrl: project2,
    href: 'https://jason1chiu.github.io/weather-dashboard/',
    buttonText: 'App: Weather Dashboard',
    githubLink: 'https://github.com/jason1chiu/weather-dashboard',
  },
  {
    imageUrl: project3,
    href: 'https://still-lake-39330.herokuapp.com',
    buttonText: 'Note Taker',
    githubLink: 'https://github.com/jason1chiu/note-taker',
  },
  {
    imageUrl: project4,
    href: 'https://jason1chiu.github.io/password-generator/',
    buttonText: 'App: Password Generator',
    githubLink: 'https://github.com/jason1chiu/password-generator',
  },
];

const IndividualProject = () => {
  return (
    <div>
      <section className="row p-3" style={styles}>
        <section className="col-12">
          <h1 className="text-center" id="individualProjects">
            Individual Projects
          </h1>
        </section>
      </section>

      <section className="row m-auto" style={styles}>
        {individualProjects.map((project, index) => {
          return (
            <section key={project.title} className="col-12 col-md-6 my-3">
              <Project
                imageUrl={project.imageUrl}
                href={project.href}
                buttonText={project.buttonText}
                githubLink={project.githubLink}
              />
            </section>
          );
        })}
      </section>
    </div>
  );
};

// Export the IndividualProject component as the default export of this module
export default IndividualProject;