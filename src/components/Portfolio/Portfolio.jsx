import React, { useState, useEffect, useRef } from "react";
import Cards from "./ProjectCards/ProjectCards";
import OldCards from "./ProjectCards/OldProjectCards";
import { Element } from "react-scroll";

import "./styles.scss";

// each project on a card
// seperate categories for Most recent and older projects
export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (isVisible && !count) {
      setCount(1);
    } else if (isVisible && count) {
      setAnimationTriggered(true);
    }
  }, [isVisible]);

  return (
    <Element name="portfolio">
      <section id="portfolio" ref={sectionRef}>
        <h3 className="portfolio-header">My Portfolio</h3>
        <h5
          className={
            isVisible && !animationTriggered
              ? "projects-header animated-from-right"
              : "projects-header"
          }
        >
          Most <span>Recent</span> Projects
        </h5>
        <div className="card-container">
          <Cards
            isVisible={isVisible}
            count={count}
            setCount={setCount}
            animationTriggered={animationTriggered}
            setAnimationTriggered={setAnimationTriggered}
          />
        </div>
        <h5
          className={
            isVisible && !animationTriggered
              ? "projects-header animated-from-right"
              : "projects-header"
          }
        >
          <span>Older</span> Projects
        </h5>
        <div className="card-container">
          <OldCards
            isVisible={isVisible}
            count={count}
            setCount={setCount}
            animationTriggered={animationTriggered}
            setAnimationTriggered={setAnimationTriggered}
          />
        </div>
      </section>
    </Element>
  );
}
