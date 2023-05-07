// Import React and the avatar image
import React from 'react';
import avatar from '../assets/images/avatar.webp'

// Define an object for inline styles
const styles = {
  main: {
    background: '#D8D174',
    color: '#465775',
    fontSize: '2rem',
  },
  title: {
    fontSize: '2rem',
  },
  font: {
    background: '#F4D8CD',
    color: '#465775',
  },  
  accordionItem: {
    background: '#ADD8E6', // Example background color
  },
};

// Define the AboutMe component
const AboutMe = () => {
  return (
    <div>
      <section className="row" style={styles.main}>
        <section className="col-12">
          <h1 className="text-center" id="about">About Me</h1>
        </section>
      </section>

      <section className="row" style={styles.main}>
        <section className="col-12 d-flex justify-content-center align-items-center">
          <img src={avatar} className="rounded-circle" alt="avatar" />
        </section>
      </section>
      <section className="row" style={styles.main}>
        <section className="col-12 col-md-8 offset-md-2">
          <section className="accordion p-5 w-100" id="accordionExample">
            <section className="accordion-item" style={styles.accordionItem}>
              <h1 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <span style={styles.title}>Past</span>
                </button>
              </h1>
              <section id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <section className="accordion-body" style={styles.font}>
                  Greetings, and welcome to my portfolio website. My name is Chien-Cheng Chiu, though I prefer to be called Jason.
                  I obtained a master's degree in Applied Mathematics in 2022, and one of the highlights of my academic journey was utilizing
                  various programming languages to perform numerical computations and generate visualizations. This experience motivated me
                  to explore new programming languages and broaden my technical expertise. Outside of my professional pursuits, I enjoy hobbies
                  such as technology, origami, and tennis.
                </section>
              </section>
            </section>
            <section className="accordion-item" style={styles.accordionItem}>
              <h1 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <span style={styles.title}>Present</span>
                </button>
              </h1>
              <section id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <section className="accordion-body" style={styles.font}>
                  In my academic pursuits, I primarily utilized MatLab as my mathematical programming language of choice.
                  However, I have also gained proficiency in several other programming languages, including R, SQL, Python, and Java.
                  Additionally, I employ the use of LaTeX, a free resource tool, to draft documents and produce slides,
                  which requires a certain level of coding knowledge. While these tools share many similarities with what I have learned thus far,
                  I have encountered challenges with CSS. Nevertheless, I remain steadfast in my pursuit to realize the imaginative designs that I envision.
                  As evidenced by this website's design, I have a deep passion for researching and learning new methods that may be outside of my formal education.
                </section>
              </section>
            </section>
            <section className="accordion-item" style={styles.accordionItem}>
              <h1 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <span style={styles.title}>Future</span>
                </button>
              </h1>
              <section id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <section className="accordion-body" style={styles.font}>
                  In the initial three weeks of my certificate program to become a full-stack developer,
                  I received an introduction to utilizing Chrome Developer tools, with a particularly useful tool being Lighthouse.
                  Lighthouse performs an analysis of website performance across various dimensions, such as accessibility, best practices, and SEO.
                  Through this tool, I acquired knowledge that I had not previously been exposed to in my studies.
                  Additionally, I gained the ability to rescale images, thus enhancing webpage load efficiency.
                  This website is a testament to my current coding expertise and serves as a sample of my capabilities,
                  with future projects to further showcase my proficiency.
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

// Export the AboutMe component
export default AboutMe;