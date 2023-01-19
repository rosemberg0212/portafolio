import React, { useEffect, useState } from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';


const Works = () => {

    const [data, setproyectos] = useState([]);

    const proyectos = [
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1674159514/match_qy7ylk.png',
            nombre: 'Match app',
            descrip: 'Aplicación para mostrar partidos de fútbol en vivo y sus reslutados.',
            link: 'https://sparkly-kataifi-0d578d.netlify.app/',
            icon: 'https://cdn-icons-png.flaticon.com/512/875/875209.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/1493/1493169.png'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1673745985/netflix_vuv9pc.png',
            nombre: 'Clon Netflix',
            descrip: 'Maquetación de un clon de netflix consumiendo la api the moviedb.',
            link: 'https://rococo-froyo-a6d80c.netlify.app/',
            icon: 'https://cdn-icons-png.flaticon.com/512/875/875209.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1673745976/cecy_n5u7mb.png',
            nombre: 'Peluqueria Cecy',
            descrip: 'Desarrollo de sitio web para peluqeria en cartagena, utilizando Reactjs para el front y nodeJs para el back.',
            link: 'https://peluqueriacecy.tk/',
            icon: 'https://cdn-icons-png.flaticon.com/512/875/875209.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1673747097/sma_eh5ydn.png',
            nombre: 'Clon plataforma SMA',
            descrip: 'Maquetacion de la plataforma estudiantil de la universidad de cartagena.',
            link: 'https://clon-plataformaudc.tk/',
            icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1673832320/clima_ju2jxc.png',
            nombre: 'Weather App',
            descrip: 'Aplicación para consulta información del clima de diferentes ciudades del mundo, consumiendo la api openweathermap.',
            link: 'https://app-clima-rous.tk/',
            icon: 'https://cdn-icons-png.flaticon.com/512/875/875209.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1673747382/salysalsa_uh3gda.png',
            nombre: 'Sal y Salsa',
            descrip: 'Pagina de restaurante en el cual se puede ordenar pedidos como carrito de compras.',
            link: 'https://snazzy-flan-4db3ab.netlify.app/',
            icon: 'https://cdn-icons-png.flaticon.com/512/875/875209.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
        },
        {
            id: uuidv4(),
            img: 'https://res.cloudinary.com/el-rous/image/upload/v1673832709/arte_uymo1y.png',
            nombre: 'Landing Page',
            descrip: 'Landing Page de una tienda virtual del negocio la casa del arte.',
            link: 'https://lacasadelarte.tk/',
            icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
            icon2: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'
        },
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