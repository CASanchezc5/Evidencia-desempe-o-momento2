import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header className='header-menu'>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </header>
  )
}

export default Menu