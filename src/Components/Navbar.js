import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className="navLogo">
        <a href="/"><img src="logo.png" alt="Webify"/></a>
        <a href="/"><p>Webify</p></a>
      </div>
      <p className="heading">{props.title}</p>
      <a className='btn' href='/donate'>Donate</a>
    </div>
  )
}

export default Navbar
