import React from "react";
import "./Body.css";
import Info from "./Info";
import ProjectListFirst from "./ProjectListFirst";

export default function Body() {
  return (
    <main className="flex-inline">
      <Info />
      <ProjectListFirst />
    </main>
  );
}
