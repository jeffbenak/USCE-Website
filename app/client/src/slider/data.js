import { Link, Router, Route } from 'react-router-dom';
import Video1 from './Imgs/vid1.mp4';


const Slider = [
  {
    image: <video width='1500' className='vid1' preload='auto'><source src={Video1} type='video/mp4' ></source></video>,
    title: "",
    desc: "Jumpstart your full potential to MATCH to a U.S Medical Residency",
    button: <Link to='/loginsign' className='click'><button className='button'>Click Here</button></Link>
  },
  {
    image: <img className='image2' src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>,
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