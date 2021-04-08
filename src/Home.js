import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import space from "./images/gif/space.gif";

import "./Home.css";
import BackGround from "./BackGround";

const Home = props => {
  return (
    <div className='home'>
      <div className='home__item'>
        <h1>
          Hi, I am{" "}
          <span className='home__name'>
            Md. Sharif Alam{" "}
          </span>
        </h1>
        <p>
          Software Engineer / Full-Stack Multi Platform
          Software Developer.{" "}
        </p>
        <img style={{ height: "100px" }} src={space}></img>
        <div className='home__icons'>
          <p>
            <span>
              {" "}
              <a href='https://www.linkedin.com/in/md-sharif-alam/'>
                <LinkedInIcon></LinkedInIcon>
              </a>
            </span>
            <span>
              {" "}
              <a href='https://github.com/Priom7'>
                <GitHubIcon></GitHubIcon>
              </a>
            </span>
          </p>
        </div>
      </div>
      <BackGround></BackGround>
    </div>
  );
};

export default Home;
