import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { about } from "../../config";
import TechStack from "./TechStack";
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
	container: {
		padding: "6vh 0",
		width: "70vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			width: "90vw",
			margin: "0 auto",
		},
	},
	title: {
		color: theme.palette.text.primary,
		marginBottom: theme.spacing(6),
	},
	text: {
		color: theme.palette.text.primary,
		fontSize: "1.25rem",
		fontWeight: 300,
		[theme.breakpoints.down("md")]: {
			fontSize: "1.125rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
		},
	},
}));

function AboutView() {
	const classes = useStyles();

	let aboutText = about.split("\n").map((item, i) => (
		<Typography
			key={`text-${i}`}
			className={classes.text}
			variant="body1"
			component="p"
			align="left"
		>
			{item}
		</Typography>
	));

	return (
		<section className={classes.main}>
			<div className={classes.innerDiv}>
				<Container id="about" className={classes.container}>
					<Container maxWidth="md">
						<Typography
							align="center"
							className={classes.title}
							variant="h3"
							component="h2"
						>
							About me
						</Typography>

						{aboutText}
						<br />
					</Container>
					<TechStack />
				</Container>
			</div>
		</section>
	);
}

export default AboutView;
