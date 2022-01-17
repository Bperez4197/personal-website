import React from "react";

import "./styles.scss";

export default function About() {
  return (
    <section id="about">
      <div className="about-img">
        <img src={require("../../images/aboutPic.jfif")} alt="Code editor" />
      </div>
      <div className="about-content">
        <h3 id="about-title">Here's a bit about me</h3>
        <p id="about-msg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo rem
          sapiente necessitatibus expedita perferendis ea officiis est
          perspiciatis quae laborum praesentium aspernatur earum adipisci
          commodi, ducimus odit nisi rerum! Beatae, totam? Omnis explicabo
          aliquam voluptas temporibus necessitatibus? Excepturi harum ipsa,
          vitae voluptates ducimus quidem iusto corporis. Molestias rerum
          consectetur maiores, optio deleniti doloremque mollitia! Enim
          voluptatem impedit odit rem harum, esse consequuntur ab tempora animi
          officia accusamus delectus vero adipisci dolorum quo magni soluta
          minima vitae dolorem aperiam voluptatibus exercitationem. Sint,
          temporibus rem! Inventore saepe ea quasi repellat dicta cum, deleniti,
          explicabo quae sapiente in libero ipsa reprehenderit id accusamus.
        </p>
      </div>
    </section>
  );
}
