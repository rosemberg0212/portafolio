import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='title'>
        <h2>Sobre Mí</h2>
      </div>
      <div className='info'>
        <p>
        Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo. Tengo conocimientos en desarrollo web frontend como html/css, javascript, vue.js, react.js, sass, bootstrap.
        </p>
        <br />
        <p>También manejo en la parte del backend frameworks como nodeJs, express. Gestores de bases de datos no relacionales y relacionales.</p>
        <br/>
        <p>Manejo herramientas indispensables a la hora de desarrollar como son git, gitHub, postman, adobeXD y he trabajado con las metodologias de desarrollo SCRUM y RUP.</p>
        <div className='btnG'>
          <a href='#work'><button>Ver trabajos</button></a>
          <button>Descargar CV</button>
        </div>
      </div>
    </div>
  )
}

export default About