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
