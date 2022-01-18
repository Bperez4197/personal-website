import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";

import "./styles.scss";

export default function About() {
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
    <Element name="about">
      <section id="about" ref={sectionRef}>
        <div
          className={isVisible ? " about-img animated-from-left" : "about-img"}
        >
          <img src={require("../../images/aboutPic.jfif")} alt="Code editor" />
        </div>
        <div
          className={
            isVisible ? " about-content animated-from-right" : "about-content"
          }
        >
          <h3 id="about-title">
            A bit <span>about</span> me
          </h3>
          <p id="about-msg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo rem
            sapiente necessitatibus expedita perferendis ea officiis est
            perspiciatis quae laborum praesentium aspernatur earum adipisci
            commodi, ducimus odit nisi rerum! Beatae, totam? Omnis explicabo
            aliquam voluptas temporibus necessitatibus? Excepturi harum ipsa,
            vitae voluptates ducimus quidem iusto corporis. Molestias rerum
            consectetur maiores, optio deleniti doloremque mollitia! Enim
            voluptatem impedit odit rem harum, esse consequuntur ab tempora
            animi officia accusamus delectus vero adipisci dolorum quo magni
            soluta minima vitae dolorem aperiam voluptatibus exercitationem.
            Sint, temporibus rem! Inventore saepe ea quasi repellat dicta cum,
            deleniti, explicabo quae sapiente in libero ipsa reprehenderit id
            accusamus.
          </p>
        </div>
      </section>
    </Element>
  );
}
