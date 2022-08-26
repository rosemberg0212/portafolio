import React from 'react'
import { FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { ImWhatsapp } from 'react-icons/im'
import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'


const Contac = () => {

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire(
          'Good job!',
          'Correo enviado!',
          'success'
        )
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal!'
        })
      });
  }
  return (
    <div className='contact'>
      <h2>Contáctame</h2>
      <div className='grid'>
        <div className='info-contact'>
          <h3>Información de contacto</h3>
          <div className='info-g'>
            <p><FaMapMarkerAlt /> Cartagena, Colombia</p>
            <p><IoMdMail /> rosemberc.g.02@gmail.com</p>
            <p><ImWhatsapp /> +57 3015687156</p>

            <h3>Sígueme</h3>
            <div className='icons'>
              <a href='https://www.linkedin.com/in/rosemberg-cardales-guerrero-5ab673221'><FaLinkedin /></a>
              <a href='https://github.com/rosemberg0212'><BsGithub /></a>
              <a href='https://www.facebook.com/rosembergCG/'><BsFacebook /></a>
              <a href='https://www.instagram.com/el_rous00/'><BsInstagram /></a>
            </div>
          </div>
        </div>
        <div className='inputs'>
          <form onSubmit={onSubmit}>
            <div className='nombre flex-i'>
              <label htmlFor='nombre'>NOMBRE</label>
              <input type='text' name='nombre' id='nombre' placeholder='Digite su numbre' />
            </div>
            <div className='num-mail'>
              <div className='flex-i'>
                <label htmlFor='tel'>NÚMERO DE TELÉFONO</label>
                <input type='tel' name='tel' id='tel' placeholder='Digite su teléfono' />
              </div>
              <div className='flex-i'>
                <label htmlFor='mail'>EMAIL</label>
                <input type='mail' name='mail' id='mail' placeholder='Digite su correo' />
              </div>
            </div>
            <div className='mensaje flex-i'>
              <label htmlFor='area'>SU MENSAJE</label>
              <textarea id='area' name='area' placeholder='Digite su mensaje' />
            </div>
            <input type='submit' value='Enviar' className='btn-s' />
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contac