import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Demo = () => {
  document.body.style.backgroundColor = "#ff4040";
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    console.log(name)
    console.log(phone)
    axios.post("https://webify-backend-hnli.onrender.com", {
      name, phone
    })
    .then((response) => {
      console.log(response);
      event.target.reset();
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <>
    <Navbar title = "Learn full-stack web development"/>
    <div className='demo'>
      <div className="book">
        <img src="demo.png" alt="Book a demo class Now!" />
      </div>
      <form onSubmit={submitHandler}>
        <div>
        <span>Name: </span>
        <input type="text" name="name" id="name" />
        </div>
        <div>
        <span>Phone: </span>
        <input type="text" name="phone" id="phone" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Demo
