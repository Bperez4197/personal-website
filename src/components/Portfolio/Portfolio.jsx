import React, { useState, useEffect, useRef } from "react";
import Cards from "./ProjectCards/ProjectCards";
import OldCards from "./ProjectCards/OldProjectCards";
import { Element } from "react-scroll";

import "./styles.scss";

// each project on a card
// seperate categories for Most recent and older projects
export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const addVisibility = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(addVisibility, {});
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <Element name="portfolio">
      <section id="portfolio" ref={sectionRef}>
        <h3
          className={
            isVisible
              ? "portfolio-header animated-from-right"
              : "portfolio-header"
          }
        >
          Portfolio Section
        </h3>
        <h5
          className={
            isVisible
              ? "projects-header animated-from-right"
              : "projects-header"
          }
        >
          Most Recent Projects
        </h5>
        <div className="card-container">
          <Cards isVisible={isVisible} />
        </div>
        <h5
          className={
            isVisible
              ? "projects-header animated-from-right"
              : "projects-header"
          }
        >
          Older Projects
        </h5>
        <div className="card-container">
          <OldCards isVisible={isVisible} />
        </div>
      </section>
    </Element>
  );
}
