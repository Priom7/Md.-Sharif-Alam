import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./ProjectItem.css";
import BackGround from "./BackGround";

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
    backgroundColor: red[500],
  },
}));

export default function ProjectItem(props) {
  console.log(props);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li className='project_item'>
      <Card className={classes.root}>
        <CardHeader
          className='card__header'
          avatar={
            <Avatar
              aria-label='recipe'
              className={classes.avatar}
              src={props.imageUrl}
            ></Avatar>
          }
          action={
            <IconButton
              className='card__icon'
              aria-label='settings'
            >
              <MoreVertIcon className='card__icon' />
            </IconButton>
          }
          title={<strong>{props.title}</strong>}
        />
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title='Paella dish'
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
            <FavoriteIcon className='card__icon' />
          </IconButton>
          <IconButton
            className='card__icon'
            aria-label='share'
          >
            <ShareIcon className='card__icon' />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon className='card__icon' />
          </IconButton>
        </CardActions>
        <Collapse
          in={expanded}
          timeout='auto'
          unmountOnExit
        >
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {props.details}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </li>
  );
}
