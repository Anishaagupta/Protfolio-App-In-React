import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpeg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                <span style={{ fontSize: "20px" }}>2+</span> years
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                <span style={{ fontSize: "20px" }}>10+</span> Completed Toy
                Projects
              </small>
              <br />
              <small>
                <span style={{ fontSize: "20px" }}>5+</span> Completed Industry
                Ready Projects
              </small>
            </article>
          </div>
          <p>
            I’ve spent the last several months in a remote environment, working
            with HTML, CSS, JavaScript, React building everything from landing
            pages to deployment. My experience as a Front End Engineer in a
            private startup helped me collaborate with fellow developers from
            all over the country. Working in startups have helped me becoming
            efficient, productive, and fast even in a very stressful
            environment, which is an important skill in the tech industry.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
