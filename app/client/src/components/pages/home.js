import React from 'react';
import Slider from '../../slider/slider';
import Header from '../header/header';
import Footer from '../footer/footer'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom';







export default function Home() {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Header></Header>
        <div className='space'></div>
        <Slider></Slider>
        <br></br>
        <br></br>
        
        <div className='homepageinfo'>

        <div className='about'>

        <h1>What Is USCE Match?</h1>

        <p>
          USCE Match is composed of united professionals from Chicago who are result-driven, trustworthy, and fun people who
          will gladly welcome you to our community. We have assisted numerously satisfied medical professionals in the past years.
      													
          </p>
          <p>
            In March 2022, 29 out of 35 residency applicants for the cycle successfully matched to a residency program. 
            Now our goal is to create more success stories by opening more USCE rotations, and reinventing our best practices.
          </p>

          </div>


          <div className='team'>            
            <h2>OUR VISION and MISSION</h2>
            <p className='p-3'>
              Our objective is to find exceptional medical professionals and create a pathway that will connect them directly to a residency program.
            </p>

            <p className='p-3'>
              We consistently redefine and pursue excellence through our structured USCE, and mentorship services 
              to elevate the best chances for you to match and become your best version.
            </p>
            </div>
            </div>


          <Footer></Footer>
      </div>
    );
  } else {
    return (
    <div>
    <Header></Header>
    <div className='space'></div>
    <Slider></Slider>
    <br></br>
    <br></br>
    <p className='log'>
      <Link to='/loginsign'>Log in</Link> to view the trade in secrets
    </p>

    <div className='homecontainer'>

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
        <h1>OUR VISION and MISSION</h1>
        <p className='p-3'>
          Our objective is to find exceptional medical professionals and create a pathway that will connect them directly to a residency program.
        </p>

        <p className='p-3'>
          We consistently redefine and pursue excellence through our structured USCE, and mentorship services 
          to elevate the best chances for you to match and become your best version.
        </p>

        </div>

        <br></br>
      </div>
      <Footer></Footer>
  </div>
    )
  }
  }
