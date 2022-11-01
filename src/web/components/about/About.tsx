import React, { ReactElement } from "react";

export const About = (): ReactElement => {
  return (
    <div className="container-fluid p-0">
      {/* <!-- About--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            VISHNU
            <span className="text-primary"> M D</span>
          </h1>
          <div className="subheading mb-5">
            120 Malayamchath House · Palakkad, Kerala, Pin - 679536 · (+91)
            9605774685 ·
            <a href="mailto:name@email.com">VISHNUDIVAKARAN1@GMAIL.COM</a>
          </div>
          <p className="lead mb-5">
            Results-driven Software Developer with 1+ years of experience in
            Front End Web Development. Motivated to devise forward-thinking
            solutions to meet current and future needs. Demonstrated excellent
            skills in HTML, CSS, JavaScript, React JS and a basic knowledge in
            Python Programming language. True team player with strengths in
            adaptability and accuracy.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/vishnu-m-d-99a92292/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/vishnumd91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/vishnumd2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/vishnu.divakaran.18/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
