import React from "react";
import project from "../../images/project.jpeg";
import { ReactComponent as ReadMoreArrow } from "../../images/readMoreArrow.svg";
import { Link } from "@reach/router";
import slugboyHomePage from "../../images/slug-boy.png";
import ziutPreview from "../../images/ziutPreview.png";
import ncNewsHomePage from "../../images/topicsPage(ncNews).png";

export default function ProjectListFirst() {
  return (
    <div className="projects-list-container">
      <div className="project-container">
        <img className="project-image" src={project} alt="first project" />
        <button className="tech-button">Javascript</button>
        <button className="tech-button">React Native</button>
        <button className="tech-button">Firestore/Firebase</button>
        <button className="tech-button">Axios</button>
        <h2>Gig Buddy</h2>
        <p className="line"></p>
        <p className="project-info">
          Gig buddy was my final project on the Northcoders bootcamp me and 4
          others had to create and design any app, we decided to create a social
          app to help people find others to go to gigs with safely.{" "}
        </p>
        <Link className="link" to={"/gig-buddy"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <img
          className="project-image"
          src={ncNewsHomePage}
          alt="first project"
        />
        <button className="tech-button">Javascript</button>
        <button className="tech-button">React</button>
        <button className="tech-button">CSS</button>
        <button className="tech-button">PSQL</button>
        <button className="tech-button">Axios</button>

        <h2>NC News</h2>
        <p className="line"></p>
        <p className="project-info">
          NC news is a react app that i created on the Northcoders bootcamp,
          creating a database to sort information about articles topics and
          authors using PSQL i then made a front end application using the back
          end i had built. Nc is a 'reddit' styled web application allowing
          users to browse articles up and down vote whilst also leaving comments
        </p>
        <Link className="link" to={"/nc-news"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <img className="project-image" src={ziutPreview} alt="first project" />
        <button className="tech-button">HTML</button>
        <button className="tech-button">CSS</button>

        <h2>Zuit</h2>
        <p className="line"></p>
        <p className="project-info">
          Ziut was a practise project i did before starting the Northcoders
          bootcamp, using my self taught knowledge of CSS and HTML i built the
          front to a architectural company
        </p>
        <Link className="link" to={"/ziut"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
      <div className="project-container">
        <img
          className="project-image"
          src={slugboyHomePage}
          alt="first project"
        />
        <button className="tech-button">HTML</button>
        <button className="tech-button">CSS</button>

        <h2>SlugBoy Brewery</h2>
        <p className="line"></p>
        <p className="project-info">
          SlugBoy Brewery website was the first project i started when i was
          learning CSS and HTML, my friends had started a home brewery and in
          lockdown 2020 and i wanted to see if i could make them a website
        </p>
        <Link className="link" to={"/slugboy-brewery"}>
          Read More <ReadMoreArrow />
        </Link>
      </div>
    </div>
  );
}
