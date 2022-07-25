// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import usce from '../images/Logo.png'
// import { Home } from '../components/pages/home';
// import { LoginSignup } from '../components/pages/loginsignup';
// import { Navbar } from 'react-bootstrap';
// import { NavItem } from 'react-bootstrap';


// function NavTabs({ currentPage, handlePageChange }) {
//   return (

//     <div>

//      <div className='align'>
//        <ul className="nav nav-tabs1">
//      <li className="nav-item">
//          <a 
//             href="#loginsignup"
//            onClick={() => handlePageChange('Login/Signup')}
//            className={currentPage === 'Login/Signup' ? 'nav-link active' : 'nav-link'}
//          >
//            <p className='logsign'>Login | Signup</p>
//          </a> 
//         </li> 

//         </ul>
//      <ul className="nav nav-tabs">

//      <li className="nav-item">
//          <a
//            href="#home"
//            onClick={() => handlePageChange('Home')}  
//          >
//            <img className='usce' alt='USCE' src={usce}></img>
//          </a>
//        </li>
      
//        <li className="nav-item">
//          <a
//            href="#hof"
//            onClick={() => handlePageChange('Hof')}
//            className= {currentPage === 'Hof' ? 'nav-link active' : 'nav-link'}
//          >
//            <p className='hof'>Hall of Fame</p>
//          </a>
//        </li>
//        <li className="nav-item">
//          <a
//            href="#rotations"
//            onClick={() => handlePageChange('Rotations')}
//            className={currentPage === 'Rotations' ? 'nav-link active' : 'nav-link'}
//          >
//            Rotations
//          </a>
//        </li>
//        <li className="nav-item">
//          <a
//            href="#services"
//            onClick={() => handlePageChange('Services')}
//            className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
//          >
//            <p>Professional Services</p>
//          </a>
//          </li>
//      </ul>
//      </div>
//   </div>
//   );
// }

// export default NavTabs;