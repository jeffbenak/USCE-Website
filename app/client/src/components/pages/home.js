import React from 'react';
import Slider from '../../slider/slider';
import Header from '../header/header';
import Footer from '../footer/footer'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/fontawesome-free-brands';







export default function Home() {
  if (Auth.loggedIn()) {
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

        <h1>What Is USCE Match?</h1>
        <div className='about'>
        <p>
          USCE Match is composed of united professionals from Chicago who are result-driven, trustworthy, and fun people who
          will gladly welcome you to our community. We have assisted numerously satisfied medical professionals in the past years.
      													
          </p>
          <p>
            In March 2022, 29 out of 35 residency applicants for the cycle successfully matched to a residency program. 
            Now our goal is to create more success stories by opening more USCE rotations, and reinventing our best practices.
          </p>
          </div>

          <br></br>
          <br></br>

          <div className='team'>            
          <br></br>
            <h2>OUR VISION and MISSION</h2>
            <p className='p-3'>
              Our objective is to find exceptional medical professionals and create a pathway that will connect them directly to a residency program.
            </p>

            <p className='p-3'>
              We consistently redefine and pursue excellence through our structured USCE, and mentorship services 
              to elevate the best chances for you to match and become your best version.
            </p>
            <br></br>
            <h2>The Leadership Team</h2>
            <p className='p-3'>Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui. Ullamcorper eget nulla facilisi etiam dignissim diam. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Justo nec ultrices dui sapien eget mi. Faucibus et molestie ac feugiat. Suspendisse sed nisi lacus sed viverra tellus in hac. Dolor sit amet consectetur adipiscing elit ut. Viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et tortor at risus.</p>

          </div>
          <Footer></Footer>
      </div>
    );
  } else {
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
      USCE Match is composed of united professionals from Chicago who are result-driven, trustworthy, and fun people who
      will gladly welcome you to our community. We have assisted numerously satisfied medical professionals in the past years.
                            
      </p>
      <p>
        In March 2022, 29 out of 35 residency applicants for the cycle successfully matched to a residency program. 
        Now our goal is to create more success stories by opening more USCE rotations, and reinventing our best practices.
      </p>
      </div>

      <br></br>
      <br></br>

      <div className='team'>            
      <br></br>
        <h2>OUR VISION and MISSION</h2>
        <p className='p-3'>
          Our objective is to find exceptional medical professionals and create a pathway that will connect them directly to a residency program.
        </p>

        <p className='p-3'>
          We consistently redefine and pursue excellence through our structured USCE, and mentorship services 
          to elevate the best chances for you to match and become your best version.
        </p>
        <br></br>
        <h2>The Leadership Team</h2>
        <p className='p-3'>Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui. Ullamcorper eget nulla facilisi etiam dignissim diam. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Justo nec ultrices dui sapien eget mi. Faucibus et molestie ac feugiat. Suspendisse sed nisi lacus sed viverra tellus in hac. Dolor sit amet consectetur adipiscing elit ut. Viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et tortor at risus.</p>

      </div>
      <Footer></Footer>
  </div>
    )
  }
  }
