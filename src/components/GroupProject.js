import React from 'react';
import Project from './Project';
import project1 from '../assets/images/19th-project.webp';
import project2 from '../assets/images/20th-project.webp';

const styles = {
  background: '#D8D174',
  color: '#465775',
  fontSize: '2rem'
};

const groupProjects = [
  {
    title: 'Pokemon Counter Generator',
    imageUrl: project1,
    description:
      "The Pokemon Counter Generator is a tool that allows users to search for a Pokemon, view its name, type, weaknesses, adversaries, and a related video, and store previous searches for reference with a history button.",
    href: 'https://ashketchumandpikachu.github.io/PokemonBattle/',
    buttonText: 'Pokemon Counter Generator',
    githubLink: 'https://github.com/AshKetchumAndPikachu/PokemonBattle'
  },
  {
    title: 'Nomad Nebula',
    imageUrl: project2,
    description:
      "Nomad Nebula is a comprehensive web-based tool that enables stargazers to explore the celestial realm and connect with other enthusiasts through its interactive platform, featuring a myriad of features including daily updates on stargazing conditions, profile management, community engagement, and zodiac sign information.",
    href: 'https://the-nomad-nebula.herokuapp.com',
    buttonText: 'Nomad Nebula',
    githubLink: 'https://github.com/utgroup3/Nomad-Nebula' 
  },
];

const GroupProject = () => {
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
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
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

export default GroupProject;