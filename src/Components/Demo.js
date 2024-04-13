import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Demo = () => {
  const BACKEND_URL = "https://webify-backend-hnli.onrender.com";
  const [nam, setNam] = useState("");
  const [phone, setPhone] = useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'nam') {
      setNam  (value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };
  useEffect(() => {
    console.log(nam);
  }, [nam]);

  useEffect(() => {
    console.log(phone);
  }, [phone]);
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    axios.post(`${BACKEND_URL}/demo`, {
      name, phone
    }) 
    .then((response) => {
      event.target.reset();
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <>
    <Navbar title = "Book a free counselling session now!"/>
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
        <span>Name: </span>
        <input type="text" name="nam" value={nam} onChange={changeHandler} id="name" />
        </div>
        <div>
        <span>Phone: </span>
        <input type="number" name="phone" value={phone} onChange={changeHandler} id="phone" />
        </div>
        <button type="submit" disabled={nam.length===0 || phone.length!==10}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Demo
