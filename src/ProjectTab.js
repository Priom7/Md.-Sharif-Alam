import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
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
import profile from "./images/profile.PNG";
import "./ProjectTab.css";
import Sky from "react-sky";

const Project = [
  {
    title: "My Movies",
    type: "frontend",
    description:
      "Movie application data fetched form TMDB and users can watch movie trailers fetched from YOUTUBE by clicking on first row banners. (Design inspired by Netflix)",
    imageUrl: myFlix,
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "Ecommerce Application",
    type: "frontend",
    description:
      "E-Commerce Web Application. Users can look for products and add/remove items to shopping basket and subtotal will be generated automatically. (Design inspired by Amazon)",
    imageUrl: amazon,
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "Covid-19 Info.",
    type: "frontend",
    description:
      "Covid-19 info tracker PWA on daily basis. Users can search data of individual Country",
    imageUrl: covid,
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "City Weather Info",
    type: "frontend",
    description:
      "Weather info PWA where users can get weather data of cities",
    imageUrl: weather,
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "Click and Share",
    type: "frontend",
    description:
      "Social media application like Instagram where users can share images and comment on them ",
    imageUrl: mygram,
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "Share A Thought",
    type: "frontend",
    description:
      "Social media application where users can share posts. Real time activity notifications implemented.",
    imageUrl: share,
    view: "Link",
    code: "link",
    details: "More Details",
  },
  {
    title: "Protfolio",
    type: "frontend",
    description:
      "My protfolio app made with react for sharing experiences, skills and showcase my projects",
    imageUrl: profile,
    view: "Link",
    code: "link",
    details: "More Details",
  },
];
console.log(Project[0].title);

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
          <Tab
            label='Frontend Projects'
            {...a11yProps(0)}
          />
          <Tab label='Backend Projects' {...a11yProps(1)} />
          <Tab
            label='Academic Projects'
            {...a11yProps(2)}
          />
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
          <ProjectList items={Project}></ProjectList>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
        >
          <ProjectList items={Project}></ProjectList>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
