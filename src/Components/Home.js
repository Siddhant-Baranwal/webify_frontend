import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  useEffect(() => {
    const parallax = (e) => {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.05}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.10}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.15}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      const elem = document.getElementById("parallax");
      if (elem) {
        elem.style.backgroundPosition = x;
      }
    };
    document.addEventListener("mousemove", parallax);
    
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  
  const description = [
    'HTML structures web pages, CSS styles them, controlling layout and appearance. JavaScript adds interactivity, dynamic content, and enhances user experience with animations and form validation. Together, HTML, CSS, and JavaScript form the core technologies for building modern, interactive, and visually appealing websites.',
    'Git, a version control system, tracks code changes in software development, facilitating collaboration and history tracking. GitHub, a web-based platform, hosts Git repositories, offering collaboration tools like issue tracking and pull requests. It centralizes open-source projects, fostering a global developer community for sharing and contributing to code.',
    'ReactJS, a Facebook-developed library, builds dynamic UIs with reusable components, efficiently managing state. Its modular architecture promotes collaboration. Redux, a predictable state container, complements React, managing app state centrally. Together, ReactJS and Redux enable scalable, high-performance web apps by enhancing data flow and state management.',
    'Postman, a popular API development tool, simplifies API design, testing, and documentation. Its user-friendly interface allows developers to create and send HTTP requests, analyze responses, and define parameters easily. Postman\'s features include automated testing, mock servers, and API documentation generation, facilitating efficient collaboration and streamlining API development workflows.',
    'Node.js, leveraging Chrome\'s V8 engine, executes JavaScript server-side, enabling scalable web apps. Its non-blocking, event-driven model suits real-time apps and concurrent requests. Nodemon, a utility, automates Node.js app restarts upon file changes, fostering seamless development and faster iterations.',
    'Express.js, a minimalist web framework for Node.js, simplifies the process of building web applications and APIs. With its robust features, middleware support, and powerful routing capabilities, Express enables rapid development and scalability. Its lightweight nature and vast ecosystem make it a popular choice for developers seeking flexibility and performance in web development.',
    'MongoDB, a NoSQL database, offers flexible schema design and horizontal scalability, making it ideal for handling large volumes of unstructured data. With its document-oriented approach and powerful query capabilities, MongoDB allows developers to build modern, high-performance applications across various industries, from e-commerce to IoT and beyond.'
  ]
  const desc = description.map((item, index) => {
    return (
      <div key={index}>
      <Link to={`/step/${index + 1}`} className="item">
        {index % 2 === 0 && (
          <>
            <img src={`/toolsImages/step${index + 1}.png`} alt={`Step${index + 1}`} />
            <div className='special' >{item}</div>
          </>
        )}
        {index % 2 === 1 && (
          <>
            <div className='special' >{item}</div>
            <img src={`/toolsImages/step${index + 1}.png`} alt="Step1" />
          </>
        )}
      </Link>
      </div>
    );
  });
  
  

  return (
    <div>
      <Navbar title = "Learn full-stack web development" hide="true"/>
      <div id="parallax"><h1>Webify</h1></div>
      <h1 className="bookhead">Introduction!</h1>
      <div className="intro">
      <img src="/otherImages/introImg.png" className='introImg' alt="Web Development" />
      <p className='introPara'>Welcome to our beginner-friendly guide to web development! Whether you're just starting your journey into the world of coding or looking to expand your skills, this website is designed to be your go-to resource. From understanding the basics of HTML, CSS, and JavaScript to exploring advanced frameworks and tools, we're here to provide you with clear explanations, practical examples, and step-by-step tutorials. Our goal is to empower you to create stunning websites and web applications, equipping you with the knowledge and tools you need to succeed in the dynamic field of web development. Let's dive in and start building together!</p>
      </div>
      <h1 className="bookhead">Step-wise topics</h1>
      <div className="list">
        {desc}
      </div>
      <Link to='/demo' className='demoTitle'>Book a free counselling class</Link>
      {/* eslint-disable-next-line */}
      <a href="#" className="up">&uArr;</a>
    </div>
  )
}

export default Home
