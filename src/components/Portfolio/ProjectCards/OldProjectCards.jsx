import React, { useState, useEffect } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./styles.scss";

// image, title, description, github and live links
//use modals. short desc, small img, no technologies listed for small version
// Links are larger
export default function OldProjectCards({
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
      <div className="card" onClick={() => openModal(3)}>
        <img
          src={require("../../../images/ecommProjPic.PNG")}
          alt="Code editor"
        />
        <div className="card-content">
          <h3>Title:</h3>
          <p>E-commerce Clothing App</p>
          <h4>Description:</h4>
          <p>
            This is a Frontend e-commerce application that utilizes React
            without hooks and Redux. The app includes a self-built cart system
            and a payment system from stripe. It also includes user
            authentication and a basic database through firebase.
          </p>
        </div>
      </div>
      <div className="card" onClick={() => openModal(5)}>
        <img
          src={require("../../../images/bankProjPic.PNG")}
          alt="Code editor"
        />
        <div className="card-content">
          <h3>Title:</h3>
          <p>Bank Website</p>
          <h4>Description:</h4>
          <p>
            This is a Frontend website for a bank. I started with an html/css
            template, but built all of the javascript. I was able to become
            familiar with many DOM manipulation techniques and the
            IntersectionObserver Api.
          </p>
        </div>
      </div>
      <div className="card" onClick={() => openModal(4)}>
        <img
          src={require("../../../images/bjjProjPic.PNG")}
          alt="Code editor"
        />
        <div className="card-content">
          <h3>Title:</h3>
          <p>BJJ Gear Inc.</p>
          <h4>Description:</h4>
          <p>
            This is a Frontend e-commerce site to buy Brazilian Jiu-Jitsu gear
            that utilizes plain ole' HTML, CSS, and Javascript. There is no cart
            system but payments are handled by Paypal. This is an early project
            I did for school.
          </p>
        </div>
      </div>
      <div
        className={isOpen ? "overlay" : ""}
        onClick={isOpen ? () => closeModal() : () => {}}
      ></div>
      {isOpen && index === 3 ? (
        <div className="modal-card" onClick={closeModal}>
          <img
            src={require("../../../images/ecommProjPic.PNG")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>E-commerce Clothing App</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React, Redux, Sass, React-Router, Firebase,
              Stripe, git, Github
            </p>
            <h4>Description:</h4>
            <p>
              This is a Frontend e-commerce application for buying clothing. It
              uses the older style of React without hooks, using component
              lifecycle methods, and more class components. The app also
              utilizes Redux for state management, Firebase for authentication
              and database, and Stripe for payment. Building this application
              gave me an introductory understanding of many technologies, but
              excelled at teaching me to do better web research and most
              importantly - read documentation. At this stage I was still
              learning about state, react-router, and props, so I had to read a
              ton of documentation for both React, React Router, and Redux. I
              think this app could be improved in many ways, but the first thing
              I would do is utilize MongoDB instead of firebase for both user
              accounts and clothing objects, build a backend with express, and
              set up apis to make the app Fullstack.
            </p>
            <div className="links">
              <a
                href="https://github.com/Bperez4197/Crown-Clothing"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://bperez-react-ecommerce.netlify.app/"
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
      {isOpen && index === 5 ? (
        <div className="modal-card" onClick={closeModal}>
          <img
            src={require("../../../images/bankProjPic.PNG")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>Bank Website</p>
            <h4>Tools Used:</h4>
            <p>Javascript, IntersectionObserver Api, git, Github</p>
            <h4>Description:</h4>
            <p>
              This is a Frontend website for a bank. I started with an html/css
              template, but built all of the javascript and DOM manipulation.
              This project taught me a ton about DOM manipulation and expanded
              my knowledge of javascript fundamentals. I implemented a tabbed
              component, sticky nav, a slider, a modal, lazy loading images, and
              smooth scrolling. I think this project could be improved by making
              the design responsive and if I were to do it today I wouldn't use
              a template.
            </p>
            <div className="links">
              <a
                href="https://github.com/Bperez4197/Bank-Website"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://bperez-vanillajs-bank.netlify.app/"
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
      {isOpen && index === 4 ? (
        <div className="modal-card" onClick={closeModal}>
          <img
            src={require("../../../images/bjjProjPic.PNG")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>BJJ Gear Inc.</p>
            <h4>Tools Used:</h4>
            <p>HTML, CSS, Javascript, Paypal, git, Github</p>
            <h4>Description:</h4>
            <p>
              This is a Frontend e-commerce site to buy Brazilian Jiu-Jitsu
              gear. I used just plain HTML, CSS, and Javascript to build the
              client side and the backend payment system is handled by Paypal.
              Building this app got me more comfortable with HTML and CSS but at
              a lower level. I did implement responsive design on the products
              page, but at this stage I was still experimenting with both
              styling and DOM manipulation. This application could be improved
              in a myriad of ways and I would probably just start from scratch
              if I was going to build it today.
            </p>
            <div className="links">
              <a
                href="https://github.com/Bperez4197/BJJ-Website"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://bperez-first-site-bjj-gear.netlify.app/index.html"
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
    </div>
  );
}
