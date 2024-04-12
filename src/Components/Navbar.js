import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <span className="heading">{props.title}</span>
      <span className="navlogo">
        <Link className="pages" to="/">Webify</Link>
        <Link className="pages" to='/donate'>Donate</Link>
        <Link className="pages" to='/demo'>Booking</Link>
      </span>
    </div>
  )
}

export default Navbar
