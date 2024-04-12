import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <span className="heading">{props.title}</span>
      <span className="navlogo">
        <a href="/">Webify</a>
        <a href='/donate'>Donate</a>
        <a href='/demo'>Booking</a>
      </span>
    </div>
  )
}

export default Navbar
