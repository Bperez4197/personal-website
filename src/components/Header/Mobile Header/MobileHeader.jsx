import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import resume from "../../../images/BrycePerez_Resume.pdf";

import "./styles.scss";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div id="mobile-header">
      <MenuRoundedIcon
        fontSize="large"
        onClick={isOpen ? closeMenu : openMenu}
        className="menu-icon"
      />
      <header className={isOpen ? "menu animated-from-right" : "hidden"}>
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <a href={resume} target="_blank">
            <li>Resume</li>
          </a>
        </ul>
      </header>
    </div>
  );
}
