import React, { useEffect, useState } from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';


const Works = () => {

    const [data, setproyectos] = useState([]);

    const proyectos = [
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1661744153/clon-nf_w5w1ac.jpg',
            nombre: 'Clon Netflix',
            descrip: 'Maquetación de un clon de netflix consumiendo la api the moviedb.',
            link: 'https://rococo-froyo-a6d80c.netlify.app/'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1662861756/Captura_web_10-9-2022_2121_peluqueriacecy.tk_vcnaal.jpg',
            nombre: 'Peluqueria Cecy',
            descrip: 'Desarrollo de sitio web para peluqeria en cartagena, utilizando Reactjs para el front y nodeJs para el back.',
            link: 'https://peluqueriacecy.tk/'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1661743719/clon-sma_xxwk0m.jpg',
            nombre: 'Clon plataforma SMA',
            descrip: 'Maquetacion de la plataforma estudiantil de la universidad de cartagena.',
            link: 'https://clon-plataformaudc.tk/'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1661570797/Captura_web_26-8-2022_22265_app-clima-rous.tk_wsag8y.jpg',
            nombre: 'Weather App',
            descrip: 'Aplicación hecha en ReactJs que consulta información del clima de diferentes ciudades del mundo, consumiendo la api weather.',
            link: 'https://app-clima-rous.tk/'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1662863129/Captura_web_10-9-2022_212454_reto4-juventic.herokuapp.com_dwiqsx.jpg',
            nombre: 'Carrito de compras',
            descrip: 'Carrito de compras de restaurante desarrollado con React y Nodejs.',
            link: 'https://www3.animeflv.net/ver/overlord-iv-2'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1662861892/Captura_web_10-9-2022_21427_lacasadelarte.tk_yefvfy.jpg',
            nombre: 'Landing Page',
            descrip: 'Landing Page de una tienda virtual del negocio la casa del arte.',
            link: 'https://lacasadelarte.tk/'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: ''
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: ''
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: ''
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1654207832/lb9wwabylkeyyin5hqof.jpg',
            nombre: 'Nombre App',
            descrip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            link: ''
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