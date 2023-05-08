// Import React, the Project component, and image files
import React from 'react';
import Project from './Project';
import project1 from '../assets/images/19th-project.webp';
import project2 from '../assets/images/20th-project.webp';

// Define some styles for the section
const styles = {
  background: '#D8D174',
  color: '#465775',
  fontSize: '2rem'
};

// Define an array of group projects with their details
const groupProjects = [
  {
    imageUrl: project1,
    href: 'https://ashketchumandpikachu.github.io/PokemonBattle/',
    buttonText: 'App: Pokemon Counter Generator',
    githubLink: 'https://github.com/AshKetchumAndPikachu/PokemonBattle'
  },
  {
    imageUrl: project2,
    href: 'https://the-nomad-nebula.herokuapp.com',
    buttonText: 'App: Nomad Nebula',
    githubLink: 'https://github.com/utgroup3/Nomad-Nebula' 
  },
];

// Define the GroupProject component
const GroupProject = () => {
  // Render a section with the titles of the group projects and their details
  return (
    <div>
      <section className="row" style={styles}>
        <section className="col-12">
          <h1 className="text-center" id="groupProjects">
            Group Projects
          </h1>
        </section>
      </section>

      <section className="row m-auto" style={styles}>
        {groupProjects.map((project, index) => {
          return (
            <section key={project.title} className="col-12 col-md-6 mb-3">
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

// Export the GroupProject component as the default export of this module
export default GroupProject;