import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anishagupta8057@gmail.com</h5>
            <a href="mailto:anishagupta8057@gmail.com">Send a message</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>https://bit.ly/3Pdfv4Y</h5>
            <a href="https://www.linkedin.com/in/anisha-gupta-752870245/">
              Send a message
            </a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <SiGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>https://github.com/Anishaagupta</h5>
            <a href="https://github.com/Anishaagupta">Checkout Repositories</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
