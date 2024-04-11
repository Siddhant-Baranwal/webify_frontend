import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const Success = () => {
  document.body.style.backgroundColor = "white";
  const {text} = useParams();
  return (
    <div>
      <Navbar title = "Donate and help us grow!"/>
      <img src="payment.png" alt="Payment successful." />
      <h1 className='payment'>Payment successful with payment ID : {text}</h1>
    </div>
  )
}

export default Success
