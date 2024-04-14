import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
    <div className='navbar'>
      <Link className="pages" to="/">Webify</Link>
      <span className="navlogo">
        <Link className="pages" to='/donate'>Donate</Link>
        <Link className="pages" to='/demo'>Booking</Link>
      </span>
    </div>
      {!props.hide && <h1 className=' new bookhead' >{props.title}</h1>}
      {props.hide && <h1 className='bookhead' >{props.title}</h1>}
    </div>
  )
}

export default Navbar
