import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Home.css";
import BackGround from "./BackGround";

const Home = (props) => {
  return (
    <div>
      <div className='home'>
        <h1>
          Hi, I am{" "}
          <span className='home__name'>
            Md. Sharif Alam{" "}
          </span>
        </h1>
        <p>
          Software Engineer / Full-Stack multi platform
          software developer.{" "}
        </p>
        <div className='home__icons'>
          <p>
            <span>
              {" "}
              <LinkedInIcon></LinkedInIcon>
            </span>
            <span>
              {" "}
              <GitHubIcon></GitHubIcon>
            </span>
          </p>
        </div>
      </div>
      <BackGround></BackGround>
    </div>
  );
};

export default Home;
