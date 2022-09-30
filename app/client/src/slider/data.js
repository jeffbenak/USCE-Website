import React from 'react';
import ReactPlayer from 'react-player';
import { Link, Router, Route } from 'react-router-dom';
import Video1 from './Imgs/vid1.mp4';
import '../components/pages/style.css'


const Slider = [
  {
    image: <div className='video'><ReactPlayer url='https://ak.picdn.net/shutterstock/videos/1017509635/preview/stock-footage-doctor-in-white-coat-talking-to-camera-as-patient-pov-or-video-call.webm' 
    width='1550px' height='875px' playing='true' volume='0' loop='true'></ReactPlayer></div>,
    title: "",
    desc: "Jumpstart your full potential to MATCH to a U.S Medical Residency",
    button: <Link to='/loginsign' className='click'><button className='button'>Click Here</button></Link>
  },
  {
    image: <div className='video2'><ReactPlayer url='https://vod-progressive.akamaized.net/exp=1663309460~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2704%2F19%2F488522139%2F2191221001.mp4~hmac=fa56c30c212b47e1f912dbf144b09df0ab8ac805bbecfea0af2933654173c2a7/vimeo-prod-skyfire-std-us/01/2704/19/488522139/2191221001.mp4' 
    width='1550px' height='872px' 
    playing='true' volume='0' loop='true'></ReactPlayer></div>,
    title: "", 
    desc: <p className='text2'>Stand out and ace your medical residency interview</p>,
    button: <Link to='/services' className='click2'><button className='button'>Click Here</button></Link>
  },
  {
    image: <img className='image3' src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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