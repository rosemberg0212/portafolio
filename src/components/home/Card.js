import React from 'react'
import img from '../../img/IMG_20210921_134434.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div className='card'>
                <div className='face front'>
                    <img src={img} alt='fondo' />
                    <h3>Nombre app</h3>
                </div>
                <div className='face back'>
                    <h3>Nombre app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='link'>
                        <Link to='/'>Link</Link>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img src={img} alt='fondo' />
                    <h3>Nombre app</h3>
                </div>
                <div className='face back'>
                    <h3>Nombre app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='link'>
                        <Link to='/'>Link</Link>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img src={img} alt='fondo' />
                    <h3>Nombre app</h3>
                </div>
                <div className='face back'>
                    <h3>Nombre app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='link'>
                        <Link to='/'>Link</Link>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='face front'>
                    <img src={img} alt='fondo' />
                    <h3>Nombre app</h3>
                </div>
                <div className='face back'>
                    <h3>Nombre app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='link'>
                        <Link to='/'>Link</Link>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='face front'>
                    <img src={img} alt='fondo' />
                    <h3>Nombre app</h3>
                </div>
                <div className='face back'>
                    <h3>Nombre app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='link'>
                        <Link to='/'>Link</Link>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='face front'>
                    <img src={img} alt='fondo' />
                    <h3>Nombre app</h3>
                </div>
                <div className='face back'>
                    <h3>Nombre app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='link'>
                        <Link to='/'>Link</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card