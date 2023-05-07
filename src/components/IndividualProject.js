import React from 'react';
import Project from './Project';
import project1 from '../assets/images/4th-project.webp';
import project2 from '../assets/images/6th-project.webp';
import project3 from '../assets/images/12th-project.webp';
import project4 from '../assets/images/8th-project.webp';

const styles = {
  background: '#D8D174',
  color: '#465775',
  fontSize: '2rem'
}

const individualProjects = [
  {
    title: 'Math Quiz',
    imageUrl: project1,
    description:
      "During a code quiz, clicking the start button should trigger a timer and display the first question, and subsequent questions should follow once each is answered, with an incorrect answer resulting in a deduction of time from the timer, ending the game when all questions are answered or the timer reaches 0, with the opportunity to save one's initials and score.",
    href: 'https://jason1chiu.github.io/javascript-quiz/',
    buttonText: 'Math Quiz',
    githubLink: 'https://github.com/jason1chiu/javascript-quiz',
  },
  {
    title: 'Weather Dashboard',
    imageUrl: project2,
    description:
      "A weather dashboard featuring form inputs should provide current and future weather conditions for any searched city, and store the city in the search history, with current weather displaying the city name, date, weather icon, temperature, humidity, and wind speed, and future weather displaying a 5-day forecast of the date, weather icon, temperature, wind speed, and humidity, and a selected city from the search history should display its current and future weather conditions.",
    href: 'https://jason1chiu.github.io/weather-dashboard/',
    buttonText: 'Weather Dashboard',
    githubLink: 'https://github.com/jason1chiu/weather-dashboard',
  },
  {
    title: 'Note Taker',
    imageUrl: project3,
    description:
      "Upon opening the Note Taker application, a landing page with a link to a notes page is presented, where clicking on the link displays a page with existing notes listed in the left-hand column, and empty fields to enter a new note title and text in the right-hand column; after entering the new note title and text, a Save icon appears in the navigation at the top of the page, clicking on which saves the new note and displays it in the left-hand column with other existing notes, and clicking on an existing note in the list displays it in the right-hand column; moreover, clicking on the Write icon in the navigation at the top of the page presents the user with empty fields to enter a new note title and text in the right-hand column.",
    href: 'https://still-lake-39330.herokuapp.com',
    buttonText: 'Note Taker',
    githubLink: 'https://github.com/jason1chiu/note-taker',
  },
  {
    title: 'Password Generator',
    imageUrl: project4,
    description:
      "To obtain a secure new password, a system should provide a button that generates one and prompts the user to select password criteria, specify a length between 8 and 128 characters, and confirm which character types to include, with validation of the user's input, the selection of at least one character type, and the system's generation of a password that meets the criteria, which should be displayed in an alert or on the page.",
    href: 'https://jason1chiu.github.io/password-generator/',
    buttonText: 'Password Generator',
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

export default IndividualProject;