import React from "react";
import BackGround from "./BackGround";
import "./About.css";

const About = (props) => {
  return (
    <div className='about'>
      <button>Download CV</button>

      <div className='about__objective'>
        <h1 className='about__objectiveHeader'>
          Objective
        </h1>
        <p className='about__objectiveDetails'>
          To work in such an environment where I can use my
          maximum potential while working and enhance my
          professional skills with learning and experience
          for career growth.
        </p>
      </div>
      <div className='about__education'>
        <h1 className='about__educationHeader'>
          Education
        </h1>
        <div className='about_educationPeriod'>
          09/2015 – 12/2019
        </div>

        <div className='about_educationDegree'>
          Bachelor of Science in Computer Science and
          Engineering | BSCSE
        </div>
        <div className='about_educationUVLocation'>
          North South University, Bashundhara, Dhaka.
        </div>
        <div className='about_educationDegreeFocus'>
          Focus: Software Engineering and Networking.
        </div>
        <div className='about_educationDegreeMedium'>
          Medium of Instruction: English
        </div>

        <div className='about_educationPeriod'>
          09/2015 – 12/2019
        </div>
        <div className='about_educationDegree'>
          Bachelor of Science in Computer Science and
          Engineering | BSCSE
        </div>
        <div className='about_educationUVLocation'>
          North South University, Bashundhara, Dhaka.
        </div>
        <div className='about_educationDegreeFocus'>
          Focus: Software Engineering and Networking.
        </div>
        <div className='about_educationDegreeMedium'>
          Medium of Instruction: English
        </div>
        <div className='about_educationPeriod'>
          09/2015 – 12/2019
        </div>
        <div className='about_educationDegree'>
          Bachelor of Science in Computer Science and
          Engineering | BSCSE
        </div>
        <div className='about_educationUVLocation'>
          North South University, Bashundhara, Dhaka.
        </div>
        <div className='about_educationDegreeFocus'>
          Focus: Software Engineering and Networking.
        </div>
        <div className='about_educationDegreeMedium'>
          Medium of Instruction: English
        </div>
      </div>

      <div className='about__experience'>
        <h1 className='about__experienceHeader'>
          Work Experience
        </h1>
        <div className='about_experiencePeriod'>
          2/2019 – 6/2019
        </div>
        <div className='about_experienceTitle'>
          Software Engineer Intern at North South University
          (2/2019 – 6/2019)
        </div>
        <div className='about_experienceDetails'>
          <p>
            Developed an Asset Management System (Web
            application) for storing the stock information
            of the electronic assets/devices and track their
            fault status through reports from users.
          </p>
        </div>
        <div className='about_experienceFeatures'>
          Some Key Features - Data Entry (work order,
          suppliers details, asset details etc.), Asset
          Allocation (allocate/deallocate to users, labs
          etc.), Report issues (create ticket, report issues
          on assets), Assign Task (assign reported tasks to
          support stuff), Update working status (ticket
          open/closed/working etc.).
        </div>
        <div className='about_about_experienceTools'>
          Languages and Technology - PHP (Framework -
          Laravel), JavaScript, HTML, CSS, MySQL, Ajax,
          JQuery.
        </div>
        <div className='about_about_experienceLinks'>
          GitHub - https://github.com/Priom7/Internship.git
        </div>
      </div>

      <div className='about__training'>
        <h1 className='about__trainingHeader'>
          Workshops & Trainings
        </h1>
        <div className='about_trainingPeriod'>
          11/2017 – 11/2017
        </div>
        <div className='about_trainingTitle'>
          Google Developer DevFest Bangladesh 2017
        </div>
        <div className='about_trainingDetails'>
          <p>
            Successfully completed the workshop on google
            products and Firebase technology sponsored by
            GDG Dhaka, Whiteboard & Preneural Lab.
          </p>
        </div>
        <div className='about_trainingPeriod'>
          12/2017 – 03/2018
        </div>
        <div className='about_trainingTitle'>
          Top-up IT Training (Android Application
          Development)
        </div>
        <div className='about_trainingDetails'>
          <p>
            Successfully completed Top-up IT Training, in
            the month of March 2018 conducted by Ernst &
            Young LLP, India under Leveraging ICT for
            Growth, Employment and Governance (LICT) Project
            of Bangladesh Computer Council (BCC), ICT
            Division, People's Republic of Bangladesh on
            Android under NASSCOM IT-ITES Sector Skill
            Council (SSC) Certification. The program is
            certified by George Washington University, USA.
          </p>
        </div>
      </div>

      <div className='about_volunteering'>
        <h1 className='about__volunteeringHeader'>
          Volunteering
        </h1>
        <div className='about_volunteeringPeriod'>
          01/2007 – 06/2011
        </div>
        <div className='about_volunteeringTitle'>
          Bangladesh Scouts– Social Cause
        </div>
        <div className='about_volunteeringDetails'>
          <p>
            Used to lead my Primary School Scout Squads from
            the front as Squad Leader from 2010- 2011.
            Actively took part in various socio-cultural
            activities, maintaining disciplinary of school
            premises and some social welfare activities like
            collecting and distributing helps and funds for
            the people affected by natural disasters.
          </p>
        </div>
        <div className='about_volunteeringPeriod'>
          01/2011 – 06/2013
        </div>
        <div className='about_volunteeringTitle'>
          Bangladesh National Cadet Corps (BNCC)
        </div>
        <div className='about_volunteeringDetails'>
          <p>
            Used to lead my High School BNCC platoon from
            the front as Platoon Leader (Cadet Corporal).
            Took active participation in various
            socio-cultural reforms, events dedicated for
            public/social welfare.
          </p>
        </div>
      </div>
      <BackGround></BackGround>
    </div>
  );
};

export default About;
