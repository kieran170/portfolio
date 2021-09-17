import React from "react";
import { ReactComponent as Mail } from "../../images/Mail.svg";
import me from "../../images/me.jpg";
import { ReactComponent as Line } from "../../images/Rectangle1.svg";

export default function Info() {
  return (
    <div className="body-info-container">
      <p className="body-info-name-title">
        <Line className="project-line" /> Kieran Cookson
      </p>
      <img className="me-photo" src={me} alt="me" />
      <p className="body-info-text-description">
        I'm Kieran,<br></br> a Junior Software Engineer
      </p>
      <p className="body-info-text">
        A <b>Northcoders Graduate </b> with a natural sense for
        <b> problem-solving </b>
        and experience using:
      </p>
      <ul className="list-container">
        <li className="list-items">Javascript</li>
        <li className="list-items">HTML & CSS</li>
        <li className="list-items">React</li>
        <li className="list-items">React Native</li>
        <li className="list-items">Node Js</li>
        <li className="list-items">Axios</li>
        <li className="list-items">Typescript</li>
        <li className="list-items">SQL/PSQL</li>
        <li className="list-items">JSX</li>
        <li className="list-items">Material UI</li>
      </ul>
      <a className="get-in-touch-button" href="mailto:kieran170@hotmail.co.uk">
        <Mail className="mail-button" />
        <p className="get-in-touch-button-text">Get in touch</p>
      </a>
    </div>
  );
}
