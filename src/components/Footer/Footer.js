import React from "react";
import "./footer.css";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">© Kieran Cookson 2021</p>
      <p className="footer-Github">
        <a href="https://github.com/kieran170" target="blank">
          <Github />
        </a>
      </p>
      <p className="footer-Linkedin">
        <a href="https://www.linkedin.com/in/kieran-cookson/" target="blank">
          <Linkedin />
        </a>
      </p>
    </footer>
  );
}
