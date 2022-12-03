import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import doctorvid from './videos/doctorvid.mp4'
import Video1 from './videos/vid1.mp4';
import Doctors from './videos/doctors.mp4';
import Doc from './videos/doctor.jpg';
import '../components/pages/style.css';


const Slider = [
  {
    image: <div className='video2'><video controls muted autoPlay loop
     width='1550px' height='875px' 
    // playing={true} volume='0' loop={true}>
    >
       <source src={Doctors}/>
       </video></div>,
    desc: <p className='text2'>Stand out and ace your medical residency interview</p>,
    button: <Link to='/services' className='click2'><button className='button'>Click Here</button></Link>
  },
  {
    image: <img className='image3' alt='doctor' src={Doc}></img>,
    desc: <p className='text3'>Reviews of multiple doctors who have joined our program</p>,
    button: <Link to='/rotations' className='click'><button className='button'>Click Here</button></Link>
  },

];

export default Slider;