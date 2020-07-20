import React from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";

const ProjectList = (props) => {
  console.log(props);
  if (props.items.length === 0) {
    return <div>No Project Found</div>;
  }
  return (
    <div className='project'>
      <h1>Projects</h1>

      <ul className='project__list'>
        {props.items.map((project) => {
          return (
            <ProjectItem
              title={project.title}
              description={project.description}
              details={project.details}
            ></ProjectItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
