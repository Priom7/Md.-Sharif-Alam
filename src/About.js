import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import CodeIcon from "@material-ui/icons/Code";
import TimerIcon from "@material-ui/icons/Timer";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import milil from "./images/milil (1).jpeg";
import nsu from "./images/nsu.png";
import uhsc from "./images/uhsc.png";
import bncc from "./images/bncc.jpeg";
import scout from "./images/sccout.png";
import tpsgc from "./images/tpsgc.jpeg";
import lict from "./images/lict.jpg";
import gdg from "./images/gdg2.png";
import space2 from "./images/gif/space4.gif";
import gre from "./images/gre2.png";
import pen from "./images/academic/pen.jpeg";
import "./About.css";

const About = (props) => {
  return (
    <div className="about">
      <a
        style={{ alignSelf: "center" }}
        href="https://docs.google.com/document/d/1ZdsyXW69N45soBMAyVRMkjh5l9t9DsxynMye27iAEU4/edit?usp=sharing"
      >
        <img style={{ height: "100px" }} src={space2}></img>{" "}
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          style={{
            background: "#ee4540",
            margin: "10px",
            width: "300px",
            alignSelf: "center",
            color: "wheat",
          }}
        >
          Download CV
        </Button>
      </a>

      <div className="about__objective">
        <h1 className="about__objectiveHeader">
          <InfoIcon> </InfoIcon> About Me
        </h1>
        <p className="about__objectiveDetails">
          {/* I consider myself a{" "}
          <span style={{ color: "#ee4540" }}>
            Programmer
          </span>{" "}
          first then a{" "}
          <span style={{ color: "#ee4540" }}>
            Software Engineer
          </span>
          . It really doesn't matter what languages, tools,
          programmes, frameworks etc. are out there, it's
          just a matter of time for me to{" "}
          <span style={{ color: "#ee4540" }}>adopt</span>. I
          do love my profession and{" "}
          <span style={{ color: "#ee4540" }}>
            {" "}
            passionate
          </span>{" "}
          about it. As a person I am friendly,{" "}
          <span style={{ color: "#ee4540" }}>
            Hardworking
          </span>
          ,
          <span style={{ color: "#ee4540" }}>
            {" "}
            Adaptive
          </span>{" "}
          and{" "}
          <span style={{ color: "#ee4540" }}>
            Self-motivated
          </span>
          . I always try to keep myself{" "}
          <span style={{ color: "#ee4540" }}>Updated</span>{" "}
          with the newest technologies and the tools
          available. */}
          Hi, I am Sharif. Full Stack Multi-Platform Software Engineer. I have
          experience working in many fields for the last 4 years out of
          curiosity, eager to learn and explore more. Android Application
          Development (Java, React Native), Game Development (Unity 3D, C#),
          Animation/3D modeling (Blender 3D), Web Application Development(MERN
          Stack, Laravel+SQL+Vue and ASP.NET MVC).
          <br></br> Successfully designed and developed software solutions with
          many unique features that are currently serving people in the
          industries like Insurance, hospitals, Importer Exporter Companies, and
          Educational institutions.
          <br></br> Filed of Interests: Software Development, System
          Design/Architect, Testing, IoT, Robotics/AI.
        </p>
      </div>
      <div className="about__education">
        <h1 className="about__educationHeader">
          <CastForEducationIcon> </CastForEducationIcon> Education
        </h1>
        <div className="about__educationItem">
          <div className="about__educationItem1">
            <Avatar
              style={{ background: "white", objectFit: "contain" }}
              src={gre}
            ></Avatar>
            <div className="about_educationPeriod">
              <TimerIcon className="about__icons"> </TimerIcon> 01/2023 –
              01/2024
            </div>

            <div className="about_educationDegree">
              Master of Science in Computing and Information Ststem |{" "}
              <span style={{ color: "#ee4540" }}>MSCIS</span>
            </div>
            <div className="about_educationUVLocation">
              <span style={{ color: "#ee4540" }}>University of Greenwich</span>,
              London, UK. 🇬🇧
            </div>
            <div className="about_educationDegreeFocus">
              Focus:
              <span style={{ color: "#ee4540" }}>
                {" "}
                Web Engineering · Project Management · IT Strategy · User
                Experience (UX) · User-centered Design · Mobile Application
                Development
              </span>
            </div>
            {/* <div className="about_educationDegreeMedium">
              Medium of Instruction: English
            </div> */}
          </div>

          <div className="about__educationItem1">
            <Avatar style={{ background: "white" }} src={nsu}></Avatar>
            <div className="about_educationPeriod">
              <TimerIcon className="about__icons"> </TimerIcon> 09/2015 –
              12/2019
            </div>

            <div className="about_educationDegree">
              Bachelor of Science in Computer Science and Engineering |{" "}
              <span style={{ color: "#ee4540" }}>BSCSE</span>
            </div>
            <div className="about_educationUVLocation">
              <span style={{ color: "#ee4540" }}>North South University</span>,
              Bashundhara, Dhaka. 🇧🇩
            </div>
            <div className="about_educationDegreeFocus">
              Focus:
              <span style={{ color: "#ee4540" }}>
                {" "}
                Software Engineering and Networking.
              </span>
            </div>
            {/* <div className="about_educationDegreeMedium">
              Medium of Instruction: English
            </div> */}
          </div>
          {/* <div className="about__educationItem2">
            <Avatar style={{ background: "white" }} src={uhsc}></Avatar>
            <div className="about_educationPeriod">
              <TimerIcon className="about__icons"> </TimerIcon> 04/2013 –
              05/2015
            </div>
            <div className="about_educationDegree">
              Higher Secondary Certificate |
              <span style={{ color: "#ee4540" }}> HSC</span>
            </div>
            <div className="about_educationUVLocation">
              Uttara High School and College, Uttara, Dhaka.
            </div>
            <div className="about_educationDegreeFocus">Focus: Science</div>
            <div className="about_educationDegreeMedium">
              Medium of Instruction: Bengali
            </div>
          </div> */}
          {/* <div className="about__educationItem3">
            <Avatar style={{ background: "white" }} src={tpsgc}></Avatar>
            <div className="about_educationPeriod">
              <TimerIcon className="about__icons"> </TimerIcon> 01/2011 –
              01/2013
            </div>
            <div className="about_educationDegree">
              Secondary School Certificate |{" "}
              <span style={{ color: "#ee4540" }}> SSC</span>
            </div>
            <div className="about_educationUVLocation">
              Tongi Pilot School and Girls College, Tongi, Gazipur.
            </div>
            <div className="about_educationDegreeFocus">Focus: Science.</div>
            <div className="about_educationDegreeMedium">
              Medium of Instruction: Bengali
            </div>
          </div> */}
        </div>
      </div>
      <div className="about_items">
        <div className="about__experience">
          <h1 className="about__experienceHeader">
            <WorkIcon> </WorkIcon> Work Experience
          </h1>
          <div className="about__experienceItem">
            <div className="about__experienceItem">
              <div className="about__experienceItem1">
                <Avatar style={{ background: "white" }} src={pen}></Avatar>
                <div className="about_experiencePeriod">
                  <TimerIcon className="about__icons"> </TimerIcon> 2/2024 –
                  Present
                </div>
                <div className="about_experienceTitle">
                  <span style={{ color: "#ee4540" }}>
                    {" "}
                    Software Developer at Planet Education Network, UK{" "}
                  </span>
                </div>
                <div className="about_experienceDetails">
                  <p>
                    Developing EdTech ERP solutions (Student Information
                    Management System | SIMS, University Admission Portal | UAP
                    etc.).
                  </p>
                </div>
                <div className="about_about_experienceTools">
                  <span style={{ color: "#ee4540" }}>Core Technologies - </span>{" "}
                  PHP (Framework - Laravel), JavaScript, MySQL, AWS, React.
                </div>
              </div>

              <div className="about__experienceItem1">
                <Avatar src={milil}></Avatar>
                <div className="about_experiencePeriod">
                  <TimerIcon className="about__icons"> </TimerIcon> 9/2020 –
                  11/2022
                </div>
                <div className="about_experienceTitle">
                  <span style={{ color: "#ee4540" }}>
                    {" "}
                    Software Engineer at Mercantile Islami Life Insurance Ltd.{" "}
                  </span>
                </div>
                <div className="about_experienceDetails">
                  <p>
                    Developing a complete online Insurance Management System
                    (IMS) as a team member of Full Stack Software Engineers at
                    Information Technology department.
                  </p>
                </div>
                <div className="about_experienceFeatures">
                  <span style={{ color: "#ee4540" }}>Core Technologies - </span>{" "}
                  PHP (Framework - Laravel), JavaScript(Framework - Vue), SQL. .
                </div>
              </div>
            </div>
          </div>

          <div className="about__experienceItem1">
            <Avatar style={{ background: "white" }} src={nsu}></Avatar>
            <div className="about_experiencePeriod">
              <TimerIcon className="about__icons"> </TimerIcon> 2/2019 – 6/2019
            </div>
            <div className="about_experienceTitle">
              <span style={{ color: "#ee4540" }}>
                {" "}
                Software Engineer Intern at North South University{" "}
              </span>
            </div>
            <div className="about_experienceDetails">
              <p>
                Developed an Asset Management System (Web application) for
                storing the stock information of the electronic assets/devices
                and track their fault status through reports from users.
              </p>
            </div>
            <div className="about_about_experienceTools">
              <span style={{ color: "#ee4540" }}>Core Technologies - </span> PHP
              (Framework - Laravel), JavaScript, HTML, CSS, MySQL, Ajax, JQuery.
            </div>
          </div>
        </div>

        <div className="about__training">
          <h1 className="about__trainingHeader">
            <CodeIcon> </CodeIcon> Workshops & Trainings
          </h1>
          <div className="about__trainingItem">
            <div className="about__trainingItem2">
              <Avatar
                style={{
                  background: "white",
                  objectFit: "contain",
                }}
                src={lict}
              ></Avatar>
              <div className="about_trainingPeriod">
                <TimerIcon className="about__icons"> </TimerIcon> 12/2017 –
                03/2018
              </div>
              <div className="about_trainingTitle">
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Top-up IT Training (Android Application Development)
                </span>
              </div>
              <div className="about_trainingDetails">
                <p>
                  Successfully completed Top-up IT Training, in the month of
                  March 2018 conducted by Ernst & Young LLP, India under
                  Leveraging ICT for Growth, Employment and Governance (LICT)
                  Project of Bangladesh Computer Council (BCC), ICT Division,
                  People's Republic of Bangladesh on Android under NASSCOM
                  IT-ITES Sector Skill Council (SSC) Certification. The program
                  is certified by George Washington University, USA.
                </p>
              </div>
            </div>
          </div>
          <div className="about__trainingItem1">
            <Avatar style={{ background: "white" }} src={gdg}></Avatar>
            <div className="about_trainingPeriod">
              <TimerIcon className="about__icons"> </TimerIcon> 11/2017 –
              11/2017
            </div>
            <div className="about_trainingTitle">
              <span style={{ color: "#ee4540" }}>
                {" "}
                Google Developer DevFest Bangladesh 2017
              </span>
            </div>
            <div className="about_trainingDetails">
              <p>
                Successfully completed the workshop on google products and
                Firebase technology sponsored by GDG Dhaka, Whiteboard &
                Preneural Lab.
              </p>
            </div>
          </div>
        </div>

        <div className="about_volunteering">
          <h1 className="about__volunteeringHeader">
            <AccessibilityNewIcon> </AccessibilityNewIcon> Volunteering
          </h1>
          <div className="about_volunteeringItem">
            <div className="about_volunteeringItem2">
              <Avatar style={{ background: "white" }} src={bncc}></Avatar>
              <div className="about_volunteeringPeriod">
                <TimerIcon className="about__icons"> </TimerIcon> 01/2011 –
                06/2013
              </div>
              <div className="about_volunteeringTitle">
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Bangladesh National Cadet Corps (BNCC)
                </span>
              </div>
              <div className="about_volunteeringDetails">
                <p>
                  Used to lead my High School BNCC platoon from the front as
                  Platoon Leader (Cadet Corporal). Took active participation in
                  various socio-cultural reforms, events dedicated for
                  public/social welfare.
                </p>
              </div>
            </div>
            <div className="about_volunteeringItem1">
              <Avatar style={{ background: "white" }} src={scout}></Avatar>
              <div className="about_volunteeringPeriod">
                <TimerIcon className="about__icons"> </TimerIcon> 01/2007 –
                06/2011
              </div>
              <div className="about_volunteeringTitle">
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Bangladesh Scouts– Social Cause
                </span>
              </div>
              <div className="about_volunteeringDetails">
                <p>
                  Used to lead my Primary School Scout Squads from the front as
                  Squad Leader from 2010- 2011. Actively took part in various
                  socio-cultural activities, maintaining disciplinary of school
                  premises and some social welfare activities like collecting
                  and distributing helps and funds for the people affected by
                  natural disasters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
