import React from "react";
import { ReactComponent as Mail } from "../../images/Mail.svg";

export default function Info() {
  return (
    <div className="body-info-container">
      <p className="body-info-name-title">Kieran Cookson</p>
      <p className="body-info-text-description">
        I'm Kieran, a Junior Software Engineer
      </p>
      <p className="body-info-text">
        A <b>Northcoders Graduate </b> with a natural sense for
        <b> problem-solving </b>
        and experience using:
      </p>
      <ul className="list-container">
        <li className="list-items">HTML & CSS</li>
        <li className="list-items">Javascript</li>
        <li className="list-items">React</li>
        <li className="list-items">React Native</li>
        <li className="list-items">Node Js</li>
        <li className="list-items">Axios</li>
        <li className="list-items">PSQL</li>
        <li className="list-items">JSX</li>
      </ul>
      <button className="get-in-touch-button">
        <Mail />
        Get in touch
      </button>
    </div>
  );
}
