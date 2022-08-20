import React from 'react'
import foto from '../../img/IMG_20210921_134434.jpg';

const Inicio = () => {
    return (
        <>
            <div className='inicio'>
                <div className='info'>
                    <div>
                        <p>Hola!</p>
                        <h2>Soy Rosemberg</h2>
                        <p>Desarrollador web Front End</p>
                        <button className='hablemos'>Hablemos</button>
                    </div>
                </div>
                <div className='img'><img src={foto} alt='foto'/></div>
            </div>
        </>
    )
}

export default Inicio