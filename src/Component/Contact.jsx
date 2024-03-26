import React from 'react'

import instagram from '../assets/icons/instagram-icon.png';
import whatsapp from '../assets/icons/whatsapp-icon.png';
import email from '../assets/icons/email-icon.png'

const Contact = () => {
  return (
    <div className="fixed bg-transparent left-0 bottom-0 min-h-72 flex flex-col items-center">
      <div className="bg-whatsappBg rounded-full p-pad8 m-2">
        <a href="https://wa.me/19203553142"><img src={whatsapp} className='w-10 object-cover transition-transform duration-300 transform hover:scale-125'/></a>
      </div>
      <div className="bg-gradient-to-r from-instaPurpleBg to-instaPinkBg rounded-full p-pad8 m-2">
        <a href="https://www.instagram.com/blueprintm6/"><img src={instagram} className='w-10 object-cover transition-transform duration-300 transform hover:scale-125'/></a>
      </div>
      <div className="bg-emailBg rounded-full p-pad8 m-2">
        <a href="mailto:blueprintm6@gmail.com"><img src={email} className='w-10 object-cover transition-transform duration-300 transform hover:scale-125'/></a>
      </div>
    </div>
  )
}

export default Contact