import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { social } from "../../config";
const useStyles = makeStyles((theme) => ({
	iconDiv: {
		display: "flex",
	},
	iconLink: {
		"&:hover, &:focus": {
			"& > *": {
				color: theme.palette.text.primary,
				transform: "translateY(-3px)",
				transition: "color, transform",
				transitionDuration: theme.transitions.duration.short,
			},
			outline: "none",
		},
	},
	icon: {
		color: theme.palette.text.secondary,
		margin: theme.spacing(1),
		fontSize: "2.4rem",
		transition: "color, transform",
		transitionDuration: theme.transitions.duration.short,
	},
}));
function SocialIcons({ animated }) {
	const classes = useStyles();

	return (
		<div className={classes.iconDiv}>
			<Link
				className={animated ? classes.iconLink : ""}
				href={social.github}
				aria-label="Github"
			>
				<GitHubIcon className={classes.icon} />
			</Link>
			<Link
				className={animated ? classes.iconLink : ""}
				href={social.linkedin}
				aria-label="Linkedin"
			>
				<LinkedInIcon className={classes.icon} />
			</Link>
			<Link
				className={animated ? classes.iconLink : ""}
				href={social.twitter}
				aria-label="Twitter"
			>
				<TwitterIcon className={classes.icon} />
			</Link>
			<Link
				className={animated ? classes.iconLink : ""}
				href={social.email}
				aria-label="Email address"
			>
				<EmailIcon className={classes.icon} />
			</Link>
		</div>
	);
}

export default SocialIcons;
