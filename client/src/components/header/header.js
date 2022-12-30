import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import usce from '../../images/Logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/fontawesome-free-brands';

export default function Header() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  function navigationBar() {

    if (Auth.loggedIn()) {
      return (
        <Container className='navbar-container'>
          <Nav varient='tabs' className="nav-tabs .d-lg-flex">

            <Navbar.Collapse>
            <div className='items'>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/hof">HALL OF FAME</NavLink>
              </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/rotations">U.S ROTATIONS</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/services">PROFESSIONAL SERVICES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/" onClick={logout}>LOG OUT</NavLink>
            </NavItem>
            
            </div>
            </Navbar.Collapse>
        </Nav>
   
    <div className='pull-right hidden-lg'>
            </div>
    </Container>
    
      );
    } else {
      return (
        <Container className='navbar-container'>
          <Nav varient='tabs' className="nav-tabs .d-lg-flex">
            <Navbar.Collapse>
            <div className='items'>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/hof">HALL OF FAME</NavLink>
              </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/rotations">U.S ROTATIONS</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/services">PROFESSIONAL SERVICES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/loginsign">LOGIN | SIGN UP</NavLink>  
            </NavItem>           
            </div>
            </Navbar.Collapse>
        </Nav>
    
    <div className='pull-right hidden-lg'>
            </div>
            </Container>
      );
    }
  }


  
    return (

      <div className='header'>
        <Navbar expand="lg">
      <div>
            <NavLink to="/"><img className='usce' src={usce}></img></NavLink>
            </div>

          {navigationBar()}

          <NavItem>
          <div className='socials'>
            <ul className='list'>
            <li><a href='mailto:info@uscematch.com'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
            <li><a href='tel:+12248885000'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></li>
            <li><a href='https://www.instagram.com/uscematch/?hl=en'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
            <li><a href='https://www.facebook.com/USCEMatch/'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
            <li><a href='https://wa.me/12248885000'><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></li>
            </ul>
          </div>
          </NavItem>

          <div className='pull-right hidden-lg'>
          <Navbar.Toggle />
          </div>
    </Navbar>
    </div>
  
    )
}