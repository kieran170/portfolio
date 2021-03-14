import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./projects.css";
import gigBuddya from "../../images/gigBuddy1.jpeg";
import gigBuddyb from "../../images/gigBuddy2.jpeg";
import ApiServer from "../../images/apiServer(ncNews).png";
import HomePagenc from "../../images/homePage(ncNews).png";
import postComment from "../../images/postComments(ncNews).png";
import topicsPage from "../../images//topicsPage(ncNews).png";
import authorPage from "../../images/authorPage(ncNews).png";
import ziutHomePage from "../../images/ziut.png";
import slugboyHomePage from "../../images/slug-boy.png";
import { ReactComponent as Line } from "../../images/Rectangle1.svg";

export default function ProjectsPage({ path }) {
  const [url, seturl] = useState(path);
  const [projectDate, setProjectDate] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  const [githubLink, setGitHubLink] = useState("");
  const [hostedLink, setHostedLink] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo1text, setPhoto1Text] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo2text, setPhoto2Text] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo3text, setPhoto3Text] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo4text, setPhoto4Text] = useState("");
  const [photo5, setPhoto5] = useState("");
  const [photo5text, setPhoto5Text] = useState("");

  useEffect(() => {
    const gigBuddy = {
      date: "March 2021",
      title: "Gig Buddy",
      projectInfo: `Gig Buddy is a cross platform mobile application that was part of my final project for Northcoders. 
          The team and myself design and developed this functional application for people who often struggle 
          to find others to attend gigs with. It includes a built in private chat that allows users to talk in 
          a safe way. We used Firestore/Firebase to store the users data and also took advantage of Firestore's 
          live database to allow for realtime chat on our app. The front end is built using React Native, which 
          allows for cross platform usage, in addition to this, we used Axios to retrieve gig information from 
          Ticketmaster's public API.
        `,
      projectTechnologies: [
        "Javascript",
        "React Native",
        "Axios",
        "Firebase/Firestore",
      ],
      githubLink: "https://github.com/kieran170/nc-project",
      photo1: gigBuddya,
      photo2: gigBuddyb,
      photo1text: `The above image displays three of the main pages of the application, the sign up/ sign in screen, the event 
        list and the event details page. The first screen uses Firebase Authentication where the user is required to enter
        a registered email and password containing at least 6 characters. Once the user has gained access to the application, they can
        see a list of all their closest gigs within a certain mile radius. You can search for different locations and find 
        the next 20 upcoming gigs in that area. Clicking on the specific gig will open the event details page where the user 
        will be able to view details of the event, in addition to a list of users who are also attending the gig and looking 
        for a Gig Buddy, and a button to register your interest in finding a Gig Buddy.`,
      photo2text: `The next image shows the users customizable profile page, their contacts list and a private chat room between themselves
        and others users who are registered on the event page as 'looking for a buddy'. We made use of Firestores' live database 
        to allow the users to talk in real time.`,
    };
    const ncNews = {
      date: "February 2021",
      title: "Nc News",
      projectInfo: `Nc News is a 'Reddit' styled web and mobile application which was built using SQL/PSQL. A back end server was
        created to save user profiles, articles and vote counts. Throughout this project, thorough testing was carried
        out using Supertest and Jest ensuring that users were able to read articles, post comments, and vote in real time,
        successfully. The front end of the application was built using React and CSS.`,
      projectTechnologies: [
        "CSS",
        "Javascript",
        "React",
        "Axios",
        "Supertest",
        "Jest",
        "SQL/PSQL",
      ],
      githubLink: "https://github.com/kieran170/Nc-News-App",
      hostedVersion: "https://nc-newss-app.netlify.app/",
      photo1: ApiServer,
      photo2: topicsPage,
      photo3: HomePagenc,
      photo4: authorPage,
      photo5: postComment,
      photo1text:
        "Back end API that was created to save all user data, built using SQL/PSQL.",
      photo2text:
        "Home page where you can see the latest articles including the most popular article, determined by the vote count.",
      photo3text:
        "Articles filtered by topic, screenshot shows articles where their topic is 'Cooking'.",
      photo4text: "Articles that are written by a specific author.",
      photo5text:
        "The single article page where you can add comments and 'up' and 'down' vote the comment and article itself.",
    };
    const ziut = {
      date: "May 2020",
      title: "Ziut",
      projectInfo: `Zuit is a project I began working on to gain more experience using HTML and CSS. I was able to collaborate 
       successfully with a designer to build a user friendly homepage.`,
      projectTechnologies: ["HTML", "CSS"],
      photo1: ziutHomePage,
      photo1text: "The home page for Ziut.",
    };
    const slugboyBrewery = {
      date: "January 2020",
      title: "Slugboy Brewery",
      projectInfo: `Slugboy Brewery was my first project and first time working with HTML and CSS. I was given a brief 
        from a local company to build a website that advertised their stock. Slugboy Brewery allowed me to 
        teach myself new technologies and really fall in love with the coding world.`,
      projectTechnologies: ["HTML", "CSS"],
      photo1: slugboyHomePage,
      photo1text: "The home page to Slugboy Brewery.",
    };

    if (url === "gig-buddy") {
      setProjectDate(gigBuddy.date);
      setProjectTitle(gigBuddy.title);
      setProjectInfo(gigBuddy.projectInfo);
      setProjectTechnologies(gigBuddy.projectTechnologies);
      setGitHubLink(gigBuddy.githubLink);
      setPhoto1(gigBuddy.photo1);
      setPhoto1Text(gigBuddy.photo1text);
      setPhoto2(gigBuddy.photo2);
      setPhoto2Text(gigBuddy.photo2text);
    }
    if (url === "nc-news") {
      setProjectDate(ncNews.date);
      setProjectTitle(ncNews.title);
      setProjectInfo(ncNews.projectInfo);
      setProjectTechnologies(ncNews.projectTechnologies);
      setGitHubLink(ncNews.githubLink);
      setHostedLink(ncNews.hostedVersion);
      setPhoto1(ncNews.photo1);
      setPhoto1Text(ncNews.photo1text);
      setPhoto2(ncNews.photo2);
      setPhoto2Text(ncNews.photo2text);
      setPhoto3(ncNews.photo3);
      setPhoto3Text(ncNews.photo3text);
      setPhoto4(ncNews.photo4);
      setPhoto4Text(ncNews.photo4text);
      setPhoto5(ncNews.photo5);
      setPhoto5Text(ncNews.photo5text);
    }
    if (url === "ziut") {
      setProjectDate(ziut.date);
      setProjectTitle(ziut.title);
      setProjectInfo(ziut.projectInfo);
      setProjectTechnologies(ziut.projectTechnologies);
      setPhoto1(ziut.photo1);
      setPhoto1Text(ziut.photo1text);
    }
    if (url === "slugboy-brewery") {
      setProjectDate(slugboyBrewery.date);
      setProjectTitle(slugboyBrewery.title);
      setProjectInfo(slugboyBrewery.projectInfo);
      setProjectTechnologies(slugboyBrewery.projectTechnologies);
      setPhoto1(slugboyBrewery.photo1);
      setPhoto1Text(slugboyBrewery.photo1text);
    }
  }, []);
  return (
    <>
      <Header />
      <main className="project-page-container">
        <div className="single-project-container">
          <p className="project-title">
            {" "}
            <Line className="project-line" />
            {projectDate}
          </p>
          <h1>{projectTitle}</h1>
          <p className="project-text">{projectInfo}</p>
          <p className="project-text">Technologies Used</p>
          <ul className="tech-list">
            {projectTechnologies.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
          {githubLink.length > 0 && (
            <a className="links" href={githubLink} target="blank">
              Github repo link <br></br> {githubLink}
              <br></br>
              <br></br>
            </a>
          )}
          {hostedLink.length > 0 && (
            <a className="links" href={hostedLink} target="blank">
              Hosted Version <br></br>
              {hostedLink}
            </a>
          )}
        </div>
        {url !== "gig-buddy" ? (
          <div className="project-images">
            <img
              className="project-photo"
              src={photo1}
              alt="first project page"
            />
            <p className="project-text">{photo1text}</p>
            {photo2 && (
              <>
                <img
                  className="project-photo"
                  src={photo2}
                  alt="second project page"
                />
                <p className="project-text">{photo2text}</p>{" "}
              </>
            )}
            {photo3 && (
              <>
                <img
                  className="project-photo"
                  src={photo3}
                  alt="third project page"
                />
                <p className="project-text">{photo3text}</p>
              </>
            )}
            {photo4 && (
              <>
                {" "}
                <img
                  className="project-photo"
                  src={photo4}
                  alt="fourth project page"
                />
                <p className="project-text">{photo4text}</p>{" "}
              </>
            )}
            {photo5 && (
              <>
                <img
                  className="project-photo"
                  src={photo5}
                  alt="fourth project page"
                />
                <p className="project-text">{photo5text}</p>{" "}
              </>
            )}
          </div>
        ) : (
          <div className="project-images">
            <img
              className="project-photo-gig-buddy"
              src={photo1}
              alt="first project page"
            />
            <p className="project-photo-text">{photo1text}</p>
            {photo2 && (
              <>
                <img
                  className="project-photo-gig-buddy"
                  src={photo2}
                  alt="second project page"
                />
                <p className="project-photo-text">{photo2text}</p>{" "}
              </>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
