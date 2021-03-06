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
          <strong>
            These projects were built throughout academic
            years as course projects. (Fall 2015- Fall 2019)
          </strong>
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
                code={project.code}
              ></ProjectItem>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default AcademicProjectList;
