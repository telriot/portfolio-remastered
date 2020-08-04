import React from "react";
import { fullStack } from "../../assets/icons";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  stackGrid: {
    margin: theme.spacing(4),
  },
  item: {
    padding: ".5rem 1rem",
    transition: "transform, box-shadow",
    transitionDuration: theme.transitions.duration.short,
    "&:hover, &:focus": {
      transform: "translateY(-2px)",
      transition: "transform, box-shadow",
      transitionDuration: theme.transitions.duration.short,
      boxShadow: theme.shadows[4],
    },
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem 0",
    },
  },
  contentDiv: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  image: {
    marginRight: theme.spacing(2),
    height: "2rem",
    width: "3rem",
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      height: "2rem",
      width: "5rem",
    },
  },
  itemText: {
    color: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));
function TechStack() {
  const classes = useStyles();
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid className={classes.stackGrid} container spacing={!isSM ? 1 : 3}>
      {fullStack.map((item, index) => (
        <Grid key={`tech-${index}`} item xs={6} sm={6} md={4} lg={3}>
          <Paper className={classes.item}>
            <div className={classes.contentDiv}>
              <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img
                  className={classes.image}
                  src={item.png}
                  alt={item.name}
                  type="image/png"
                />
              </picture>{" "}
              <Typography
                className={classes.itemText}
                variant="button"
                component="p"
              >
                {item.name}
              </Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default TechStack;
