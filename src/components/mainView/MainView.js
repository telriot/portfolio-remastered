import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Avatar from "./Avatar";

import SocialIcons from "./SocialIcons";

const useStyles = makeStyles((theme) => ({
  main: {
    background:
      "linear-gradient(73deg, rgba(65,213,252,1) 2%, rgba(2,169,244,1) 82%)",
    height: "115vh",
    transform: "skewY(-5deg) translateY(-30vh)",
  },
  innerDiv: {
    position: "relative",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transform: "skewY(5deg) translateY(22vh)",
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
  },
}));

function MainView() {
  const classes = useStyles();

  return (
    <section className={classes.main}>
      <div className={classes.innerDiv}>
        <Avatar />
        <Typography className={classes.title} variant="h2" component="h1">
          BENIAMINO TARTARINI
        </Typography>
        <Typography variant="subtitle" className={classes.subtitle}>
          Full-stack Developer
        </Typography>
        <SocialIcons animated={true} />
      </div>
    </section>
  );
}

export default MainView;
