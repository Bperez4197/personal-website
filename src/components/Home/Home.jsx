import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Link, Element } from "react-scroll";

import "./styles.scss";

export default function Home() {
  return (
    <section id="home">
      <header>
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
          <a href="#" target="_blank" id="resume" id="resume">
            <li>Resume</li>
          </a>
        </ul>
      </header>
      <Element name="home">
        <div className="content">
          <h1 className="intro">Hi, I'm Bryce Perez.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, necessitatibus doloremque at veniam aut asperiores,
            blanditiis quo cum a, et debitis nobis illum velit nam. Et totam
            eligendi placeat sit aspernatur deserunt eius minus, alias adipisci
            maxime nam? Dolor exercitationem cum a, id sit sunt enim architecto
            fugit nobis doloremque deserunt, ab sapiente dicta quidem.
            Recusandae quaerat voluptas velit ullam maxime! Beatae magnam
            asperiores in iusto atque amet distinctio voluptas velit, libero
            temporibus. Reiciendis omnis ut iste, quas accusantium labore ipsum
            nemo, deserunt perspiciatis unde excepturi praesentium fugit
            consectetur libero laboriosam nesciunt inventore illum perferendis
            non rem? Nesciunt, aperiam voluptates?
          </p>
          <div className="icons">
            <a href="https://github.com/Bperez4197" target="_blank">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="#">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="mailto:perez.bryce31@gmail.com">
              <EmailIcon fontSize="large" />
            </a>
          </div>
          <a href="#portfolio">
            <Link
              to="portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <button id="projects-btn">
                Get straight to projects{" "}
                <span>
                  <EastRoundedIcon />
                </span>
              </button>
            </Link>
          </a>
        </div>
      </Element>
    </section>
  );
}
