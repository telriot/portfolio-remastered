import bookClubSmJ2 from "./images/book-club-sm.jp2";
import kogetaroSmJ2 from "./images/mines-of-kogetaro-sm.jp2";
import d3chartsSmJ2 from "./images/d3charts-sm.jp2";
import chatSmJ2 from "./images/chat-sm.jp2";
import bookClubSmWp from "./images/book-club-sm.webp";
import kogetaroSmWp from "./images/mines-of-kogetaro-sm.webp";
import d3chartsSmWp from "./images/d3charts-sm.webp";
import chatSmWp from "./images/chat-sm.webp";
import bookClubSmPng from "./images/book-club-sm.png";
import kogetaroSmPng from "./images/mines-of-kogetaro-sm.png";
import d3chartsSmPng from "./images/d3charts-sm.png";
import chatSmPng from "./images/chat-sm.png";
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
    web: "https://fcc-chat-app.herokuapp.com/",
    git: "https://github.com/telriot/chat-app",
    j2: chatSmJ2,
    webp: chatSmWp,
    png: chatSmPng,
  },
  {
    name: "Book Club",
    description:
      "A book trading platform for avid readers based on the Google Books API",
    tools: "React, NodeJs. MongoDB, JavaScript, Sass, HTML",
    web: "https://bookclubfcc.herokuapp.com/",
    git: "https://github.com/telriot/book-club",
    j2: bookClubSmJ2,
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
    j2: kogetaroSmJ2,
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
    j2: d3chartsSmJ2,
    webp: d3chartsSmWp,
    png: d3chartsSmPng,
  },
];
export const about = `Hi! I am Beniamino Tartarini, a former teacher converted to web development and located in sunny Miyazaki, Japan.

I usually work on the MERN stack as a whole, mainly focusing on Hooks-based React development. When it comes to the front-end, I can comfortably switch between styling solutions and I love delving into all kinds of new technologies and ideas. 
I like simple code and ideas that make sense, and strive to hold true to these two basic concepts.
`;
