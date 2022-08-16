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

          <br></br>
          <br></br>

          <div className='team'>
            <h2>OUR STORY</h2>
            <p className='p-3'>Nunc congue nisi vitae suscipit tellus mauris. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing enim eu turpis egestas pretium aenean pharetra. Lobortis mattis aliquam faucibus purus in massa tempor nec. Amet nisl suscipit adipiscing bibendum est ultricies integer. Morbi tincidunt augue interdum velit euismod in. Turpis egestas pretium aenean pharetra magna ac. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Adipiscing elit duis tristique sollicitudin nibh sit amet. Porttitor massa id neque aliquam vestibulum. In est ante in nibh mauris cursus mattis. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
            <br></br>
            <h2>OUR VISION and MISSION</h2>
            <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br></br>
            <h2>The Leadership Team</h2>
            <p className='p-3'>Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui. Ullamcorper eget nulla facilisi etiam dignissim diam. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Justo nec ultrices dui sapien eget mi. Faucibus et molestie ac feugiat. Suspendisse sed nisi lacus sed viverra tellus in hac. Dolor sit amet consectetur adipiscing elit ut. Viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et tortor at risus.</p>

          </div>
          <Footer></Footer>
      </div>
    );
  }