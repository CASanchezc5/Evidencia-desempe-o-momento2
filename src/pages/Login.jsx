import './Login.css'
import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Menu />
      <div className='container-login'>
        <input type="text" placeholder='Usuario' />
        <input type="text" placeholder='Correo' />
        <input type="text" placeholder='Contraseña' />
        <Link to="/">Login</Link>
      </div>
    </div>
  )
}

export default Login