import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Avatar from "./Avatar";
import bgTest from "../../assets/bg-test-md-low.jpg";
import bgTestSm from "../../assets/bg-test-sm-low.jpg";
import SocialIcons from "./SocialIcons";

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundImage: `url(${bgTest})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "114.8vh",
		transform: "skewY(-5deg) translateY(-30vh)",
		zIndex: 1,
		[theme.breakpoints.down("xs")]: {
			backgroundImage: `url(${bgTestSm})`,
		},
	},
	transparency: {
		position: "absolute",
		background:
			"linear-gradient(73deg, rgba(65,240,252,1) 2%, rgba(2,180,244,1) 82%)",
		top: 0,
		left: 0,
		width: "100%",
		height: "115vh",
		opacity: ".88",
		zIndex: 10,
	},
	innerDiv: {
		position: "relative",
		display: "flex",
		height: "100vh",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		transform: "skewY(5deg) translateY(22vh)",
		opacity: 1,
		zIndex: 100,
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
			<div className={classes.transparency}></div>
			<div className={classes.innerDiv}>
				<Avatar />
				<Typography className={classes.title} variant="h2" component="h1">
					Beniamino Tartarini
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
