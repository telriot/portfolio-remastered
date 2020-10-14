import bookClubMDWp from "./images/book-club-md.webp";
import kogetaroMDWp from "./images/mines-of-kogetaro-md.webp";
import LifeCounterMDWp from "./images/LifeCounter-md.webp";
import LaSfrocchiaMDWp from "./images/LaSfrocchia-md.webp";
import EventBoardMDWp from "./images/EventBoard-md.webp";
import cryptowallMDWp from "./images/cryptowall-md.webp";
import bookClubMDjpg from "./images/book-club-md.jpg";
import kogetaroMDjpg from "./images/mines-of-kogetaro-md.jpg";
import LifeCounterMDjpg from "./images/LifeCounter-md.jpg";
import LaSfrocchiaMDjpg from "./images/LaSfrocchia-md.jpg";
import EventBoardMDjpg from "./images/EventBoard-md.jpg";
import cryptowallMDjpg from "./images/cryptowall-md.jpg";
export const social = {
	twitter: "https://twitter.com/BeniaminoTarta1",
	github: "https://www.github.com/telriot",
	linkedin: "https://www.linkedin.com/in/beniamino-tartarini-38b2661aa/",
	email: "beniamino.tartarini@gmail.com",
};
export const projects = [
	{
		name: "Girolamo La Sfrocchia",
		description:
			"An hyper-minimal Next-js blog for the Italian grotesque master Girolamo La Sfrocchia",
		tools: "Typescript, NEXT.js, Material-UI",
		web: "https://www.lasfrocchia.com/",
		git: "",
		webp: LaSfrocchiaMDWp,
		jpg: LaSfrocchiaMDjpg,
	},
	{
		name: "RRT Event Board",
		description: "A CRUD Event Board built with React/Redux-Toolkit on Node JS",
		tools:
			"Typescript, Javascript, React, Redux-Toolkit, Material-UI NodeJS, Express, Snapgrid API",
		web: "https://investocracy.herokuapp.com/",
		git: "https://github.com/telriot/investocracy",
		webp: EventBoardMDWp,
		jpg: EventBoardMDjpg,
	},
	{
		name: "MTG EDH Life Counter",
		description:
			"A Web Socket based life counter for Magic: The Gathering players trying to beat the pandemic",
		tools: "Typescript, React, Styled Components, NodeJS, Express, Socket.IO",
		web: "https://counterino.herokuapp.com/",
		git: "https://github.com/telriot/mtg-life-counter",
		webp: LifeCounterMDWp,
		jpg: LifeCounterMDjpg,
	},
	{
		name: "Crypto Wall",
		description:
			"A cryptocurrency visualization tool based on the CoinGecko API and WebSockets",
		tools: "React, NodeJs, MaterialUI, JavaScript, HTML",
		web: "https://cryptowall.herokuapp.com/",
		git: "https://github.com/telriot/chat-app",
		webp: cryptowallMDWp,
		jpg: cryptowallMDjpg,
	},
	{
		name: "Book Club",
		description:
			"A book trading platform for avid readers based on the Google Books API",
		tools: "React, NodeJs. MongoDB, JavaScript, Sass, HTML",
		web: "https://bookclubfcc.herokuapp.com/",
		git: "https://github.com/telriot/book-club",
		webp: bookClubMDWp,
		jpg: bookClubMDjpg,
	},
	{
		name: "Kogetaro",
		description:
			"A nostalgic, random generated, dungeon-crawler game rendered via React and managed through the Context API",
		tools: "React, JavaScript, Sass, HTML",
		web: "https://obscure-falls-32133.herokuapp.com/",
		git: "https://github.com/telriot/dungeon-crawler",
		webp: kogetaroMDWp,
		jpg: kogetaroMDjpg,
	},
];
export const about = `Hi! I am Ben, a former teacher transitioned to web development.
My skills mostly revolve around JS/TS and the MERN stack as a whole. While on the back-end my instrument of choice is Node.js/Express, I can comfortably switch between different styling solutions on the front-end, and I love delving into all kinds of new technologies and frameworks (i.e. JAMStack and serverless solutions).
I like simple code and ideas that make sense, and strive to hold true to these two basic concepts.
Feel free to contact me about work offers, projects and requests at the links down below!
`;
