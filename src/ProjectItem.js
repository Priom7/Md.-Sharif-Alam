import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import FavoriteIcon from "@material-ui/icons/Favorite";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./ProjectItem.css";
import Iframe from "react-iframe";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "50px 18px 84px -10px rgba(0, 0, 0, 0.69)",
    background: "#1d1e22",
    color: "wheat",
    borderRadius: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "wheat",
  },
}));

export default function ProjectItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [text, setText] = React.useState(
    "Details and Preview"
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setText("");
  };

  return (
    <li className='project_item'>
      <div className='project__card'>
        <Card className={classes.root}>
          <CardHeader
            className='card__header'
            avatar={
              <Avatar
                aria-label='projects'
                className={classes.avatar}
                src={props.imageUrl}
              ></Avatar>
            }
            action={
              <IconButton
                className='card__icon'
                aria-label='settings'
              >
                {/* <MoreVertIcon className='card__icon' /> */}
              </IconButton>
            }
            title={<strong>{props.title}</strong>}
          />
          <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title='project__image'
          />
          <CardContent>
            <Typography
              variant='body2'
              color='wheat'
              component='p'
            >
              {<small>{props.description}</small>}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className='card__icon'
              aria-label='add to favorites'
            >
              <a href={props.projectUrl}>
                <VisibilityIcon className='card__icon'></VisibilityIcon>
              </a>
            </IconButton>
            <IconButton
              className='card__icon'
              aria-label='share'
            >
              <a href={props.code}>
                {" "}
                <GitHubIcon className='card__icon'></GitHubIcon>
              </a>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <Typography>
                {" "}
                <small style={{ color: "#ee4540" }}>
                  {text}
                </small>
              </Typography>
              <ExpandMoreIcon className='card__icon' />
            </IconButton>
          </CardActions>
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
          >
            <CardContent>
              <div className='card__details'>
                <Typography paragraph>Tools:</Typography>
                <div className='card__detailsList'>
                  <Typography paragraph>
                    {props.details.map((list) => (
                      <div className='card__detailsToolList'>
                        <ul>
                          <li>
                            <small className='center'>
                              {list}
                            </small>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </Typography>
                </div>
                <Iframe
                  url={props.projectUrl}
                  id='myId'
                  className='card__iframe'
                />
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </li>
  );
}
