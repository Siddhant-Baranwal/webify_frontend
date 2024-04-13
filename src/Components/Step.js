import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Step = () => {
  let { id } = useParams();
  const head = [
    "HTML, CSS and JavaScript",
    "Git and GitHub",
    "ReactJS and Redux",
    "Postman",
    "NodeJS and Nodemon",
    "ExpressJS",
    "MongoDB",
  ];
  const intro = [
    [
      "HTML (Hypertext Markup Language) is the foundation of web pages. It uses tags to structure content like headings, paragraphs, and links. Tags define elements and their properties, creating the structure and layout of a webpage. Browsers interpret HTML to display content visually to users on the internet.",
      "CSS (Cascading Style Sheets) adds style and design to HTML elements. It controls the appearance of web pages, including colors, fonts, spacing, and layout. CSS uses selectors to target HTML elements and apply styling rules. By separating style from structure, CSS allows for consistent and visually appealing webpage presentation across devices.",
      "JavaScript is a versatile programming language for web development. It enables interactive and dynamic features on web pages, such as user interactions, animations, and data manipulation. JavaScript runs on web browsers and servers, allowing developers to create responsive and engaging websites and web applications for various purposes.",
    ],
    [
      "Git is a version control system used to track changes in files during software development. It allows multiple developers to collaborate on projects efficiently. With features like branching, merging, and history tracking, Git enables teams to manage and coordinate their work, ensuring code reliability and project stability.",
      "GitHub is a web-based platform built on top of Git, providing additional collaboration and project management features. It hosts Git repositories, allowing developers to store, share, and collaborate on code with others. GitHub offers features like issue tracking, pull requests, and wikis, enhancing team collaboration and open-source contribution.",
    ],
    [
      "ReactJS is a JavaScript library for building user interfaces, particularly for web applications. It allows developers to create reusable UI components and efficiently update the UI when data changes. Reacts component-based architecture and virtual DOM optimize performance and enable the creation of interactive and dynamic web applications with ease.",
      "Redux is a predictable state container for JavaScript applications, often used with libraries like React. It centralizes application state management, making it easier to manage and update data across the app. Redux follows a unidirectional data flow, enabling predictable state changes and easier debugging. Its commonly used in complex applications for handling global state.",
    ],
    [
      "Postman is a popular API development tool used for testing and debugging APIs. It provides a user-friendly interface for sending HTTP requests to APIs and inspecting the responses. Postman allows developers to create and organize collections of API requests, automate testing, and share documentation with team members, streamlining the API development process.",
    ],
    [
      "Node.js is a runtime environment that allows JavaScript to run on the server-side. Its built on the V8 JavaScript engine and enables developers to build scalable and efficient web applications. Node.js has a non-blocking, event-driven architecture, making it suitable for handling I/O-heavy tasks and building real-time applications like chat servers or streaming apps.",
    ],
    [
      "Express.js is a minimal and flexible Node.js web application framework used for building web applications and APIs. It simplifies the process of handling HTTP requests and responses, providing a robust set of features for routing, middleware, and templating. Express.js is widely used in conjunction with Node.js for building server-side applications quickly and efficiently.",
    ],
    [
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Its known for its scalability and flexibility, making it suitable for a wide range of applications, from small startups to large enterprises. MongoDBs features include high availability, horizontal scaling, and rich query capabilities, making it a popular choice for modern web applications.",
    ],
  ];

  const youTube = [
    [
      "https://www.youtube.com/embed/videoseries?si=vBc0Pr0zenoHI-Vj&amp;list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
    ],
    ["https://www.youtube.com/embed/Ez8F0nW6S-w?si=IbNSRhOd3BrPxumj"],
    [
      "https://www.youtube.com/embed/videoseries?si=-kDec5hdaC804fJx&amp;list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
      "https://www.youtube.com/embed/J5By-Q4ZhZs?si=PhcG7_0txB_X3jgA",
    ],
    [
      "https://www.youtube.com/embed/videoseries?si=PKtnYUJAS5EO_4vX&amp;list=PLhW3qG5bs-L9P22XSnRe4suiWL4acXG-g",
    ],
    [
      "https://www.youtube.com/embed/videoseries?si=uZKf9ywWIkQkLDRD&amp;list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
    ],
    ["https://www.youtube.com/embed/7H_QH9nipNs?si=kzPFOXHZ6ezwnI4E"],
    [
      "https://www.youtube.com/embed/videoseries?si=75WLrNu6ygGrSv3A&amp;list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
    ],
  ];

  const docs = [
    [
      "https://www.w3schools.com/html/html_intro.asp",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    ["https://docs.github.com/en/get-started"],
    [
      "https://legacy.reactjs.org/docs/getting-started.html",
      "https://redux.js.org/",
    ],
    ["https://learning.postman.com/docs/introduction/overview/"],
    ["https://nodejs.org/docs/latest/api/"],
    ["https://expressjs.com/"],
    ["https://www.mongodb.com/docs/"],
  ];

  const introduction = intro[id - 1].map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const youTubeVideo = youTube[id - 1].map((item, index) => {
    return (
      <iframe key={index}
        src={item}
        className="learn"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  });

  const title = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Git and GitHub'],
    ['ReactJS', 'Redux'],
    ['Postman'],
    ['NodeJS'],
    ['ExpressJS'],
    ['MongoDB']
  ]

  const documentation = docs[id - 1].map((item, index) => {
    return (
      <div key={index}>
        <Link to={item} className="document">&#10239; Click me to get the documentation for {title[id-1][index]}</Link>
      </div>
    );
  });

  const proj = [
    [
      'https://www.youtube.com/embed/nGhKIC_7Mkk?si=iUP45MMFV0YOMer3',
      'https://www.youtube.com/embed/oFnIe-RpkE4?si=MbFMQHvk8LIzzqwX'
    ],[],[
      'https://www.youtube.com/embed/b50zSyLiCYQ?si=Ny2IbJvqH7m_R-Vu',
      'https://www.youtube.com/embed/RGKi6LSPDLU?si=JRV7UsNqk70mbDiK',
      'https://www.youtube.com/embed/eILUmCJhl64?si=VZwUYbJoseU-IFX1',
      'https://www.youtube.com/embed/edBx-fjgh4k?si=CukJBg58-oPoiPU9'

    ],[],[],[
      'https://www.youtube.com/embed/3QNBVG2yqKA?si=HPHxxhypRkCCSY5D',
      'https://www.youtube.com/embed/qwfE7fSVaZM?si=9ZXW1Zwq9XZ_ben6'
    ],[
      'https://www.youtube.com/embed/cGAdC4A5fF4?si=hz4GUBF9B2FJNHZL',
      'https://www.youtube.com/embed/pfCX1vJAnnI?si=ThWR44HbdGsTdnch',
      'https://www.youtube.com/embed/stcihX2eavw?si=aqE2LKvw6g9uij8a',
      'https://www.youtube.com/embed/cGAdC4A5fF4?si=6-75QkoWauDjExo2'
    ]
  ]

  const projects = proj[id - 1].map((item, index) => {
    return (
        <iframe key={index}
        src={item}
        className="project"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  });

  return (
    <div className="step">
      <Navbar title={head[id-1]}/>
      <ul className="steplist">{introduction}</ul>
      <h1 className="learnlist subtitle">Learn from here: </h1>
      <div className="youtube">{youTubeVideo}</div>
      <h1 className="subtitle">Documentation: </h1>
      <div className="doc">{documentation}</div>
      {proj[id-1].length!==0 && (<h1 className="proj subtitle">Practice by making these projects: </h1>)}
      <div className="projectlist">{projects}</div>
      {/* eslint-disable-next-line */}
      <a href="#" className="up">&uArr;</a>
    </div>
  );
};

export default Step;
