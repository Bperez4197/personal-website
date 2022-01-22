import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Link, Element } from "react-scroll";
import MobileHeader from "../Header/Mobile Header/MobileHeader";

import "./styles.scss";

export default function Home() {
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
    <section id="home" ref={sectionRef}>
      {window.innerWidth < 1020 ? (
        <MobileHeader />
      ) : (
        <Header isVisible={isVisible} />
      )}
      <Element name="home">
        <div className="content">
          <h1 className="intro">Hi, I'm Bryce Perez.</h1>
          <h6>full stack developer speciaizing in the front end</h6>
          <p>
            Driven by curiousity and a love for learning, based in Glendale, AZ
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
        </div>
      </Element>
    </section>
  );
}
