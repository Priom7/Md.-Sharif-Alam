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

const Skills = (props) => {
  return (
    <div className="skill">
      <div className="skill__item">
        <h1 className="skill__header">
          <CodeIcon style={{ color: "#ee4540" }}> </CodeIcon> Most Recent Work -
          Software Developer (Team Lead) (Jan 2024 - Present)
        </h1>
        <p className="skill__summary">
          🌟 <strong>Planet Education Networks</strong> - Software Developer -
          Team Lead (Full-time) <br />
          📅 <strong>Feb 2024 - Present</strong>  <br />
          📍 <strong>London, England, United Kingdom</strong> · On-site <br />
          <br />
          🚀 <strong>Key Achievements:</strong>
          <ul>
            <li>
              📈 Took full ownership of a robust student management system,
              efficiently handling over 30,000 active students, soon to be
              reached up to 100,000 active students and processing more than
              10,000 applicants per intake. Optimized system and scaled
              infrastructure to support increased loads and traffic.
            </li>
            <li>
              👥 Led cross-functional teams, encompassing coding, recruitment,
              and strategic decision-making. Built and nurtured multiple teams
              through targeted recruitment and comprehensive interviewing
              processes, fostering a collaborative and high-performing
              environment.
            </li>
            <li>
              💡 Significantly improved user experience by optimizing workflows,
              reducing redundant API calls, and enhancing query and search
              operations. Achieved a more efficient and responsive system across
              9 campuses, benefiting students, faculty, and administrative
              staff.
            </li>
            <li>
              🔧 Reduced system redundancy, improving overall efficiency by 40%.
            </li>
            <li>
              📊 Scaled the system to support additional loads, ensuring robust
              and reliable operations.
            </li>
            <li>
              🔍 Played a pivotal role in the company's acquisition process by
              evaluating and conducting thorough technical inspections, ensuring
              optimal investment decisions.
            </li>
            <li>
              ⚡ Achieved a 30% increase in system performance through targeted
              optimizations and enhancements.
            </li>
          </ul>
          <br />
          🛠️ <strong>Key Technologies:</strong> Vanilla PHP, JavaScript (Vue),
          Laravel, React, SQL, Docker, AWS, DevOps. <br />
          📚 <strong>Key Project:</strong> Student Information Management System
          (SIMS): Admission Portal, Student Portal, Agent Portal, Interviewer
          Portal, and Faculty Portal, designed using a microservices
          architecture.
        </p>
      </div>
      <div className="skill__details">
        <h1 className="skill__detailsHeader">
          <ListIcon></ListIcon>Skill Set
        </h1>
        <div className="skill__detailsItem">
          <div className="skill__detailsLanguages">
            <div className="skill__detailsLanguagesHeader">
              <span style={{ color: "#ee4540" }}>
                {" "}
                <GTranslateIcon className="skill__icons"> </GTranslateIcon>
                Languages
              </span>
            </div>
            <div className="skill__detailsLanguages_node">Node JS</div>
            <div className="skill__detailsLanguages_js">JavaScript</div>
            <div className="skill__detailsLanguages_java">Java</div>
            <div className="skill__detailsLanguages_php">php</div>
            <div className="skill__detailsLanguages_c">C#</div>
          </div>

          <div className="skill__detailsDatabase">
            <div className="skill__detailsDatabaseHeader">
              <span style={{ color: "#ee4540" }}>
                <StorageIcon className="skill__icons"></StorageIcon> Database
              </span>
            </div>
            <div className="skill__detailsLanguages_mysql">MySQL</div>
            <div className="skill__detailsLanguages_mongodb">MongoDB</div>
            <div className="skill__detailsLanguages_firebase">Firebase</div>
            <div className="skill__detailsLanguages_firestore">Firestore</div>
          </div>

          <div className="skill__detailsOs">
            <div className="skill__detailsOsHeader">
              <span style={{ color: "#ee4540" }}>
                <AndroidIcon className="skill__icons"></AndroidIcon> Operating
                System
              </span>
            </div>
            <div className="skill__detailsLanguages_windows">Windows</div>
            <div className="skill__detailsLanguages_linux">Linux</div>
            <div className="skill__detailsLanguages_android">Android</div>
            <div className="skill__detailsOsHeader">
              <span style={{ color: "#ee4540" }}>
                <AndroidIcon className="skill__icons"></AndroidIcon> Prototyping
                & Documentation Tools
              </span>
            </div>
            <div className="skill__detailsLanguages_windows">Axure RP</div>
            <div className="skill__detailsLanguages_windows">DB Designer</div>
            <div className="skill__detailsLanguages_windows">LucidChart</div>
          </div>
          <div className="skill__detailsFramework">
            <div className="skill__detailsFrameworkHeader">
              <span style={{ color: "#ee4540" }}>
                <PanToolIcon className="skill__icons"></PanToolIcon> Framework &
                Libraries
              </span>
            </div>
            <div className="skill__detailsFramework_express">Express JS</div>
            <div className="skill__detailsFramework_react">
              React JS (Redux & Hooks)
            </div>
            <div className="skill__detailsFramework_react">Vue JS</div>
            <div className="skill__detailsFramework_laravel">Laravel</div>
            <div className="skill__detailsFramework_laravel">Postman</div>
            <div className="skill__detailsFramework_flexbox">FlexBox</div>
            <div className="skill__detailsFramework_material">Material UI</div>
            <div className="skill__detailsFramework_bootstrap">Bootstrap</div>
          </div>

          <div className="skill__detailsHosting">
            <div className="skill__detailsHostingHeader">
              <span style={{ color: "#ee4540" }}>
                <CloudUploadIcon className="skill__icons"></CloudUploadIcon>{" "}
                DevOps/Hosting
              </span>
            </div>
            <div className="skill__detailsHosting_netlify">Netlify</div>
            <div className="skill__detailsHosting_heroku">Heroku</div>
            <div className="skill__detailsHosting_firebase">
              Firebase Hosting
            </div>
            <div className="skill__detailsHosting_firebase">AWS</div>
            <div className="skill__detailsHosting_firebase">Azure DevOps</div>
          </div>

          <div className="skill__detailsVersion">
            <div className="skill__others1">
              <span style={{ color: "#ee4540" }}>
                <GitHubIcon className="skill__icons"></GitHubIcon> Version
                Control
              </span>
            </div>
            <div className="skill__others2">GitHub</div>
            <div className="skill__others3">Git</div>
            <div className="skill__others4">BitBucket</div>
            <div className="skill__others4">Docker</div>
          </div>
        </div>
      </div>
      <SkillImageBanner></SkillImageBanner>
    </div>
  );
};

export default Skills;
