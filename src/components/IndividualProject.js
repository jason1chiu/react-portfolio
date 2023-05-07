import React from 'react';
import Project from './Project';
import project1 from '../assets/images/4th-project.webp';
import project2 from '../assets/images/6th-project.webp';
import project3 from '../assets/images/12th-project.webp';
import project4 from '../assets/images/8th-project.webp';

const individualProjects = [
  {
    title: 'Math Quiz',
    imageUrl: project1,
    description:
      "During a code quiz, clicking the start button should trigger a timer and display the first question, and subsequent questions should follow once each is answered, with an incorrect answer resulting in a deduction of time from the timer, ending the game when all questions are answered or the timer reaches 0, with the opportunity to save one's initials and score.",
    href: 'https://jason1chiu.github.io/javascript-quiz/',
    buttonText: 'Math Quiz',
  },
  {
    title: 'Weather Dashboard',
    imageUrl: project2,
    description:
      "A weather dashboard featuring form inputs should provide current and future weather conditions for any searched city, and store the city in the search history, with current weather displaying the city name, date, weather icon, temperature, humidity, and wind speed, and future weather displaying a 5-day forecast of the date, weather icon, temperature, wind speed, and humidity, and a selected city from the search history should display its current and future weather conditions.",
    href: 'https://jason1chiu.github.io/weather-dashboard/',
    buttonText: 'Weather Dashboard',
  },
  {
    title: 'Tech Blog',
    imageUrl: project3,
    description:
      "Upon visiting a CMS-style blog site, the user is presented with a homepage containing existing blog posts and navigation links for the homepage and dashboard, and given the option to log in or sign up, whereupon they can create a username and password and be logged in, after which they can view existing blog posts and leave comments, add or update their own blog posts in the dashboard, delete or update their posts, and log out; if the user is idle for a set time they will need to log in again before they can add, update, or delete comments.",
    href: 'https://aqueous-tundra-56406.herokuapp.com',
    buttonText: 'Tech Blog',
  },
  {
    title: 'Team Profile Generator',
    imageUrl: project4,
    description:
      "A command-line application that prompts the user for team member information should generate a well-formatted team roster HTML file, with clickable email addresses opening the user's default email program, and clickable GitHub usernames opening the user's browser to the corresponding profile, and prompts the user for the team manager's name, employee ID, email address, and office number upon startup, with a menu for adding engineers or interns, and taking the user back to the menu after each entry, and exiting the application and generating the HTML file when the user finishes building their team.",
    href: 'https://github.com/jason1chiu/Team-Profile-Generator',
    buttonText: 'Team Profile Generator',
  },
];

const IndividualProject = () => {
  return (
    <div>
      <section className="row">
        <section className="col-12">
          <h2 className="text-center" id="individualProjects">
            Individual Projects
          </h2>
        </section>
      </section>

      <section className="row m-auto">
        {individualProjects.map((project, index) => {
          return (
            <section key={project.title} className="col-12 col-md-6 mb-3">
              <Project
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
                href={project.href}
                buttonText={project.buttonText}
              />
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default IndividualProject;