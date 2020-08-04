import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Resume from "../../assets/Resume.pdf";

const useStyles = makeStyles((theme) => ({
  menuDiv: {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 10,
    transition: "opacity ",
    transitionDuration: theme.transitions.duration.short,
  },
  button: { transform: "translate(.5rem, .5rem)" },
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
      >
        <MenuItem onClick={handleClose}>
          <Link variant="button" className={classes.menuLink} href="#projects">
            Projects
          </Link>
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
          <Link variant="button" className={classes.menuLink} href="#about">
            About Me
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default HamburgerIcon;
