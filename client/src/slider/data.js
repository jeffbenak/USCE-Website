import React from 'react';
import { Link } from 'react-router-dom';
import Doctors from './videos/doctors.mp4';
import Doc from './videos/doctor.jpg';
import '../components/pages/style.css';


const Slider = [
  {
    image: <div><video  className='video2' playsInline muted autoPlay loop
    >
       <source src={Doctors}/>
       </video></div>,
    desc: <p className='text2'>JUMPSTART YOUR FULL POTENTIAL TO MATCH</p>,
    button: <Link to='/services' className='click2'><button className='button'>CLICK HERE</button></Link>
  },
  {
    image: <img className='image3' alt='doctor' src={Doc}></img>,
    desc: <div className='slide2text'><Link to='/rotations#steps_list'><p className='text3'>STEPS IN THE APPLICATION</p></Link></div>
  },

];

export default Slider;