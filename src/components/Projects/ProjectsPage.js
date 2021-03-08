import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./projects.css";
import ChatPage from "../../images/gigBuddyChat.png";
import EventsListPage from "../../images/gigBuddyEventList.png";
import HomePage from "../../images/gigBuddyLoginPage.png";
import ProfilePage from "../../images/gigBuddyProfile.png";
import EventPage from "../../images/gigBuddyEventPage.png";
import ApiServer from "../../images/apiServer(ncNews).png";
import HomePagenc from "../../images/homePage(ncNews).png";
import postComment from "../../images/postComments(ncNews).png";
import topicsPage from "../../images//topicsPage(ncNews).png";
import authorPage from "../../images/authorPage(ncNews).png";
import ziutHomePage from "../../images/ziut.png";
import slugboyHomePage from "../../images/slug-boy.png";

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
      title: "Gig buddy",
      projectInfo:
        "Gig buddy is a cross platfrom mobile application and it was my Final project on the northcoders bootcamp be and my team had to create and design a app of or choice. We created Gig buddy for people who struggle to find others to go to gigs with. The built in chat function allows for users to talk in a safe way. we used firestore/firebase to store the users data and also took advantage of firestores live database to allow for realtime chat all on our app. The front end is built using react native and also uses axios to get gig information from ticketmasters API,  ",
      projectTechnologies: [
        "Javascript",
        "React Native",
        "Axios",
        "Firebase/Firestore",
      ],
      githubLink: "https://github.com/kieran170/nc-project",
      photo1: HomePage,
      photo2: EventsListPage,
      photo3: EventPage,
      photo4: ProfilePage,
      photo5: ChatPage,
      photo1text:
        "Profile page which requires a correctly formatted email address and password of 6 characters or more, using firebase authentication",
      photo2text:
        "Events list page where you can search and see all of the events in your area, done using axios and ticketMaster Api",
      photo3text:
        "A specific gig page where users can register interest in finding a gig buddy",
      photo4text:
        "Profile page where you can set a bio and change your avatar so users can identify you in the chat messages",
      photo5text:
        "Private chat page where you can instant message between your self and other users of the app",
    };
    const ncNews = {
      date: "February 2021",
      title: "Nc News",
      projectInfo:
        "Nc News is a 'reddit' styled web and mobile application. i had to create a back end server to save users profiles, articles and vote count i did this using SQL/PSQL, through testing with supertest i enabled users of the app to read articles, post comments and vote in real time. The front end was made using react.",
      projectTechnologies: ["HTML", "CSS", "Javascript", "React", "SQL/PSQL"],
      githubLink: "https://github.com/kieran170/Nc-News-App",
      hostedVersion: "https://nc-newss-app.netlify.app/",
      photo1: ApiServer,
      photo2: topicsPage,
      photo3: HomePagenc,
      photo4: authorPage,
      photo5: postComment,
      photo1text:
        "Back end Api i created to save all users data, made using SQL/PSQL",
      photo2text:
        "Home page where you can see the latest articles including the most popular article",
      photo3text:
        "Articles filtered by topic, only topics that show up are 'cooking' in this image",
      photo4text: "Articles that are written by a specific author",
      photo5text:
        "The specific article page where you can add comments and up and down vote the comment and article itself",
    };
    const ziut = {
      date: "May 2020",
      title: "Ziut",
      projectInfo:
        "Ziut is a project i started before the Northcoders bootcamp, using only HTML and CSS which was all self taught",
      projectTechnologies: ["HTML", "CSS"],
      photo1: ziutHomePage,
      photo1text: "The home page to slugboy brewery",
    };
    const slugboyBrewery = {
      date: "January 2020",
      title: "slugboyBrewery",
      projectInfo:
        "slugboyBrewery was my first ever project i had started when my friends decided they were going to start brewing beer at home just before lockdown started i was inspired to try and create them a website and this is where i started learning myself HTML and CSS",
      projectTechnologies: ["HTML", "CSS"],
      photo1: slugboyHomePage,
      photo1text: "The home page to slugboy brewery",
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
      setPhoto3(gigBuddy.photo3);
      setPhoto3Text(gigBuddy.photo3text);
      setPhoto4(gigBuddy.photo4);
      setPhoto4Text(gigBuddy.photo4text);
      setPhoto5(gigBuddy.photo5);
      setPhoto5Text(gigBuddy.photo5text);
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
          <p className="project-title">{projectDate}</p>
          <h1>{projectTitle}</h1>
          <p>{projectInfo}</p>
          <p>Technologies Used</p>
          <ul className="tech-list">
            {projectTechnologies.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
          {githubLink.length > 0 && (
            <a className="links" href={githubLink} target="blank">
              Github repo link ---- {githubLink}
              <br></br>
              <br></br>
            </a>
          )}
          {hostedLink.length > 0 && (
            <a className="links" href={hostedLink}>
              Hosted Version ---- {hostedLink}
            </a>
          )}
        </div>
        <div className="project-images">
          <img
            className="project-photo"
            src={photo1}
            alt="first project page"
          />
          <p>{photo1text}</p>
          {photo2 && (
            <>
              <img
                className="project-photo"
                src={photo2}
                alt="second project page"
              />
              <p>{photo2text}</p>{" "}
            </>
          )}
          {photo3 && (
            <>
              <img
                className="project-photo"
                src={photo3}
                alt="third project page"
              />
              <p>{photo3text}</p>
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
              <p>{photo4text}</p>{" "}
            </>
          )}
          {photo5 && (
            <>
              <img
                className="project-photo"
                src={photo5}
                alt="fourth project page"
              />
              <p>{photo5text}</p>{" "}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}