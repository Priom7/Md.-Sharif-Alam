import React from "react";
import softwareImg from "./images/software.png";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import StorageIcon from "@material-ui/icons/Storage";
import GitHubIcon from "@material-ui/icons/GitHub";
import AndroidIcon from "@material-ui/icons/Android";
import PanToolIcon from "@material-ui/icons/PanTool";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import CodeIcon from "@material-ui/icons/Code";
import "./Skills.css";
import SkillImageBanner from "./SkillImageBanner";

const Skills = props => {
  return (
    <div className='skill'>
      <div className='skill__item'>
        <h1 className='skill__header'>
          <CodeIcon> </CodeIcon>Skills
        </h1>
        <p className='skill__summary'>
          I am currently working with{" "}
          <span style={{ color: "#ee4540" }}> MongoDB</span>
          ,{" "}
          <span style={{ color: "#ee4540" }}>Express</span>,
          <span style={{ color: "#ee4540" }}>React JS</span>{" "}
          and{" "}
          <span style={{ color: "#ee4540" }}>Node JS</span>{" "}
          ( <span style={{ color: "#ee4540" }}>MERN </span>
          Stack).{" "}
          <span style={{ color: "#ee4540" }}>
            Full Stack Software Development
          </span>{" "}
          is my area of expertise. I have worked on several
          small to medium size projects with MERN stack.
          During my Internship period I have experience
          working with{" "}
          <span style={{ color: "#ee4540" }}>Laravel</span>,{" "}
          <span style={{ color: "#ee4540" }}>MySQL</span>{" "}
          and Bootstrap on Industry level projects. I am
          very comfortable working with{" "}
          <span style={{ color: "#ee4540" }}>Java</span>,{" "}
          <span style={{ color: "#ee4540" }}>
            JavaScript
          </span>
          ,<span style={{ color: "#ee4540" }}>PHP</span> and
          basics of C, C++, Python.
        </p>
      </div>
      <div className='skill__details'>
        <h1 className='skill__detailsHeader'>
          <ListIcon></ListIcon>Skill Set
        </h1>
        <div className='skill__detailsItem'>
          <div className='skill__detailsLanguages'>
            <div className='skill__detailsLanguagesHeader'>
              <span style={{ color: "#ee4540" }}>
                {" "}
                <GTranslateIcon className='skill__icons'>
                  {" "}
                </GTranslateIcon>
                Languages
              </span>
            </div>
            <div className='skill__detailsLanguages_node'>
              Node JS
            </div>
            <div className='skill__detailsLanguages_js'>
              JavaScript
            </div>
            <div className='skill__detailsLanguages_java'>
              Java
            </div>
            <div className='skill__detailsLanguages_php'>
              php
            </div>
            <div className='skill__detailsLanguages_c'>
              C#
            </div>
          </div>

          <div className='skill__detailsDatabase'>
            <div className='skill__detailsDatabaseHeader'>
              <span style={{ color: "#ee4540" }}>
                <StorageIcon className='skill__icons'></StorageIcon>{" "}
                Database
              </span>
            </div>
            <div className='skill__detailsLanguages_mysql'>
              MySQL
            </div>
            <div className='skill__detailsLanguages_mongodb'>
              MongoDB
            </div>
            <div className='skill__detailsLanguages_firebase'>
              Firebase
            </div>
            <div className='skill__detailsLanguages_firestore'>
              Firestore
            </div>
          </div>

          <div className='skill__detailsOs'>
            <div className='skill__detailsOsHeader'>
              <span style={{ color: "#ee4540" }}>
                <AndroidIcon className='skill__icons'></AndroidIcon>{" "}
                Operating System
              </span>
            </div>
            <div className='skill__detailsLanguages_windows'>
              Windows
            </div>
            <div className='skill__detailsLanguages_linux'>
              Linux
            </div>
            <div className='skill__detailsLanguages_android'>
              Android
            </div>
            <div className='skill__detailsOsHeader'>
              <span style={{ color: "#ee4540" }}>
                <AndroidIcon className='skill__icons'></AndroidIcon>{" "}
                Prototyping & Documentation Tools
              </span>
            </div>
            <div className='skill__detailsLanguages_windows'>
              Axure RP
            </div>
            <div className='skill__detailsLanguages_windows'>
              DB Designer
            </div>
            <div className='skill__detailsLanguages_windows'>
            LucidChart
            </div>
          </div>
          <div className='skill__detailsFramework'>
            <div className='skill__detailsFrameworkHeader'>
              <span style={{ color: "#ee4540" }}>
                <PanToolIcon className='skill__icons'></PanToolIcon>{" "}
                Framework & Libraries
              </span>
            </div>
            <div className='skill__detailsFramework_express'>
              Express JS
            </div>
            <div className='skill__detailsFramework_react'>
              React JS (Redux & Hooks)
            </div>
            <div className='skill__detailsFramework_react'>
              Vue JS
            </div>
            <div className='skill__detailsFramework_laravel'>
              Laravel
            </div>
            <div className='skill__detailsFramework_laravel'>
              Postman
            </div>
            <div className='skill__detailsFramework_flexbox'>
              FlexBox
            </div>
            <div className='skill__detailsFramework_material'>
              Material UI
            </div>
            <div className='skill__detailsFramework_bootstrap'>
              Bootstrap
            </div>
          </div>

          <div className='skill__detailsHosting'>
            <div className='skill__detailsHostingHeader'>
              <span style={{ color: "#ee4540" }}>
                <CloudUploadIcon className='skill__icons'></CloudUploadIcon>{" "}
                Hosting
              </span>
            </div>
            <div className='skill__detailsHosting_netlify'>
              Netlify
            </div>
            <div className='skill__detailsHosting_heroku'>
              Heroku
            </div>
            <div className='skill__detailsHosting_firebase'>
              Firebase Hosting
            </div>
          </div>

          <div className='skill__detailsVersion'>
            <div className='skill__others1'>
              <span style={{ color: "#ee4540" }}>
                <GitHubIcon className='skill__icons'></GitHubIcon>{" "}
                Version Control
              </span>
            </div>
            <div className='skill__others2'>GitHub</div>
            <div className='skill__others3'>Git</div>
            <div className='skill__others4'>BitBucket</div>
            <div className='skill__others4'>Docker</div>
          </div>
        </div>
      </div>
      <SkillImageBanner></SkillImageBanner>
    </div>
  );
};

export default Skills;
