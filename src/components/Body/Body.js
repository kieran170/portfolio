import React from "react";
import "./Body.css";
import Info from "./Info";
import ProjectsList from "./ProjectsList";

export default function Body() {
  return (
    <main>
      <Info />
      <ProjectsList />
    </main>
  );
}
