import React, { useState, useEffect, useRef } from "react";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckIcon from "@mui/icons-material/Check";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

import "./styles.scss";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [sent, setIsSent] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_63vhral",
        "template_ugwb8j7",
        "#myForm",
        "user_7sxjwOI624crP38tM8tTd"
      )
      .then(() => {
        console.log("email sent successfully");
        return setIsSent(true);
      })
      .catch((err) =>
        console.log(`There was an issue sending your email: ${err}`)
      );
  };

  return (
    <section ref={sectionRef}>
      <Element name="contact">
        <h2>Contact Me</h2>
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
          <form
            id="myForm"
            className={isVisible ? "animated-from-right" : ""}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="fullname"
              name="from_name"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              id="email"
              name="email_address"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="Phone Number"
              placeholder="Phone Number"
              name="phone_number"
            />
            <input
              type="textarea"
              id="message"
              placeholder="Enter your message"
              name="message"
              required
            />
            <button type="submit" style={sent ? { color: "white" } : {}}>
              {sent ? "Sent" : "Send"}
              &nbsp;
              <span className={sent ? "" : "bounce-right"}>
                {sent ? (
                  <CheckIcon fontSize="large" className="check" />
                ) : (
                  <SendRoundedIcon fontSize="large" />
                )}
              </span>
            </button>
          </form>
        </div>
      </Element>
    </section>
  );
}
