import React, { useState } from "react";

import "./styles.scss";

// image, title, description, github and live links
//use modals. short desc, small img, no technologies listed for small version
// Links are larger
export default function OldProjectCards({ isVisible }) {
  const [index, setIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (i) => {
    setIsOpen(true);
    setIndex(i);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="project-cards" className={isVisible ? "animated-from-left" : ""}>
      <div className="card" onClick={() => openModal(3)}>
        <img src={require("../../../images/aboutPic.jfif")} alt="Code editor" />
        <div className="card-content">
          <h3>Title:</h3>
          <p>E-commerce App</p>
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure deserunt necessitatibus quia natus consequatur quas odit a
            optio esse magni ex alias asperiores earum eum quisquam, saepe
            temporibus! Soluta.
          </p>
        </div>
      </div>
      <div className="card" onClick={() => openModal(4)}>
        <img src={require("../../../images/aboutPic.jfif")} alt="Code editor" />
        <div className="card-content">
          <h3>Title:</h3>
          <p>Bank Website</p>
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure deserunt necessitatibus quia natus consequatur quas odit a
            optio esse magni ex alias asperiores earum eum quisquam, saepe
            temporibus! Soluta.
          </p>
        </div>
      </div>
      <div className="card" onClick={() => openModal(5)}>
        <img src={require("../../../images/aboutPic.jfif")} alt="Code editor" />
        <div className="card-content">
          <h3>Title:</h3>
          <p>Workout Tracker</p>
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure deserunt necessitatibus quia natus consequatur quas odit a
            optio esse magni ex alias asperiores earum eum quisquam, saepe
            temporibus! Soluta.
          </p>
        </div>
      </div>
      <div
        className={isOpen ? "overlay" : ""}
        onClick={isOpen ? () => closeModal() : () => {}}
      ></div>
      {isOpen && index === 3 ? (
        <div className="modal-card">
          <img
            src={require("../../../images/aboutPic.jfif")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>E-commerce App</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React, Redux, MongoDB, Sass, express,
              axios, Material UI, React-Router, Filebase64, Mongoose
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
          </div>
        </div>
      ) : (
        ""
      )}
      {isOpen && index === 4 ? (
        <div className="modal-card">
          <img
            src={require("../../../images/aboutPic.jfif")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>Bank Website</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React, Redux, MongoDB, Sass, express,
              axios, Material UI, React-Router, Filebase64, Mongoose
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
          </div>
        </div>
      ) : (
        ""
      )}
      {isOpen && index === 5 ? (
        <div className="modal-card">
          <img
            src={require("../../../images/aboutPic.jfif")}
            alt="Code editor"
          />
          <div className="modal-card-content">
            <h3>Title:</h3>
            <p>Workout Tracker</p>
            <h4>Tools Used:</h4>
            <p>
              Javascript, HTML, CSS, React, Redux, MongoDB, Sass, express,
              axios, Material UI, React-Router, Filebase64, Mongoose
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
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
