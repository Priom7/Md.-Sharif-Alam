import React from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import SpeedIcon from "@material-ui/icons/Speed";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import react from "./images/react.png";
import css from "./images/css.png";
import material from "./images/material.png";
import Sky from "react-sky";

const ProjectList = (props) => {
  if (props.items.length === 0) {
    return <div>No Project Found</div>;
  }
  return (
    <div className='project'>
      <div>
        <div className='project__principles'>
          <span style={{ color: "#ee4540" }}>
            <strong>
              <SpeedIcon className='skill__icons'>
                {" "}
              </SpeedIcon>
              Performance{" "}
            </strong>
          </span>{" "}
          <span style={{ color: "#ee4540" }}>
            <strong>
              <CheckCircleIcon className='skill__icons'>
                {" "}
              </CheckCircleIcon>
              Simplicity{" "}
            </strong>
          </span>{" "}
          <span style={{ color: "#ee4540" }}>
            <strong>
              <AspectRatioIcon className='skill__icons'>
                {" "}
              </AspectRatioIcon>
              Scalability{" "}
            </strong>
          </span>
        </div>
        <Sky
          images={{
            0: react,
            1: css,
            2: material,
          }}
          how={
            50
          } /* Pass the number of images Sky will render choosing randomly */
          time={40} /* time of animation */
          size={"10px"} /* size of the rendered images */
          background={"#1D1E22"}
        />
      </div>
      <ul className='project__list'>
        {props.items.map((project) => {
          if (project.projectType === "frontend") {
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

export default ProjectList;
