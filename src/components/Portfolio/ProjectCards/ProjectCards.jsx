import React from "react";

import "./styles.scss";

// image, title, description, github and live links
//use modals. short desc, small img, no technologies listed for small version
// Links are larger
export default function ProjectCard({ isVisible }) {
  return (
    <div id="project-cards" className={isVisible ? "animated-from-left" : ""}>
      <div className="card">
        <img src={require("../../../images/aboutPic.jfif")} alt="Code editor" />
        <div className="card-content">
          <h3>Title:</h3>
          <p>The Title Project</p>
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure deserunt necessitatibus quia natus consequatur quas odit a
            optio esse magni ex alias asperiores earum eum quisquam, saepe
            temporibus! Soluta.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={require("../../../images/aboutPic.jfif")} alt="Code editor" />
        <div className="card-content">
          <h3>Title:</h3>
          <p>The Title Project</p>
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure deserunt necessitatibus quia natus consequatur quas odit a
            optio esse magni ex alias asperiores earum eum quisquam, saepe
            temporibus! Soluta.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={require("../../../images/aboutPic.jfif")} alt="Code editor" />
        <div className="card-content">
          <h3>Title:</h3>
          <p>The Title Project</p>
          <h4>Description:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            iure deserunt necessitatibus quia natus consequatur quas odit a
            optio esse magni ex alias asperiores earum eum quisquam, saepe
            temporibus! Soluta.
          </p>
        </div>
      </div>
    </div>
  );
}
