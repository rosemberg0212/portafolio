import React, { useEffect, useState } from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';

const Works = () => {

    const [data, setproyectos] = useState([]);

    const proyectos = [
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1656178494/gjfa223iz5gantmnsxhg.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        }
    ]

    useEffect(() => {
        setproyectos(proyectos)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='work'>
            <h2>Mis Trabajos</h2>
            <p>Estos son algunos de los trabajos personales que he realizado a lo largo de los años.
            </p>

            <div className=''>
                
                    <Card
                        data={data}
                    />
            </div>
        </div>
    )
}

export default Works