import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Booksuccess = () => {
  let {check} = useParams();
  return (
    <div>
      {check==='1' && <Navbar title = "Booking successful!"/>}
      {check==='0' && <Navbar title = "Some error occurred!"/>}
      <div className="blob">
      <img src="/otherImages/blob1.gif" alt="Gif here" />
      </div>
    </div>
  )
}

export default Booksuccess
