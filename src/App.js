import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import ProjectsPage from "./components/Projects/ProjectsPage";

function App() {
  return (
    <div>
      <Router>
        <Homepage path="/" />
        <ProjectsPage path="gig-buddy" />
        <ProjectsPage path="football-planet" />
        <ProjectsPage path="nc-news" />
        <ProjectsPage path="ziut" />
        <ProjectsPage path="slugboy-brewery" />
        <ProjectsPage path="find-a-side" />
      </Router>
    </div>
  );
}

export default App;
