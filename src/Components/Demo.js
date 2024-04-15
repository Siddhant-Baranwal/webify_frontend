import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Blob from './Blob';

const Demo = () => {
  const [load, setLoad] = useState(false);
  const BACKEND_URL = "https://webify-backend-hnli.onrender.com";
  const navigate = useNavigate();
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
  const submitHandler = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    setLoad(true);
    await axios.post(`${BACKEND_URL}/demo`, {
      name, phone
    }) 
    .then((response) => {
      event.target.reset();
      if(response.data.success===true){
        navigate('/result/1');
      }
      else{
        navigate('/result/0');
      }
    })
    .catch((error) => {
      navigate('/result/0');
    })
    setLoad(false);
  }
  return (
    <>
    {!load && <Navbar title = "Book a free counselling session now!"/>}
    {!load && <div>
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
    </div>}
    {load && <div className='loader'>
    <img src="/otherImages/loading.gif" alt="Loading..." />
    </div>}
    {!load && <Blob/>}
    </>
  )
}

export default Demo
