import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas} from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'
import LocationBase from '../utils/LocationBase'

const Footer = () => {
  return (
    <>
             <div className='footer'>
     <div className='location'>
      <span>OUR LOCATION:</span>
      <p>Syedpur house, Tilagor - Ambarkhana Road, Sylhet, Sylhet Sadar</p>
      <p>Phone: +8801921275800<br></br>
        Email: info@uplinefitness.com</p>
        <div className='social-icons'>
          <p>Social Media</p>
          <div className='icon'>
           <div className='fb'><FontAwesomeIcon icon={fab.faFacebook}/></div>
           <div className='insta'><FontAwesomeIcon icon={fab.faInstagram}></FontAwesomeIcon></div>
     <div className='gmail'><a href="mailto:routhaman831@gmail.com"><FontAwesomeIcon icon={fas.faEnvelopeOpen} /></a></div>

           </div>
      </div>

      </div>
      <div className='sitemap'>
        <span>SITEMAP</span>
        <LocationBase />
      </div>
    
     </div>
     <div className='copyright'>
      <p>© Copyright 2024 Heavenly Fitness & Health Pvt. Ltd. All Rights Reserved .</p>
      <span>Made by Prottoy Chakroborty & Hasan Ahmed Sani</span>
     </div>
    </>
  )
}

export default Footer

