import React from "react";
import ProjectList from "./ProjectList";

const Project = [
  {
    title: "Click And Share",
    description:
      "Social Media Application (Instagram Clone)",
    imageUrl: "www.google.com",
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "Share A Thought",
    description: "Social Media Application (Twitter Clone)",
    imageUrl: "www.google.com",
    view: "Link",
    code: "link",
    details: "More Details",
  },
];

//will pass props from here
function Projects() {
  return (
    <div>
      <ProjectList items={Project}></ProjectList>
    </div>
  );
}

export default Projects;
