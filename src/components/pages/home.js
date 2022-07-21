import React from 'react';
import Slider from '../../slider/slider';
import Header from '../header/header';
import Footer from '../footer/footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/fontawesome-free-brands';







export default function Home() {
    return (
      <div>
        <Header></Header>
        <div className='socials'>
        <ul className='list'>
          <li><a href='mailto:info@uscematch.com subject=subject text'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
          <li><a href='tel:+12248884000'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></li>
          <li><a href='https://www.instagram.com/uscematch/?hl=en'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
          <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></li>         
        </ul>
        </div>
        <Slider></Slider>
        <br></br>
        <br></br>
        <p className='log'>
          <Link to='/loginsign'>Log in</Link> to view the trade in secrets
        </p>

        <h1>What Is USCE Match?</h1>
        <div className='about'>
        <p>
          GET MATCHED USCE LLC is composed of young international clinical professionals from Chicago who are result-oriented, trustworthy, and your loyal partner in strategizing your USMLE journey.															
		      We have assisted numerous satisfied IMG's in the past few years and created a sizable GETMATCHED success stories.  															
          Now, we would like to share our best practices in assisting more IMG's by providing more clinical rotations and services that will																	
		      help every applicant to become a step closer to getting matched to your dream residency program.															
          </p>
          </div>

          <div className='team'>
            <h2>OUR STORY</h2>
            <br></br>
            <h2>OUR VISION and MISSION</h2>
            <br></br>
            <h2>The Leadership Team</h2>

          </div>
          <br></br>
          <br></br>
          <Footer></Footer>
      </div>
    );
  }