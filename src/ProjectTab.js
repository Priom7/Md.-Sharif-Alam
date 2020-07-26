import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProjectList from "./ProjectList";
import myFlix from "./images/my-flix-web.PNG";
import amazon from "./images/ecommerce2.PNG";
import covid from "./images/covid19-1-web.PNG";
import weather from "./images/weather-phone.PNG";
import mygram from "./images/mygra1.PNG";
import share from "./images/Share-1-web.PNG";
import tours from "./images/myTours.PNG";
import profile from "./images/profile.PNG";
import sla from "./images/academic/cse299.png";
import java from "./images/academic/cse215.png";
import tutor from "./images/academic/cse311.png";
import printer from "./images/academic/cse499.jpg";
import translator from "./images/academic/cse327.PNG";
import dld from "./images/academic/cse231.jpg";
import rover from "./images/academic/cse323.jpg";
import intern from "./images/academic/cse498.PNG";
import construction from "./images/construction.png";
import "./ProjectTab.css";
import AcademicProjectList from "./AcademicProjectList";
import FunProjectList from "./FunProjectList";

const Project = [
  {
    title: "My Movies",
    projectType: "frontend",
    description:
      "Movie application data fetched form TMDB and users can watch movie trailers fetched from YOUTUBE by clicking on first row banners. (Design inspired by Netflix)",
    imageUrl: myFlix,
    projectUrl: "https://netflix-clone-app-396c5.web.app/",
    code:
      "https://github.com/Priom7/Netflix-Clone-With-React-JS",
    details: [
      "React JS",
      "UI",
      "tmdb-api",
      "movie-trailer",
      "react-youtube",
      "firebase-hosting",
      "flex-box",
      "axios",
    ],
  },
  {
    title: "Ecommerce Application",
    projectType: "frontend",
    description:
      "E-Commerce Web Application. Users can look for products and add/remove items to shopping basket and subtotal will be generated automatically. (Design inspired by Amazon)",
    imageUrl: amazon,
    projectUrl:
      "https://xenodochial-spence-dd4817.netlify.app/",
    code:
      "https://github.com/Priom7/Ecommerce-Web-Application",
    details: [
      "React JS",
      "redux-store",
      "netlify-deployment",
      "firebase-auth",
      "flex-box",
    ],
  },
  {
    title: "My Tours (Full Stack MERN)",
    projectType: "frontend",
    description:
      "An WEB App where users can share their tours experience with location (Google Map API) and details. Images are auto deleted as it's using Heroku free Package",
    imageUrl: tours,
    projectUrl: "https://mern-my-tours.web.app/",
    code: "https://github.com/Priom7/Node_Express_Backend",
    details: [
      "MongoDb",
      "Express JS",
      "React JS",
      "Node JS",
      "Google Map API",
      "mongoose",
      "json-webtoken",
      "multer",
      "firebase-deployment (frontend)",
      "heroku-deployment (backend)",
    ],
  },
  {
    title: "Covid-19 Info.",
    projectType: "frontend",
    description:
      "Covid-19 info tracker PWA on daily basis. Users can search data of individual Country",
    imageUrl: covid,
    projectUrl:
      "https://priceless-wescoff-783a66.netlify.app/",
    code: "https://github.com/Priom7/COVID_19_info",
    details: [
      "React JS",
      "material-ui",
      "open-source-api",
      "chart-js",
      "react-countUp",
      "flex-box",
      "axios",
    ],
  },
  {
    title: "City Weather Info",
    projectType: "frontend",
    description:
      "Weather info PWA where users can get weather data of cities",
    imageUrl: weather,
    projectUrl: "https://gifted-joliot-e609d7.netlify.app/",
    code:
      "https://github.com/Priom7/Weather-Forecasting-PWA",
    details: [
      "React JS",
      "Openweathermap-api",
      "flex-box",
      "axios",
    ],
  },
  {
    title: "Click and Share (Full Stack)",
    projectType: "frontend",
    description:
      "Social media application like Instagram where users can share images and comment on them ",
    imageUrl: mygram,
    projectUrl:
      "https://github.com/Priom7/Click-Share-My-Gram-Social-Media-",
    code:
      "https://github.com/Priom7/Click-Share-My-Gram-Social-Media-",
    details: [
      "React JS",
      "material-ui",
      "firebase-auth",
      "firestore-database",
      "firebase-hosting",
      "flex-box",
    ],
  },
  {
    title: "Share A Thought (Full Stack)",
    projectType: "frontend",
    description:
      "Social media application where users can share posts. Real time activity notifications implemented.",
    imageUrl: share,
    projectUrl: "https://brave-sammet-880409.netlify.app/",
    code: "https://github.com/Priom7/Share-A-Thought-",
    details: [
      "React JS",
      "Redux",
      "firebase-authentication",
      "firestore-database",
      "material-ui",
      "firebase-hosting",
    ],
  },
  {
    title: "3D Printer For Industrial Usage (CSE 499)",
    projectType: "academic",
    description:
      "3D printer made with Arduino Mega microprocessor, RAMPS shield etc. at a very low cost. These product is capable of printing 3D designed shapes.",
    imageUrl: printer,
    projectUrl:
      "https://drive.google.com/file/d/1NEKJ08FxGFf3bOwdv0kKvPtE_30G292P/preview",

    code: "https://www.youtube.com/embed/sKB1i9OT9A0",
    details: [
      "Arduino Mega",
      "RAMPS",
      "Marlin Firmware",
      "Check attached documents for more.",
    ],
  },
  {
    title: "Software Engineer Intern (CSE 498)",
    projectType: "academic",
    description:
      "Developed an Asset Management System (Web application) for storing the stock information of the electronic assets/devices and track their fault status through reports from users.",
    imageUrl: intern,
    projectUrl:
      "https://drive.google.com/file/d/17bKbt0sfUdEGHjLHbfWyG5nE7P9UeH_j/preview",
    code: "https://github.com/Priom7/AssetManagement",
    details: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "blade-templateEngine",
      "HTML",
      "CSS",
      "Jquery",
      "AJAX",
    ],
  },
  {
    title:
      "Speaking and Listening Assistant (SLA) (CSE 299)",
    projectType: "academic",
    description:
      "Speaking and Listening Assistant (SLA) is a device for helping the deaf and mute people in their daily life. This system contains Smart Gloves Device with sensors attached and an Android Application",
    imageUrl: sla,
    projectUrl:
      "https://drive.google.com/file/d/1o8KqV0dgS9UB0drIF60f0nv88uwM8M0T/preview",
    code:
      "https://github.com/Priom7/CSE-299-Speaking-and-Listening-Assistant-Smart-Gloves-and-App-",
    details: [
      "Arduino UNO",
      "Android Studio",
      "Java",
      "Flex Sensors",
      "Gyroscope sensor",
      "Bluetooth",
    ],
  },
  {
    title:
      "Image and Speech to Text and Real Time Translator (CSE 327)",
    projectType: "academic",
    description:
      "An android application which can detect texts from image and speech, then translate it into different languages.",
    imageUrl: translator,
    projectUrl: "https://www.youtube.com/embed/OXSLNfYBeBc",
    code:
      "https://github.com/Priom7/CSE-327-Recognizing-Text-and-Translate-from-Image-",
    details: ["Android Studio", "OpenCV", "Yandex API"],
  },
  {
    title: "Android Controlled Robot (CSE 323)",
    projectType: "academic",
    description:
      "A rover that can be controlled through android application.",
    imageUrl: rover,
    projectUrl:
      "https://drive.google.com/file/d/10AwknUIMUjf4ntbge1KeFa7sbhx4uM0h/preview",
    code:
      "https://drive.google.com/file/d/10AwknUIMUjf4ntbge1KeFa7sbhx4uM0h/preview",
    details: [
      "MIT App Inventor",
      "Arduino Microprocessor",
      "Bluetooth",
    ],
  },
  {
    title: "Sequential Logic Design (DLD) (CSE 231)",
    projectType: "academic",
    description:
      "Sequentially prints certain numbers and characters with 7-Segment Led",
    imageUrl: dld,
    projectUrl: "https://www.youtube.com/embed/W67eyAkgPiQ",
    code: "https://www.youtube.com/embed/W67eyAkgPiQ",
    details: ["7-Segment LED", "Registers", "Capacitors"],
  },
  {
    title: "Tutor Finder (CSE 311)",
    projectType: "academic",
    description:
      "Web based project done with raw PHP and MySQL Relation Database. Here Tutors can register with their info and other users can search of Tutors according to their demands.",
    imageUrl: tutor,
    projectUrl:
      "https://emgithub.com/Priom7/CSE-311-Tutor-Finder-/blob/master/Tutor_Finder-Database/Tutor_Finder%20(Database)/project_experiment%20(2).sql",
    code: "https://github.com/Priom7/CSE-311-Tutor-Finder-",
    details: [
      "Raw PHP",
      "MySQL",
      "Relational Database",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Restaurant Management System Java (CSE 215)",
    projectType: "academic",
    description:
      "Desktop app restaurant management system with bill/receipt generator with calculator and an currency convertor",
    imageUrl: java,
    projectUrl: "https://www.youtube.com/embed/mGbGX4dQSwo",
    code: "https://github.com/Priom7/CSE-215-Java-Project-",
    details: ["Java", "NetBeans"],
  },
  {
    title: "Restaurant Management System Java (CSE 215)",
    projectType: "fun",
    description:
      "Desktop app restaurant management system with bill/receipt generator with calculator and an currency convertor",
    imageUrl: java,
    projectUrl: "https://www.youtube.com/embed/mGbGX4dQSwo",
    code: "https://github.com/Priom7/CSE-215-Java-Project-",
    details: ["Java", "NetBeans"],
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1d1e22",
  },
}));

export default function ProjectTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className='appbar'
        position='static'
        color='default'
      >
        <Tabs
          className='tabs'
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Recent Projects' {...a11yProps(0)} />
          <Tab
            label='Academic Projects'
            {...a11yProps(1)}
          />
          <Tab label='Backend Projects' {...a11yProps(2)} />
          {/* <Tab label='Fun Projects' {...a11yProps(3)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
        >
          <ProjectList items={Project}></ProjectList>
        </TabPanel>

        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
        >
          <AcademicProjectList
            items={Project}
          ></AcademicProjectList>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
        >
          <h1 style={{ color: "wheat" }}>
            Working On an Unique Way to Represent
            Backend/Server side Programming Skills.
          </h1>
          <h4 style={{ color: "#ee4540" }}>
            Fell free to check my recent works on GitHub
            Profile{" "}
            <a href='https://github.com/Priom7'>
              <GitHubIcon></GitHubIcon>
            </a>
          </h4>
          <img
            width='50%'
            height='50%'
            position='relative'
            src={construction}
            alt='under_construction'
          ></img>
        </TabPanel>
        {/* <TabPanel
          value={value}
          index={3}
          dir={theme.direction}
        >
          <FunProjectList items={Project}></FunProjectList>
        </TabPanel> */}
      </SwipeableViews>
    </div>
  );
}
