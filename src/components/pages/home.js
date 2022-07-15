import React from 'react';
import Slider from '../../slider/slider'
import Header from '../header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';







export default function Home() {
    return (
      <div>
        <Header></Header>
        <ul className='socials'>
          <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></li>         
        </ul>
        <Slider></Slider>
        <h1></h1>
        <p>
          
        </p>
      </div>
    );
  }