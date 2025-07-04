import React from 'react'
import logo from "../assets/logo.png"
function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="AirBnb Logo" className= "nav-logo"/>
      </nav>
    </div>
  )
}

export default Navbar
