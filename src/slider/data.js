import { Link, Router, Route } from 'react-router-dom'  


const Slider = [
  {
    image: <img className='image1' src='https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg'></img>,
    title: "Slide One",
    desc: "Jumpstart your full potential to MATCH to a U.S Medical Residency",
    button: <Link to='/loginsign'>Click Here</Link>
  },
  {
    image: <img className='image2' src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>,
    title: "Slide Two", 
    desc: "Stand out and ace your medical residency interview",
    button: <Link to="/services">Click Here</Link>
  },
  {
    image: <img className='image3' src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
'></img>,
    title: "Slide Three",
    desc: "Reviews of ultiple doctors who have joined our program",
    button: <Link to="/">Click Here</Link>
  },
  {
    image: "",
    title: "Slide Four",
    desc: "Connect to a fellow IMG and share best practices with our virtual USCE MATCH Agora chatroom",
    button: "Click Here"
  },
];

export default Slider;