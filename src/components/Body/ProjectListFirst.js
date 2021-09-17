import React from "react";
import { Link } from "@reach/router";
import slugboyHomePage from "../../images/slug-boy.png";
import ziutPreview from "../../images/ziutPreview.png";
import football from '../../images/football.png'
import ncNewsHomePage from "../../images/topicsPage(ncNews).png";
import gigBuddya from "../../images/gigBuddy1.jpeg";
import { ReactComponent as ReadMoreArrow } from "../../images/Vector.svg";
import { ReactComponent as Line } from "../../images/Rectangle1.svg";

export default function ProjectListFirst() {
  return (
    <div className="projects-list-container">
      <div className="project-container">
        <Link to={"/football-planet"}>
          <img className="project-image" src={football} alt="first project" />
        </Link>
        <button className="tech-button">Typescript</button>
        <button className="tech-button">React</button>
        <button className="tech-button">Axios</button>
        <button className="tech-button">Material UI</button>
        <Link className="link" to={"/football-planet"}>
          <h2>Football Planet</h2>
        </Link>
        <Line />
        <p className="project-info">
          A web app built using TypseScript and React, gives users the ability
          to see league tables and scores whilst checking in on your favorite 
          football team, create a account and start browsing now.
        </p>
        <Link className="link" to={"/football-planet"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <Link to={"/gig-buddy"}>
          <img className="project-image" src={gigBuddya} alt="first project" />
        </Link>
        <button className="tech-button">Javascript</button>
        <button className="tech-button">React Native</button>
        <button className="tech-button">Firestore/Firebase</button>
        <button className="tech-button">Axios</button>
        <Link className="link" to={"/gig-buddy"}>
          <h2>Gig Buddy</h2>
        </Link>
        <Line />
        <p className="project-info">
          Gig Buddy: A cross platform mobile application built to allow users to
          find and socialise with others who are attending the same gig as
          themselves, safely.{" "}
        </p>
        <Link className="link" to={"/gig-buddy"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <Link to={"/nc-news"}>
          <img
            className="project-image"
            src={ncNewsHomePage}
            alt="first project"
          />
        </Link>
        <button className="tech-button">Javascript</button>
        <button className="tech-button">React</button>
        <button className="tech-button">CSS</button>
        <button className="tech-button">PSQL</button>
        <button className="tech-button">Axios</button>
        <Link className="link" to={"/nc-news"}>
          <h2>NC News</h2>
        </Link>
        <Line />
        <p className="project-info">
          Nc News: A 'Reddit' styled web application built using React. It
          allows users to browse for certain articles, and vote and comment on
          their favourites.
        </p>
        <Link className="link" to={"/nc-news"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <Link to={"/ziut"}>
          <img
            className="project-image"
            src={ziutPreview}
            alt="first project"
          />
        </Link>
        <button className="tech-button">HTML</button>
        <button className="tech-button">CSS</button>
        <Link className="link" to={"/ziut"}>
          <h2>Zuit</h2>
        </Link>
        <Line />
        <p className="project-info">
          Ziut: A website homepage built for an architectural company to
          advertise in their line of work. Built using HTML and CSS.
        </p>
        <Link className="link" to={"/ziut"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <Link to={"/slugboy-brewery"}>
          <img
            className="project-image"
            src={slugboyHomePage}
            alt="first project"
          />
        </Link>
        <button className="tech-button">HTML</button>
        <button className="tech-button">CSS</button>
        <Link className="link" to={"/slugboy-brewery"}>
          <h2>SlugBoy Brewery</h2>
        </Link>
        <Line />
        <p className="project-info">
          SlugBoy Brewery: A local home brewery company that required a website
          to advertise their products. Built using HTML and CSS.
        </p>
        <Link className="link" to={"/slugboy-brewery"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
    </div>
  );
}
