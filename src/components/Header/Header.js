import React from "react";
import "./Header.css";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { Link } from "@reach/router";

export default function Header() {
  return (
    <header className="header-container">
      <Link className="link" to="/">
        <p className="header-text-work">Home</p>
      </Link>
      <div className="header-socials">
        <a
          className="socials-margin"
          href="https://github.com/kieran170"
          target="blank"
        >
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/kieran-cookson/" target="blank">
          <Linkedin />
        </a>
      </div>
    </header>
  );
}
