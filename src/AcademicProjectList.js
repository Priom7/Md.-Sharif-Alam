import React from "react";
import ProjectItem from "./ProjectItem";

const AcademicProjectList = (props) => {
  if (props.items.length === 0) {
    return <div>No Project Found</div>;
  }
  return (
    <div className='project'>
      <div>
        <div className='project__principles'>
          Three principles I follow :{" "}
          <span style={{ color: "#ee4540" }}>
            <strong>Performance </strong>
          </span>{" "}
          <span style={{ color: "#ee4540" }}>
            <strong>Simplicity </strong>
          </span>{" "}
          <span style={{ color: "#ee4540" }}>
            <strong>Scalability </strong>
          </span>
        </div>
      </div>
      <ul className='project__list'>
        {props.items.map((project) => {
          if (project.projectType === "academic") {
            return (
              <ProjectItem
                title={project.title}
                description={project.description}
                details={project.details}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                projectType={project.projectType}
              ></ProjectItem>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default AcademicProjectList;
