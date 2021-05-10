import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import user from "./images/user.png";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router-dom";
import rocket from "./images/gif/space2.gif";
import imageback from "./images/gif/space-back.png";
import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import "./Navigations.css";
import ProjectTab from "./ProjectTab";
import Contacts from "./Contacts";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "#1d1e22"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      background: "#1d1e22"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#1d1e22",

    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
  },
  content: {
    flexGrow: 1,
    background: "#1D1E22",
    opacity: ".9.8",
    zIndex: "1"
  }
}));

const Navigations = props => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{}}>
      <div>
        <img
          className='nav_image'
          src={user}
          alt='user'
        ></img>
      </div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink to='/home'>
          <ListItem button>
            <HomeIcon> </HomeIcon>
            {"..."} Home
          </ListItem>
        </NavLink>
        <NavLink to='/about'>
          <ListItem button>
            <InfoIcon> </InfoIcon>
            {"..."} About
          </ListItem>
        </NavLink>
        <NavLink to='/skills'>
          <ListItem button>
            <CodeIcon> </CodeIcon>
            {"..."} Skills
          </ListItem>
        </NavLink>
        <NavLink to='/projects'>
          <ListItem button>
            <AccountTreeIcon> </AccountTreeIcon>
            {"..."} Projects
          </ListItem>
        </NavLink>
        <NavLink to='/contact'>
          <ListItem button>
            <ContactMailIcon> </ContactMailIcon>
            {"..."} Contact
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      {/* <img className='nav_image' src={imageback}></img> */}
      <img
        class='rocket'
        src={rocket}
        style={{ height: "100px", marginbottom: "0px" }}
      ></img>
    </div>
  );

  const container =
    window !== undefined
      ? () => window().document.body
      : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#1d1e22" }}
        position='fixed'
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <AccountCircleIcon
            style={{
              color: "#ee4540",

              marginRight: "2px"
            }}
          ></AccountCircleIcon>
          <Typography
            style={{ color: "#ee4540" }}
            variant='h6'
            noWrap
          >
            Md. Sharif Alam
          </Typography>
        </Toolbar>
      </AppBar>
      <nav
        className={classes.drawer}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={
              theme.direction === "rtl" ? "right" : "left"
            }
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/skills'>
          <Skills></Skills>
        </Route>
        <Route path='/projects'>
          <ProjectTab></ProjectTab>
        </Route>
        <Route path='/contact'>
          <Contacts></Contacts>
        </Route>
      </main>
    </div>
  );
};

export default Navigations;
