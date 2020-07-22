import React from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";
import BackGround from "./BackGround";
import react from "./images/react.png";
import css from "./images/css.png";
import material from "./images/material.png";
import Sky from "react-sky";

const ProjectList = (props) => {
  console.log(props);
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
          return (
            <ProjectItem
              title={project.title}
              description={project.description}
              details={project.details}
              imageUrl={project.imageUrl}
            ></ProjectItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
