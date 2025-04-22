import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArticleIcon from '@material-ui/icons/Link';
import space from "./images/gif/space.gif";

import "./Home.css";
import BackGround from "./BackGround";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ProjectTab from "./ProjectTab";

const Home = (props) => {
  return (
    <>
      <div
        className="home"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <div className="home__item">
          <h1>
            Hi, I am <span className="home__name">Md. Sharif Alam </span> 👋
          </h1>
          <p className="text-center">
            Fullstack Software Engineer 💻 <br></br> Crafting intuitive UIs 🎨{" "}
            <br></br> Seamless UX 🧩 <br></br>
            Robust backends 🔧 <br></br> Reliable DevOps pipelines 🚀 <br></br>{" "}
            for a cohesive digital experience.{" "}
          </p>
          <img style={{ height: "100px" }} src={space} alt="space"></img>
          <div className="home__icons">
            <p>
              <span>
                {" "}
                <a href="https://www.linkedin.com/in/md-sharif-alam/">
                  <LinkedInIcon></LinkedInIcon> 
                </a>
              </span>
              <span>
                {" "}
                <a href="https://github.com/Priom7">
                  <GitHubIcon></GitHubIcon> 
                </a>
              </span>
              <span>
                {" "}
                <a href="https://medium.com/@priom7197">
                  <ArticleIcon></ArticleIcon>
                </a>
              </span>
            </p>
          </div>
        </div>
        <BackGround></BackGround>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <ProjectTab></ProjectTab>
    </>
  );
};

export default Home;
