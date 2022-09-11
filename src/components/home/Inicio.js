import React from 'react'
import video from '../../img/logo-2.mp4'

const Inicio = () => {
    return (
        <>
            <div className='inicio'>
                <div className='info'>
                    <div>
                        <p>Hola!</p>
                        <h2>Soy Rosemberg</h2>
                        <p>Desarrollador web Front End</p>
                        <a href='#contacto'><button className='hablemos'>Hablemos</button></a>
                    </div>
                </div>
                <div className='img'>
                    <video muted autoPlay loop>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}

export default Inicio