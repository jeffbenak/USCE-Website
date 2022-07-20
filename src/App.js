import React from 'react';
import './App.css';
import Container from "./components/container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import  Services  from './components/pages/services';
import  Hof  from './components/pages/hof';
import  Home  from './components/pages/home';
import  LoginSignup  from './components/pages/loginsignup';
import  Rotations  from './components/pages/rotations';
import Header from './components/header/header'
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        {/* <Container></Container> */}
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/loginsign" element={<LoginSignup />}/>
    <Route exact path="/services" element={<Services />}/>
    <Route exact path="/rotations" element={<Rotations />}/>
    <Route exact path="/hof" element={<Hof />}/>
    </Routes>
    
    </Router>

    </div>
  );
}

export default App;
