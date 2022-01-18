import React, { useState, useEffect, useRef } from "react";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Element } from "react-scroll";

import "./styles.scss";

export default function Contact() {
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
    <section ref={sectionRef}>
      <Element name="contact">
        <h2>Contact Section</h2>
        <div className="contact">
          <div
            className={
              isVisible ? "contact-info animated-from-left" : "contact-info"
            }
          >
            <div className="info-block">
              <LocationOnRoundedIcon fontSize="large" />
              <span>&nbsp; Glendale, Arizona</span>
            </div>
            <div className="info-block">
              <a href="mailto:perez.bryce31@gmail.com">
                <EmailRoundedIcon fontSize="large" />
              </a>
              <span>&nbsp; perez.bryce31@gmail.com</span>
            </div>
            <div className="info-block">
              <PhoneRoundedIcon fontSize="large" />
              <span>&nbsp; 480-640-8778</span>
            </div>
          </div>
          <form className={isVisible ? "animated-from-right" : ""}>
            <input type="text" id="fullname" placeholder="Full Name" required />
            <input type="text" id="email" placeholder="Email" required />
            <input
              type="text"
              id="Phone Number"
              placeholder="Phone Number"
              required
            />
            <input
              type="textarea"
              id="message"
              placeholder="Enter your message"
              required
            />
            <button type="submit">
              Send &nbsp;
              <span className={isVisible ? "bounce-right" : ""}>
                <SendRoundedIcon fontSize="large" />
              </span>
            </button>
          </form>
        </div>
      </Element>
    </section>
  );
}
