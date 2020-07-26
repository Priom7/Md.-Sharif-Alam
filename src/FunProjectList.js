import React from "react";
import ProjectItem from "./ProjectItem";

const FunProjectList = (props) => {
  if (props.items.length === 0) {
    return <div>No Project Found</div>;
  }
  return (
    <div className='project'>
      <ul className='project__list'>
        {props.items.map((project) => {
          if (project.projectType === "fun") {
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

export default FunProjectList;
