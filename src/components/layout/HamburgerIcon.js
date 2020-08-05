import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Resume from "../../assets/Resume.pdf";
import { Link as ScrollLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  menuDiv: {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 10,
    transition: "opacity ",
    transitionDuration: theme.transitions.duration.short,
  },
  button: {
    borderRadius: ".75rem",
    padding: ".375rem",
    transform: "translate(.5rem, .5rem)",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(.125rem, .125rem)",
    },
  },
  menuIcon: {
    color: theme.palette.text.primary,
    fontSize: "2rem",
    opacity: 1,
    transition: "opacity ",
    transitionDuration: theme.transitions.duration.short,
  },
  menuDivHidden: {
    position: "sticky",
    top: 0,
    left: 0,
    opacity: 0,
    transition: "opacity ",
    transitionDuration: theme.transitions.duration.short,
    transform: "scale(0)",
    zIndex: 10,
  },
  menuLink: {
    color: theme.palette.text.primary,
    "&:hover, &:focus": {
      textDecoration: "none",
    },
  },
}));

function HamburgerIcon() {
  const [position, setPosition] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  useScrollPosition(({ prevPos, currPos }) => {
    setPosition({ y: currPos.y });
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <>
      <div
        className={position.y < -50 ? classes.menuDiv : classes.menuDivHidden}
      >
        <IconButton
          aria-controls="navigation-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.button}
          aria-label="menu-icon"
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
      </div>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <ScrollLink
            className={classes.menuLink}
            to="projects"
            smooth={true}
            duration={500}
          >
            <Link variant="button" underline="none" color="inherit">
              Projects
            </Link>
          </ScrollLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            variant="button"
            className={classes.menuLink}
            href={Resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ScrollLink
            className={classes.menuLink}
            to="about"
            smooth={true}
            duration={500}
          >
            <Link variant="button" underline="none" color="inherit">
              About Me
            </Link>
          </ScrollLink>
        </MenuItem>
      </Menu>
    </>
  );
}

export default HamburgerIcon;
