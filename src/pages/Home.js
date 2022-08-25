import React from 'react'
import About from '../components/home/About'
import Contac from '../components/home/Contac'
import Inicio from '../components/home/Inicio'
import Works from '../components/home/Works'

const Home = () => {
  return (
    <>
      <div id='home'>
        <Inicio />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='work'>
        <Works />
      </div>
      <div id='contacto'>
        <Contac/>
      </div>
    </>
  )
}

export default Home