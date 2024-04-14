import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Blob from './Blob';

const Success = () => {
  const {text} = useParams();
  return (
    <div className='payment'>
      <Navbar title = "Thank you for your support !"/>
      <h1 className='payhead'>Payment successful with payment ID : {text}</h1>
      <Blob/>
    </div>
  )
}

export default Success
