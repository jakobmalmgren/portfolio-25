import css from "../public/images/css-3.png";
import html from "../public/images/html.png";
import bootstrap from "../public/images/bootstrap.svg";
import jest from "../public/images/jest.svg";
import react from "../public/images/atom.png";
import js from "../public/images/java-script.png";
import sass from "../public/images/sass.png";
import redux from "../public/images/redux.svg";
import ts from "../public/images/typescript.png";
import tailwind from "../public/images/tailwind.png";
import nodeJs from "../public/images/Node.js.svg";
import swagger from "../public/images/Swagger.svg";
import express from "../public/images/Express.svg";
import postman from "../public/images/postman-icon-svgrepo-com (1).svg";
import mongoDb from "../public/images/MongoDB.svg";
import postgreSQL from "../public/images/postgresql.svg";
import mui from "../public/images/mui-logo.png";
import aws from "../public/images/aws.svg";
import vitest from "../public/images/vitestLogo.png";
const data = [
  {
    title: "Remember My Applications",
    label: ["Front-End", "Back-End"],
    info: `I developed a fullstack application as my thesis project. It is an app where you can save your applications, get reminders, view statistic
    of your applications, view location of your applications and more. I have used React and MUI in the frontend.
    For the backend with databases and API:s I have used serverless with AWS(DynamoDB, S3 buckets, API gateway, Lambda, Eventbridge)`,
    image: "rma.png",
    url: "https://github.com/jakobmalmgren/examproj",
    live: "http://myappliesbucket.s3-website.eu-north-1.amazonaws.com/",
    techniques: [css, html, js, ts, mui, aws, react],
  },
  {
    title: "Yum Yum Gimme Sum",
    info: `Focusing on React, SASS, BEM and Redux toolkit
    including store, slices and folderstructure.
    I am also using React-router-dom and interacting with
    an API. This app is not focused on responsiveness, and works better on
    mobile devices. The app is created with Vite.
       `,
    label: ["Front-End"],
    image: "yum.png",
    url: "https://github.com/jakobmalmgren/Individuell-examination-Yum-Yum-Gimme-Sum",
    live: "https://yum-yum-gimme-sum-project-hz0txztxp-jakobmalmgrens-projects.vercel.app/",
    techniques: [react, sass, html, css, redux],
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
    live: "https://portfolio-25-7scsyny94-jakobmalmgrens-projects.vercel.app/",
    techniques: [react, css, html, js],
  },
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
    title: "NOSQL Swing notes API",
    label: ["Back-End"],
    info: `In this app I am focusing on creating an API and connecting it to NEDB(noSQL),
    MVC(without view) structure, creating a Swagger, Postman, Bcrypt, Jsonwebtoken, Middlewares, NodeJS, Express & Joi.
    This project is not any Front-end included so you will need Postman for it.
    `,
    image: "swingnotes.png",
    url: "https://github.com/jakobmalmgren/individuell-examination-Swing-notes-API",
    live: "",
    techniques: [js, postman, express, nodeJs, swagger],
  },
  {
    title: "NOSQL Review Platform",
    label: ["Back-End"],
    info: `In this project, I am focusing on the backend using Node.js, 
    Express, and MongoDB. I use Mongoose for data modeling, bcrypt
    for password hashing, JWT for authentication, middleware for route protection,
    and features like select, populate, and aggregation pipelines to combine and process
    related data. Role-based access is implemented for users and admins.
    This project is not any Front-end included so you will need Postman for it to test it.
    See README.md for more info and how to test everything.
    `,
    image: "review.jpg",
    url: "https://github.com/jakobmalmgren/examination-NOSQL-Mongodb-Filmrecensionsplattform",
    live: "",
    techniques: [js, postman, express, nodeJs, mongoDb],
  },
  {
    title: "SQL Bulletin Board API",
    label: ["Back-End"],
    info: `The project builds an API using Node.js and Express, 
    connected to PostgreSQL. The database is designed with an ER
     diagram in dbdiagram.io. SQL JOINs are used to link data. 
     The API follows an MVC architecture and is tested with Postman to 
     ensure functionality and data integrity. This project is not any Front-end included so you will need Postman 
     for it to test it. See README.md for more info and how to test everything.
    `,
    image: "bulleting.webp",
    url: "https://github.com/jakobmalmgren/SQL-bulletin-exam",
    live: "",
    techniques: [js, postman, express, nodeJs, postgreSQL],
  },
  {
    title: "Vitest test implementation",
    label: ["Test"],
    info: `Worked on an existing React application and implemented unit and component tests using Vitest and React Testing Library, along with jest-dom for assertions, jsdom for the test environment, and MSW for API mocking.
    `,
    image: "vitest.webp",
    url: "https://github.com/jakobmalmgren/react-exam-vitest",
    live: "",
    techniques: [vitest, jest, react],
  },
];

export default data;
