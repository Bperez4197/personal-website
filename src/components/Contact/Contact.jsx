import React from "react";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import "./styles.scss";

export default function Contact() {
  return (
    <section>
      <h2>Contact Section</h2>
      <div className="contact">
        <div className="contact-info">
          <div className="info-block">
            <LocationOnRoundedIcon fontSize="large" />
            <span>&nbsp; Glendale, Arizona</span>
          </div>
          <div className="info-block">
            <EmailRoundedIcon fontSize="large" />
            <span>&nbsp; perez.bryce31@gmail.com</span>
          </div>
          <div className="info-block">
            <PhoneRoundedIcon fontSize="large" />
            <span>&nbsp; 480-640-8778</span>
          </div>
        </div>
        <form>
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
            <SendRoundedIcon />
          </button>
        </form>
      </div>
    </section>
  );
}
