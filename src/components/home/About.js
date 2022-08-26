import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='title'>
        <h2>Sobre Mí</h2>
      </div>
      <div className='info'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br />
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.</p>
        <div className='btnG'>
          <a href='#work'><button>Ver trabajos</button></a>
          <button>Descargar CV</button>
        </div>
      </div>
    </div>
  )
}

export default About