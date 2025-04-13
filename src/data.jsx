import firebase from "../public/images/firebase.svg";
import css from "../public/images/css-3.png";
import html from "../public/images/html.png";
import bootstrap from "../public/images/bootstrap.svg";
import react from "../public/images/atom.png";
import axios from "../public/images/axios.svg";
import js from "../public/images/java-script.png";
import sass from "../public/images/sass.png";
import redux from "../public/images/redux.svg";
import ts from "../public/images/typescript.png";
import tailwind from "../public/images/tailwind.png";

const data = [
  {
    title: "Bootcamp Webpage",
    info: `Focusing on Bootstrap, CSS and HMTL.
      It also includes a Javascript library called AOS that creates nice and smooth 
      animations. It is all responsive.
       `,
    label: ["Front-End"],
    image: "bootstrap.png",
    url: "https://github.com/jakobmalmgren/bootstrap-css-html-js",
    live: "https://bootstrap-css-html-js-ndxf.vercel.app/",
    techniques: [bootstrap, html, css],
  },
  {
    title: "Yum-Yum-Gimme-Sum",
    info: `Focusing on React, SASS, BEM and Redux toolkit
    including store, slices and folderstructure.
    I am also using React-router-dom and interacting with
    an API. This app is not focused on responsiveness, and works better on
    mobile devices. The app is created with Vite.
       `,
    label: ["Front-End"],
    image: "yum.png",
    url: "https://github.com/jakobmalmgren/Individuell-examination-Yum-Yum-Gimme-Sum",
    live: "",
    techniques: [react, sass, html, css, redux],
  },
  {
    title: "Chatservice",
    label: ["Back-End", "Front-End"],
    info: `Focusing on React, fetching data from an API with async/await,
      Axios, Context API, Firebase to create an authentification and the concept of styled components. I also used React hooks such as usestate, usecontext and useffect.
      It is all responsive.`,
    image: "chat.jpg",
    url: "https://github.com/jakobmalmgren/chatproject",
    live: "https://chatproject-fawn.vercel.app/",
    techniques: [html, css, react, axios, firebase, js],
  },

  {
    title: "Photography Webpage",
    label: ["Front-End"],
    info: `Focusing on CSS, HTML, The Grid Layout System, 
      The FlexBox Layout Module and the preprocessor language SASS. 
      It also includes some Javascript. It is all responsive.`,
    image: "photographer.png",
    url: "https://github.com/jakobmalmgren/sass-flex-grid-js",
    live: "https://grid-flexbox-sass-project.vercel.app/",
    techniques: [css, html, sass, js],
  },
  {
    title: "Videoplayer",
    label: ["Front-End"],
    info: `Focusing on React, fetching data from an API,
      the state management tool Redux, Typescript and Tailwind. It is all responsive.`,
    image: "video.png",
    url: "https://github.com/jakobmalmgren/videoplayer",
    live: "https://videoplayer-beta.vercel.app/",
    techniques: [css, html, react, redux, ts, tailwind, js],
  },

  {
    title: "E-Comerce",
    label: "Front-End",
    info: `Focusing on React. For the styling I use CSS - modules. I use various techniques as react-router-dom, dealing with props, destructuring props, folderstructure etc.
      A variaty of methods such as map, filter, find, reduce. I use hooks such as
      usestate, and useeffect. It is all responsive.`,
    image: "ecomerce.png",
    url: "https://github.com/jakobmalmgren/react-project",
    live: "https://react-project-gules.vercel.app/",
    techniques: [css, html, sass, react, js],
  },
  {
    title: "Portfolio",
    info: `Focusing on React and some libraries to make
    a portfolio. I have been using React router, EmailJS, Hamburger-React,
    React-slick-carousel to make it functional.
    The app is created with Vite. It is all responsive.
       `,
    label: ["Front-End"],
    image: "portfolio.png",
    url: "https://github.com/jakobmalmgren/portfolio-25",
    live: "",
    techniques: [react, css, html, js],
  },
];

export default data;
