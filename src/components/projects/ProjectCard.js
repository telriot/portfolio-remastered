import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	card: {
		transition: "transform, box-shadow",
		transitionDuration: theme.transitions.duration.short,

		"&:hover, &:focus": {
			transform: "translateY(-2px)",
			transition: "transform, , box-shadow ",
			transitionDuration: theme.transitions.duration.short,
			boxShadow: theme.shadows[4],
		},
	},
	image: {
		objectFit: "cover",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",

		width: "100%",
	},
	projectName: {
		color: theme.palette.text.primary,
	},
	projectDescription: {
		color: theme.palette.grey[800],
	},
	divider: { margin: theme.spacing(1) },
	button: {
		color: theme.palette.text.primary,
	},
}));
function ProjectCard({ project }) {
	const classes = useStyles();
	const { name, description, webp, jpg, web, git } = project;
	const handleNewTabClick = (address) => () => {
		window.open(address, "_blank");
	};
	return (
		<Grid item xs={12} sm={6}>
			<Card className={classes.card}>
				<CardActionArea onClick={handleNewTabClick(web)}>
					<CardMedia className={classes.media} title={name}>
						<picture>
							<source srcSet={webp} type="image/webp" />
							<img
								className={classes.image}
								src={jpg}
								alt={name}
								type="image/jpg"
							/>
						</picture>
					</CardMedia>
					<CardContent>
						<Typography
							className={classes.projectName}
							gutterBottom
							variant="h5"
							component="h2"
						>
							{name}
						</Typography>
						<Typography
							className={classes.projectDescription}
							variant="body2"
							component="p"
						>
							{description}
						</Typography>
						<Divider className={classes.divider} variant="middle" />
						<Typography
							className={classes.projectDescription}
							variant="body2"
							component="p"
						>
							Tech stack: {project.tools}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						onClick={handleNewTabClick(web)}
						className={classes.button}
						size="small"
						color="primary"
					>
						Website
					</Button>
					<Button
						onClick={handleNewTabClick(git)}
						className={classes.button}
						size="small"
						color="primary"
						disabled={!git}
					>
						Github
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default ProjectCard;
