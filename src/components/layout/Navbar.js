import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Resume from "../../assets/Resume.pdf";
const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "absolute",
    top: "6vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 10,
  },
  link: {
    color: theme.palette.text.secondary,
    padding: "0 3vw",
    transition: "transform",
    transitionDuration: theme.transitions.duration.short,

    "&:hover, &:focus": {
      textDecoration: "none",
      transform: "translateY(-3px)",
      transition: "transform",
      transitionDuration: theme.transitions.duration.short,
      outline: "none",
    },
  },
}));
function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Link variant="button" href="#projects" className={classes.link}>
        Projects
      </Link>
      <Link
        variant="button"
        href={Resume}
        className={classes.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        Resume
      </Link>
      <Link variant="button" href="#about" className={classes.link}>
        About me
      </Link>
    </div>
  );
}

export default Navbar;
