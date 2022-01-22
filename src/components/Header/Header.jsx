import React from "react";
import { Link } from "react-scroll";
import resume from "../../images/BrycePerez_Resume.pdf";

import "./styles.scss";

export default function Header({ isVisible }) {
  return (
    <header id={isVisible ? "active" : "sticky-nav"}>
      <ul className="home-header">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <li>Home</li>
        </Link>
        <span>|</span>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <li>About</li>
        </Link>
        <span>|</span>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <li>Skills</li>
        </Link>
        <span>|</span>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <li>Portfolio</li>
        </Link>
        <span>|</span>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <li>Contact</li>
        </Link>
        <span>|</span>
        <a href={resume} target="_blank" id="resume" id="resume">
          <li>Resume</li>
        </a>
      </ul>
    </header>
  );
}
