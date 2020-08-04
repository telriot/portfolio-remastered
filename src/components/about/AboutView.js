import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { about } from "../../config";
import TechStack from "./TechStack";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.grey[200],
    transform: "skewY(-5deg) translateY(-10vh)",
    zIndex: 10,
  },
  innerDiv: {
    background: theme.palette.grey[200],
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transform: "skewY(5deg) translateY(10vh)",
  },
  title: {
    color: theme.palette.text.primary,
    marginBottom: "3rem",
  },
  text: {
    color: theme.palette.text.primary,
  },
  container: {
    padding: "6vh 0",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  aboutText: {
    marginBottom: "2rem",
  },
}));

function AboutView() {
  const classes = useStyles();
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));

  let aboutText = about.split("\n").map((item, i) => (
    <Typography
      key={`text-${i}`}
      className={classes.text}
      variant={isSM ? "body1" : "body2"}
      component="p"
      align="center"
    >
      {item}
    </Typography>
  ));

  return (
    <section className={classes.main}>
      <div className={classes.innerDiv}>
        <Container id="about" className={classes.container}>
          <Typography
            align="center"
            className={classes.title}
            variant="h2"
            component="h2"
          >
            About me
          </Typography>
          {aboutText}
          <br />
          <Typography
            variant={isSM ? "body1" : "body2"}
            align="center"
            className={classes.text}
          >
            Here are some of the tools I usually work with:
          </Typography>
          <TechStack />
        </Container>
      </div>
    </section>
  );
}

export default AboutView;
