import React, { useState, useEffect } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./styles.scss";

// image, title, description, github and live links
//use modals. short desc, small img, no technologies listed for small version
// Links are larger
export default function ProjectCard({
  isVisible,
  animationTriggered,
  setAnimationTriggered,
  count,
  setCount,
}) {
  const [index, setIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (i) => {
    setIsOpen(true);
    setIndex(i);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isVisible && !count) {
      setCount(1);
    } else if (isVisible && count) {
      setAnimationTriggered(true);
    }
  }, [isVisible]);

  return (
    <div
      id="project-cards"
      className={isVisible && !animationTriggered ? "animated-from-left" : ""}
    >
      <div className="card" onClick={() => openModal(0)}>
        <img
          src={require("../../../images/memeProjPic.PNG")}
          alt="Code editor"
        />
        <div className="card-content">
          <h3>Title:</h3>
          <p>Make A Meme</p>
          <h4>Description:</h4>
          <p>
            This is a Fullstack CRUD application for creating memes. I utilized
            several tools including React/Redux on the frontend and
            express/node.js on the backend. The architecture follows the MVC
            guidelines and the Apis are RESTful.
          </p>
        </div>
      </div>
      <div className="card" onClick={() => openModal(1)}>
        <img
          src={require("../../../images/portfolioProjPic.PNG")}
          alt="Code editor"
        />
        <div className="card-content">
          <h3>Title:</h3>
          <p>Personal Website</p>
          <h4>Description:</h4>
          <p>
            This is a Frontend website to display my work and explain a bit
            about myself! I utilized a few different frontend technologies and
            tried to style/animate in a somewhat attractive way.{" "}
          </p>
        </div>
      </div>
      <div className="card" id="coming-soon">
        <img
          src={require("../../../images/comingSoon.jfif")}
          alt="Code editor"
          style={{ marginBottom: "5vh", marginTop: "3vh" }}
        />
        <div className="card-content">
          <h3>Title:</h3>
          <p>Fullstack Workout Tracker</p>
          <h4>Description:</h4>
          <p>
            <span>Coming Soon!</span> <br />
            This is a Fullstack application that utilizes a gps api to track
            workouts on a map in your location. I built a frontend version of
            this project (
            <a
              href="https://bperez-workout-plotting.netlify.app/"
              style={{ color: "black", textDecoration: "underline" }}
              target="_blank"
            >
              Check it out
            </a>
            ), but am now building a new fullstack version from scratch using
            the MERN stack.
          </p>
        </div>
      </div>
      <div
        className={isOpen ? "overlay" : ""}
        onClick={isOpen ? () => closeModal() : () => {}}
      ></div>
      {isOpen && index === 0 ? (
        <div className="modal-card">
          <img
            src={require("../../../images/memeProjPic.PNG")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>Make A Meme</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React, Redux, MongoDB, Sass, express,
              axios, Material UI, React-Router, Filebase64, Mongoose, moment,
              git, Github
            </p>
            <h4>Description:</h4>
            <p>
              This is a Fullstack CRUD application for creating memes. Building
              this application allowed me to learn a few new things, but really
              allowed me to reenforce previous knowledge and gain a much deeper
              understanding in every area of an app. I became very comfortable
              with the most common hooks and the redux structure of
              actions,reducers, and the store. I was also able to become much
              more comfortable with Sass and responsive styling, as well as
              connecting the parts of an application through apis. I also became
              more familiar with MongoDB and working with it through mongoose on
              the backend. I think this project could be improved by adding
              Firebase authenticaiton to create user accounts and make the app
              more functional.
            </p>
            <div className="links">
              <a
                href="https://github.com/Bperez4197/Make-A-Meme"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://bperez4197-makeameme.netlify.app"
                target="_blank"
              >
                <OpenInNewIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isOpen && index === 1 ? (
        <div className="modal-card">
          <img
            src={require("../../../images/portfolioProjPic.PNG")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>Personal Website</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React,Sass, Material UI,
              React-Router,Emailjs, git, Github, IntersectionObserver Api
            </p>
            <h4>Description:</h4>
            <p>
              This is a Frontend website to display my work and explain a bit
              about myself! I utilized a few different frontend technologies and
              tried to style/animate in a somewhat attractive way. Building this
              project introduced me to Emailjs and reenforced my confidence in
              styling with Sass. I worked with many more animations than I had
              previously and become more comfortable with the
              IntersectionObserver api with modern React for smooth scrolling
              and element triggering such as displaying the header once it's out
              of view or allowing sections to animate only once in view. It was
              challenging to make the design responsive and forced me to sharpen
              my competency in doing so.
            </p>
            <div className="links">
              <a
                href="https://github.com/Bperez4197/personal-website"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a href="#" target="_blank">
                <OpenInNewIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isOpen && index === 2 ? (
        <div className="modal-card">
          <img
            src={require("../../../images/aboutPic.jfif")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>Full-Stack Workout Tracker</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React, Redux, MongoDB, Sass, express,
              axios, Material UI, React-Router, Mongoose, git, Github
            </p>
            <h4>Description:</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              iure deserunt necessitatibus quia natus consequatur quas odit a
              optio esse magni ex alias asperiores earum eum quisquam, saepe
              temporibus! Soluta. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repudiandae voluptas deleniti maxime
              reprehenderit architecto aspernatur fugit eum minus numquam
              ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus non eligendi facere quo nobis quibusdam numquam nostrum
              vel in! Repellendus!
            </p>
            <div className="links">
              <a href="#" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
              <a href="#" target="_blank">
                <OpenInNewIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
