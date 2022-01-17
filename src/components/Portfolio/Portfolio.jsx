import React from "react";
import Cards from "./ProjectCards/ProjectCards";
import OldCards from "./ProjectCards/OldProjectCards";
import { Element } from "react-scroll";

import "./styles.scss";

// each project on a card
// seperate categories for Most recent and older projects
export default function Portfolio() {
  return (
    <Element name="portfolio">
      <section id="portfolio">
        <h3 className="portfolio-header">Portfolio Section</h3>
        <h5 className="projects-header">Most Recent Projects</h5>
        <div className="card-container">
          <Cards />
        </div>
        <h5 className="projects-header">Older Projects</h5>
        <div className="card-container">
          <OldCards />
        </div>
      </section>
    </Element>
  );
}
