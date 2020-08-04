import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SocialIcons from "../mainView/SocialIcons";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#00080b",
    minHeight: "7rem",
    height: "10vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  footerText: { color: "white" },
}));
function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <SocialIcons />
      <Typography className={classes.footerText} variant="body2" component="p">
        {String.fromCharCode(169)} Beniamino Tartarini 2020
      </Typography>
    </div>
  );
}

export default Footer;
