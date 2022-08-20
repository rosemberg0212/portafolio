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
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/'>Sobre Mí</Link></li>
                        <li><Link to='/'>Portafolio</Link></li>
                        <li><Link to='/'>Contacto</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar