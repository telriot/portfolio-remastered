import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Resume from "../../assets/Resume.pdf";
import { Link as ScrollLink } from "react-scroll";

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
    cursor: "pointer",

    "&:hover, &:focus": {
      textDecoration: "none",
      transform: "translateY(-3px) rotate(5deg)",
      transition: "transform",
      transitionDuration: theme.transitions.duration.short,
      outline: "none",
    },
  },
}));
function Navbar() {
  const classes = useStyles();
  const handleClick = (e) => {
    e.target.blur();
  };
  return (
    <div className={classes.navbar}>
      <ScrollLink
        className={classes.link}
        to="projects"
        smooth={true}
        duration={500}
        onClick={handleClick}
      >
        <Link variant="button" underline="none" color="inherit">
          Projects
        </Link>
      </ScrollLink>

      <Link
        className={classes.link}
        variant="button"
        underline="none"
        href={Resume}
        target="_blank"
        rel="noreferrer noopener"
        color="inherit"
        onClick={handleClick}
      >
        Resume
      </Link>
      <ScrollLink
        className={classes.link}
        to="about"
        smooth={true}
        duration={500}
        onClick={handleClick}
      >
        <Link variant="button" underline="none" color="inherit">
          About Me
        </Link>{" "}
      </ScrollLink>
    </div>
  );
}

export default Navbar;
