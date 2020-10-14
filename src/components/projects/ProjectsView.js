import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { projects } from "../../config";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
	projects: {
		transform: "skewY(-5deg) translateY(-30vh)",
		background: "transparent",
	},
	projectsInnerDiv: {
		width: "100%",
		transform: "skewY(5deg) translateY(10vh)",
	},
	container: {
		padding: "6vh 0",
		width: "70vw",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			width: "90vw",
		},
	},
	title: {
		color: theme.palette.text.primary,
		marginBottom: theme.spacing(6),
	},
}));

function ProjectsView() {
	const classes = useStyles();

	return (
		<section className={classes.projects}>
			<div className={classes.projectsInnerDiv}>
				<Container id="projects" className={classes.container}>
					<Typography
						align="center"
						className={classes.title}
						variant="h3"
						component="h2"
					>
						My Projects{" "}
					</Typography>
					<Grid container spacing={4}>
						{projects.map((project, index) => (
							<ProjectCard project={project} />
						))}
					</Grid>
				</Container>
			</div>
		</section>
	);
}

export default ProjectsView;
