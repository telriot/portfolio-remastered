import React from "react";
import myPic from "../../assets/avatar500.jpg";
import myPicWP from "../../assets/avatar500.webp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: "1000px",
    border: `4px solid ${theme.palette.text.secondary}`,
    width: "8rem",
    marginBottom: theme.spacing(5),
    background: "#f1f1f1",
  },
}));

function Avatar() {
  const classes = useStyles();
  return (
    <div>
      <picture>
        <source srcSet={myPicWP} type="image/webp" />
        <img
          className={classes.avatar}
          src={myPic}
          alt="Beniamino Tartarini"
          type="image/png"
        />
      </picture>
    </div>
  );
}

export default Avatar;
