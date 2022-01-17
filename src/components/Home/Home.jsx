import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import "./styles.scss";

export default function Home() {
  return (
    <section id="home">
      <header>
        <ul className="home-header">
          <a href="#home">
            <li>Home</li>
          </a>
          <span>|</span>
          <a href="#about">
            <li>About</li>
          </a>
          <span>|</span>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <span>|</span>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <span>|</span>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <span>|</span>
          <a href="#" target="_blank">
            <li>Resume</li>
          </a>
        </ul>
      </header>
      <div className="content">
        <h1 className="intro">Hi, I'm Bryce Perez.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, necessitatibus doloremque at veniam aut asperiores,
          blanditiis quo cum a, et debitis nobis illum velit nam. Et totam
          eligendi placeat sit aspernatur deserunt eius minus, alias adipisci
          maxime nam? Dolor exercitationem cum a, id sit sunt enim architecto
          fugit nobis doloremque deserunt, ab sapiente dicta quidem. Recusandae
          quaerat voluptas velit ullam maxime! Beatae magnam asperiores in iusto
          atque amet distinctio voluptas velit, libero temporibus. Reiciendis
          omnis ut iste, quas accusantium labore ipsum nemo, deserunt
          perspiciatis unde excepturi praesentium fugit consectetur libero
          laboriosam nesciunt inventore illum perferendis non rem? Nesciunt,
          aperiam voluptates?
        </p>
        <div className="icons">
          <a href="https://github.com/Bperez4197" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="#">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="#">
            <EmailIcon fontSize="large" />
          </a>
        </div>
        <a href="#portfolio">
          <button id="projects-btn">
            Get straight to projects <EastRoundedIcon />
          </button>
        </a>
      </div>
    </section>
  );
}
