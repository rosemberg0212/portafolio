import React from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';
import logo from '../../img/logo-rous-removebg-preview.png'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='logo'><img src={logo} alt='logo'/></Link>
                <input type='checkbox' id='toggler' />
                <label for='toggler'><FiMenu /></label>
                <div className='menu'>
                    <ul className='list'>
                        
                        <li><a href='#home' id='1'>Inicio</a></li>
                        <li><a href='#about' id='2'>Sobre Mí</a></li>
                        <li><a href='#work' id='3'>Portafolio</a></li>
                        <li><a href='#contacto' id='4'>Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar