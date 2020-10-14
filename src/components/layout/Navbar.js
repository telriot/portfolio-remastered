import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Resume from "../../assets/Resume.pdf";
import { Link as ScrollLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
	navbar: {
		position: "absolute",
		top: "6vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
		zIndex: 10,
	},
	link: {
		color: theme.palette.text.secondary,
		padding: "0 3vw",
		transition: "transform",
		transitionDuration: theme.transitions.duration.standard,
		cursor: "pointer",

		"&:hover, &:focus": {
			textDecoration: "none",
			transform: "translateY(-3px)",
			transition: "transform",
			transitionDuration: theme.transitions.duration.standard,
			outline: "none",
		},
	},
}));
function Navbar() {
	const classes = useStyles();
	const handleClick = (e) => {
		e.persist();
		console.log(e);
		window.blur();
	};
	return (
		<div className={classes.navbar}>
			<ScrollLink
				className={classes.link}
				to="projects"
				smooth={true}
				duration={500}
				onClick={handleClick}
			>
				<Link
					aria-label="Projects"
					variant="button"
					underline="none"
					color="inherit"
				>
					Projects
				</Link>
			</ScrollLink>

			<Link
				className={classes.link}
				variant="button"
				underline="none"
				href={Resume}
				target="_blank"
				rel="noreferrer noopener"
				color="inherit"
				onMouseUp={handleClick}
				aria-label="Resume"
			>
				Resume
			</Link>
			<ScrollLink
				className={classes.link}
				to="about"
				smooth={true}
				duration={500}
				onMouseUp={handleClick}
			>
				<Link
					variant="button"
					underline="none"
					color="inherit"
					aria-label="About Me"
				>
					About Me
				</Link>{" "}
			</ScrollLink>
		</div>
	);
}

export default Navbar;
