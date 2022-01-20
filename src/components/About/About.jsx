import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";

import "./styles.scss";

export default function About() {
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
    <Element name="about">
      <section id="about" ref={sectionRef}>
        <div
          className={
            isVisible && !animationTriggered
              ? " about-img animated-from-left"
              : "about-img"
          }
        >
          <img src={require("../../images/aboutPic.jfif")} alt="Code editor" />
        </div>
        <div
          className={
            isVisible && !animationTriggered
              ? " about-content animated-from-right"
              : "about-content"
          }
        >
          <h3 id="about-title">
            A bit <span>about</span> me
          </h3>
          <div id="about-msg">
            <p>
              I'm Bryce Perez, a curiousity driven, passionate learner who loves
              to build software. I've been coding for about two years while
              attending Estrella Mountain Community College, which I have my
              Associate of Applied Sciene in Web Development from.
            </p>
            <p>
              I have strong foundational skills that some developers overlook
              like understanding the basics of networking, http, javscript
              engines, project architecture, OOP, reading documentation, and how
              the internet works. I have become very adept at solving problems
              with documentation and doing web research when I run into
              roadblocks. I am always looking to work hard, learn new things,
              and have growing ambition for my career.
            </p>
            <p>
              Outside of development I enjoy practicing Brazilian Jiu-Jitsu,
              exercising, being outdoors, reading, playing video games, and
              spending time with friends and family. I am constantly interested
              in new things and spend weeks learning about a topic when it has
              caught my attention. I am hoping my traits and skills can add
              value to a company I can grow with. Check out my work!
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}
