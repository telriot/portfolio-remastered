import bookClubSmWp from "./images/book-club-md.webp";
import kogetaroSmWp from "./images/mines-of-kogetaro-md.webp";
import d3chartsSmWp from "./images/d3charts-md.webp";
import cryptowallSmWp from "./images/cryptowall-md.webp";
import bookClubSmPng from "./images/book-club-md.png";
import kogetaroSmPng from "./images/mines-of-kogetaro-md.png";
import d3chartsSmPng from "./images/d3charts-md.png";
import cryptowallSmPng from "./images/cryptowall-md.png";
export const social = {
  twitter: "https://twitter.com/BeniaminoTarta1",
  github: "https://www.github.com/telriot",
  linkedin: "https://www.linkedin.com/in/beniamino-tartarini-38b2661aa/",
  email: "beniamino.tartarini@gmail.com",
};
export const projects = [
  {
    name: "Crypto Wall",
    description:
      "A cryptocurrency visualization tool based on the CoinGecko API and WebSockets",
    tools: "React, NodeJs, MaterialUI, JavaScript, HTML",
    web: "https://cryptowall.herokuapp.com/",
    git: "https://github.com/telriot/chat-app",
    webp: cryptowallSmWp,
    png: cryptowallSmPng,
  },
  {
    name: "Book Club",
    description:
      "A book trading platform for avid readers based on the Google Books API",
    tools: "React, NodeJs. MongoDB, JavaScript, Sass, HTML",
    web: "https://bookclubfcc.herokuapp.com/",
    git: "https://github.com/telriot/book-club",
    webp: bookClubSmWp,
    png: bookClubSmPng,
  },
  {
    name: "Kogetaro",
    description:
      "A nostalgic, random generated, dungeon-crawler game rendered via React and managed through the Context API.",
    tools: "React, JavaScript, Sass, HTML",
    web: "https://obscure-falls-32133.herokuapp.com/",
    git: "https://github.com/telriot/dungeon-crawler",
    webp: kogetaroSmWp,
    png: kogetaroSmPng,
  },
  {
    name: "Charts",
    description:
      "A collection of charts realized with D3 and rendered with React",
    tools: "React, D3.js, JavaScript, Sass, HTML",
    web: "https://fcc-charts-1.herokuapp.com/",
    git: "https://github.com/telriot/fcc-charts",
    webp: d3chartsSmWp,
    png: d3chartsSmPng,
  },
];
export const about = `Hi! I am Beniamino Tartarini, a former teacher converted to web development and located in sunny Miyazaki, Japan.

I usually work on the MERN stack as a whole, mainly focusing on Hooks-based React development. When it comes to the front-end, I can comfortably switch between styling solutions and I love delving into all kinds of new technologies and ideas. 
I like simple code and ideas that make sense, and strive to hold true to these two basic concepts.
`;
