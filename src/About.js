import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import CodeIcon from "@material-ui/icons/Code";
import TimerIcon from "@material-ui/icons/Timer";
import WorkIcon from "@material-ui/icons/Work";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import "./About.css";

const About = (props) => {
  return (
    <div className='about'>
      <a
        style={{ alignSelf: "center" }}
        href='https://drive.google.com/file/d/1KyWaHRVpExGrP4r0WMnmtuOb7Uw9thGh/view?usp=sharing'
      >
        {" "}
        <Button
          variant='contained'
          color='primary'
          size='large'
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

      <div className='about__objective'>
        <h1 className='about__objectiveHeader'>
          <InfoIcon> </InfoIcon> About Me
        </h1>
        <p className='about__objectiveDetails'>
          I consider myself a{" "}
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
          available.
        </p>
      </div>
      <div className='about__education'>
        <h1 className='about__educationHeader'>
          <CastForEducationIcon> </CastForEducationIcon>{" "}
          Education
        </h1>
        <div className='about__educationItem'>
          <div className='about__educationItem1'>
            <div className='about_educationPeriod'>
              <TimerIcon className='about__icons'>
                {" "}
              </TimerIcon>{" "}
              09/2015 – 12/2019
            </div>

            <div className='about_educationDegree'>
              Bachelor of Science in Computer Science and
              Engineering |{" "}
              <span style={{ color: "#ee4540" }}>
                BSCSE
              </span>
            </div>
            <div className='about_educationUVLocation'>
              <span style={{ color: "#ee4540" }}>
                North South University
              </span>
              , Bashundhara, Dhaka.
            </div>
            <div className='about_educationDegreeFocus'>
              Focus:
              <span style={{ color: "#ee4540" }}>
                {" "}
                Software Engineering and Networking.
              </span>
            </div>
            <div className='about_educationDegreeMedium'>
              Medium of Instruction: English
            </div>
          </div>
          <div className='about__educationItem2'>
            <div className='about_educationPeriod'>
              <TimerIcon className='about__icons'>
                {" "}
              </TimerIcon>{" "}
              04/2013 – 05/2015
            </div>
            <div className='about_educationDegree'>
              Higher Secondary Certificate |
              <span style={{ color: "#ee4540" }}> HSC</span>
            </div>
            <div className='about_educationUVLocation'>
              Uttara High School and College, Uttara, Dhaka.
            </div>
            <div className='about_educationDegreeFocus'>
              Focus: Science
            </div>
            <div className='about_educationDegreeMedium'>
              Medium of Instruction: Bengali
            </div>
          </div>
          <div className='about__educationItem3'>
            <div className='about_educationPeriod'>
              <TimerIcon className='about__icons'>
                {" "}
              </TimerIcon>{" "}
              01/2011 – 01/2013
            </div>
            <div className='about_educationDegree'>
              Secondary School Certificate |{" "}
              <span style={{ color: "#ee4540" }}> SSC</span>
            </div>
            <div className='about_educationUVLocation'>
              Tongi Pilot School and Girls College, Tongi,
              Gazipur.
            </div>
            <div className='about_educationDegreeFocus'>
              Focus: Science.
            </div>
            <div className='about_educationDegreeMedium'>
              Medium of Instruction: Bengali
            </div>
          </div>
        </div>
      </div>
      <div className='about_items'>
        <div className='about__experience'>
          <h1 className='about__experienceHeader'>
            <WorkIcon> </WorkIcon> Work Experience
          </h1>
          <div className='about__experienceItem'>
            <div className='about__experienceItem1'>
              <div className='about_experiencePeriod'>
                <TimerIcon className='about__icons'>
                  {" "}
                </TimerIcon>{" "}
                2/2019 – 6/2019
              </div>
              <div className='about_experienceTitle'>
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Software Engineer Intern at North South
                  University{" "}
                </span>
                (2/2019 – 6/2019)
              </div>
              <div className='about_experienceDetails'>
                <p>
                  Developed an Asset Management System (Web
                  application) for storing the stock
                  information of the electronic
                  assets/devices and track their fault
                  status through reports from users.
                </p>
              </div>
              <div className='about_experienceFeatures'>
                <span style={{ color: "#ee4540" }}>
                  Some Key Features -{" "}
                </span>{" "}
                Data Entry (work order, suppliers details,
                asset details etc.), Asset Allocation
                (allocate/deallocate to users, labs etc.),
                Report issues (create ticket, report issues
                on assets), Assign Task (assign reported
                tasks to support stuff), Update working
                status (ticket open/closed/working etc.).
              </div>
              <div className='about_about_experienceTools'>
                Languages and Technology - PHP (Framework -
                Laravel), JavaScript, HTML, CSS, MySQL,
                Ajax, JQuery.
              </div>
              <div className='about_about_experienceLinks'>
                GitHub -
                https://github.com/Priom7/Internship.git
              </div>
            </div>
          </div>
        </div>

        <div className='about__training'>
          <h1 className='about__trainingHeader'>
            <CodeIcon> </CodeIcon> Workshops & Trainings
          </h1>
          <div className='about__trainingItem'>
            <div className='about__trainingItem1'>
              <div className='about_trainingPeriod'>
                <TimerIcon className='about__icons'>
                  {" "}
                </TimerIcon>{" "}
                11/2017 – 11/2017
              </div>
              <div className='about_trainingTitle'>
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Google Developer DevFest Bangladesh 2017
                </span>
              </div>
              <div className='about_trainingDetails'>
                <p>
                  Successfully completed the workshop on
                  google products and Firebase technology
                  sponsored by GDG Dhaka, Whiteboard &
                  Preneural Lab.
                </p>
              </div>
            </div>
            <div className='about__trainingItem2'>
              <div className='about_trainingPeriod'>
                <TimerIcon className='about__icons'>
                  {" "}
                </TimerIcon>{" "}
                12/2017 – 03/2018
              </div>
              <div className='about_trainingTitle'>
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Top-up IT Training (Android Application
                  Development)
                </span>
              </div>
              <div className='about_trainingDetails'>
                <p>
                  Successfully completed Top-up IT Training,
                  in the month of March 2018 conducted by
                  Ernst & Young LLP, India under Leveraging
                  ICT for Growth, Employment and Governance
                  (LICT) Project of Bangladesh Computer
                  Council (BCC), ICT Division, People's
                  Republic of Bangladesh on Android under
                  NASSCOM IT-ITES Sector Skill Council (SSC)
                  Certification. The program is certified by
                  George Washington University, USA.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='about_volunteering'>
          <h1 className='about__volunteeringHeader'>
            <AccessibilityNewIcon> </AccessibilityNewIcon>{" "}
            Volunteering
          </h1>
          <div className='about_volunteeringItem'>
            <div className='about_volunteeringItem1'>
              <div className='about_volunteeringPeriod'>
                <TimerIcon className='about__icons'>
                  {" "}
                </TimerIcon>{" "}
                01/2007 – 06/2011
              </div>
              <div className='about_volunteeringTitle'>
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Bangladesh Scouts– Social Cause
                </span>
              </div>
              <div className='about_volunteeringDetails'>
                <p>
                  Used to lead my Primary School Scout
                  Squads from the front as Squad Leader from
                  2010- 2011. Actively took part in various
                  socio-cultural activities, maintaining
                  disciplinary of school premises and some
                  social welfare activities like collecting
                  and distributing helps and funds for the
                  people affected by natural disasters.
                </p>
              </div>
            </div>
            <div className='about_volunteeringItem2'>
              <div className='about_volunteeringPeriod'>
                <TimerIcon className='about__icons'>
                  {" "}
                </TimerIcon>{" "}
                01/2011 – 06/2013
              </div>
              <div className='about_volunteeringTitle'>
                <span style={{ color: "#ee4540" }}>
                  {" "}
                  Bangladesh National Cadet Corps (BNCC)
                </span>
              </div>
              <div className='about_volunteeringDetails'>
                <p>
                  Used to lead my High School BNCC platoon
                  from the front as Platoon Leader (Cadet
                  Corporal). Took active participation in
                  various socio-cultural reforms, events
                  dedicated for public/social welfare.
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
