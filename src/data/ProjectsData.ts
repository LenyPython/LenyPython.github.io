import { ProjectDataInterface } from "../types/Interfaces";

const WEBP5 = "webpack5";
const REACT = "react";
const ANGULAR = "angular";
const RTL = "react testing library";
const ROUTER = "react-router";
const REDUX = "redux";
const SAGA = "redux-saga";
const FIREBASE = "firebase";
const TS = "typescript";
const JS = "javascript";
const CSS = "css";
const STYLED = "styled-components";
const API = "API";
const D3 = "d3";
const OOP = "object oriented programing";
const RWD = "resposive";
const PYTHON = "python3";
const PYGAME = "pygame";
const NUMPY = "numpy";

const projData: ProjectDataInterface[] = [
  {
    title: "Library",
    images: {
      path: "img/library/",
      no: 6,
    },
    tech: new Set([CSS, STYLED, TS, REACT, REDUX, ROUTER, FIREBASE, SAGA]),
    code: "https://github.com/LenyPython/someRandomLibrary",
    live: "https://lenypython.github.io/someRandomLibrary/",
    description: `
		Side project that simulates a library app. It has two users states admin and user. You can register and login using email from firebase/auth. Admin accounts can update data base( Create, Read, Update, Delete book entries in library), give admin privlidges to other users/accounts. They can also fetch book data from OpenLibrary API and add them to DB by providing correct 10 or 13 char ISBN number.

		Users can browse and borrow book. There is small 'reading screen' in 'My borrowed books' section. (Read, Update)
		`,
  },
  {
    title: "REST Countries API",
    images: {
      path: "img/countries/",
      no: 5,
    },
    tech: new Set([CSS, STYLED, TS, REACT, REDUX, SAGA, RWD, API]),
    code: "https://github.com/LenyPython/REST-countries-api-frontendmentor",
    live: "https://lenypython.github.io/REST-countries-api-frontendmentor/",
    description: `
		Frontend Mentor REST Coutries API project. Festches data from coutries api and
		displays it as in the design pattern provided from Frontend Mentor.
		`,
  },
  {
    title: "Trading Platform (work in Progress)",
    images: {
      path: "img/trader/",
      no: 3,
    },
    tech: new Set([CSS, TS, REACT, REDUX, SAGA, API, D3]),
    code: "https://github.com/LenyPython/d3-charts",
    live: "https://vibrant-hugle-9548f1.netlify.app",
    description: `
		Planing to build a fully functional trading platform with use of 
		xAPI (http://developers.xstore.pro/).
		I can create an demo account in xtb broker(https://www.xtb.com/en/demo-account) to connect to demo servers. 
		At the moment app displays available trading instruments,
		randomly generated or downloaded instrument candlestick charts with d3 library.
		We can switch main chart by clicking smaller ones. Currently working the best way to implement web
		sockets connection and data streaming from the xAPI.
		`,
  },
  {
    title: "Tanks game (work in progress)",
    images: {
      path: "img/tanks/",
      no: 2,
    },
    tech: new Set([CSS, TS, REACT, OOP, WEBP5]),
    code: "https://github.com/LenyPython/URL-shortening-API-landing-page",
    live: "",
    description: `
		Multiplayer tank game written in Typescript with Webpack5 usage.
		Developing my skill with Object Oriented Programming. 
		The project checks simple collision with the Bullet and enemy Tanks( player or CPU). 
		I wish to implement strategy pattern for objects movement and add player upgrades with decorator pattern.
		In future, I would also like to add other objects like destructible wall, water, grass, etc..
		In really long run I would like to implement multiplayer game play with socket.io, 
		move game play from one monitor to live connection.		`,
  },
  {
    title: "URL shortening API landing page",
    images: {
      path: "img/shorten/",
      no: 5,
    },
    tech: new Set([CSS, JS, REACT, API, RWD]),
    code: "https://github.com/LenyPython/URL-shortening-API-landing-page",
    live: "https://lenypython.github.io/URL-shortening-API-landing-page/",
    description: `
		Simple RWD landing page for URL shortening API. Learned a bit custom SVG creation and animation.
				Responsive web design, CSS Flex.
		`,
  },
  {
    title: "Sudoku game",
    images: {
      path: "img/sudoku/",
      no: 4,
    },
    tech: new Set([PYTHON, PYGAME, NUMPY]),
    code: "https://github.com/LenyPython/Sudoku-pygame",
    live: "",
    description: `
		Sudoku game build in pythonn3 and pygame. Implements backtracking algorithm to
		create a board and solve solve it. You can visualize creation and solution.
		I learned recursive backtracking, Object Oriented Programing. Created reusable 'custom components'
		like buttons and board classes.
		`,
  },
  {
    title: "Basic Angular App, create random teams",
    images: {
      path: "img/randteam/",
      no: 3,
    },
    tech: new Set([ANGULAR, CSS]),
    code: "https://github.com/LenyPython/Team-Generator-angular",
    live: "https://lenypython.github.io/Team-Generator-angular/",
    description: `
		Basic app in Angular. You can add a Person to list afterf populating the list,
		you cand click 'Create Teams' and it will randomly generate teams from given group of people
		`,
  },
  {
    title: "Calculator",
    images: {
      path: "img/calculator/",
      no: 3,
    },
    tech: new Set([CSS, JS, REACT, RTL, RWD]),
    code: "https://github.com/LenyPython/Calculator-project",
    live: "https://lenypython.github.io/Calculator-project/",
    description: `
		Calculator made using react. Used css variables for triple theme change.
		Learned a bit custom react hooks, CSS Grid.
		Wrose few unit and integration test in react testing library.
		Responsive web design.
		`,
  },
];

export default projData;
