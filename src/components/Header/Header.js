import React from "react";
import "./Header.css";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

export default function Header() {
  return (
    <header className="header-container">
      <p className="header-text-work">Work</p>
      <p className="header-Github">
        <a href="https://github.com/kieran170" target="blank">
          <Github />
        </a>
      </p>
      <p className="header-Linkedin">
        <a href="https://www.linkedin.com/in/kieran-cookson/" target="blank">
          <Linkedin />
        </a>
      </p>
    </header>
  );
}
