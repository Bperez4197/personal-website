import React from "react";

export default function Header() {
  return (
    <header>
      <ul>
        <a href="#home">
          <li>Home |</li>
        </a>
        <a href="#about">
          <li>About |</li>
        </a>
        <a href="#skills">
          <li>Skills |</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio |</li>
        </a>
        <a href="#contact">
          <li>Contact |</li>
        </a>
        <a href="#" target="_blank">
          <li>Resume</li>
        </a>
      </ul>
    </header>
  );
}
