import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Booksuccess = () => {
  let {check} = useParams();
  return (
    <div>

      {check==='1' && <Navbar title = "Booking successful!"/>}
      {check==='0' && <Navbar title = "Some error occurred!"/>}
    </div>
  )
}

export default Booksuccess
