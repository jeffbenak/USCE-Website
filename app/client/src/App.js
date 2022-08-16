import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Services  from './components/pages/services';
import  Hof  from './components/pages/hof';
import  Home  from './components/pages/home';
import  LoginSignup  from './components/pages/loginsignup';
import  Rotations  from './components/pages/rotations';
import  Register  from './components/pages/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/loginsign" element={<LoginSignup />}/>
    <Route exact path="/services" element={<Services />}/>
    <Route exact path="/rotations" element={<Rotations />}/>
    <Route exact path="/hof" element={<Hof />}/>
    <Route exact path="/register" element={<Register />}/>
    </Routes>
    
    </Router>

    </div>
  );
}

export default App;
