import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import doctorvid from './videos/doctorvid.mp4'
import Video1 from './videos/vid1.mp4';
import '../components/pages/style.css'


const Slider = [
  {
    image: <div className='video'><video src={doctorvid} autoPlay
    width='1550px' height='875px' playing={true} volume='0' muted loop='true'></video></div>,
    title: "",
    desc: "Jumpstart your full potential to MATCH to a U.S Medical Residency",
    button: <Link to='/loginsign' className='click'><button className='button'>Click Here</button></Link>
  },
  {
    image: <div className='video2'><video src={Video1} controls autoPlay
    width='1550px' height='872px' 
    playing={true} volume='0' loop='true'></video></div>,
    title: "", 
    desc: <p className='text2'>Stand out and ace your medical residency interview</p>,
    button: <Link to='/services' className='click2'><button className='button'>Click Here</button></Link>
  },
  {
    image: <img className='image3' alt='doctor' src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
'></img>,
    title: "",
    desc: <p className='text3'>Reviews of multiple doctors who have joined our program</p>,
    button: <Link to='/' className='click'><button className='button'>Click Here</button></Link>
  },
  {
    image: "",
    title: "",
    desc: "Connect to a fellow IMG and share best practices with our virtual USCE MATCH Agora chatroom",
    button: "Click Here"
  },
];

export default Slider;