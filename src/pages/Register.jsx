import './Register.css'
import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <Menu />
      <div className='container-register'>
        <input type="text" placeholder='Usuario' />
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Telefono' />
        <input type="text" placeholder='Correo' />
        <input type="text" placeholder='Contraseña' />
        <Link to="/login">Register</Link>
      </div>
    </div>
  )
}

export default Register