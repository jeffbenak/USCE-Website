import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import usce from '../../images/Logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../../utils/auth'

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
              <NavLink style={{color: 'white'}} className='nav-link' to="/hof">Hall of Fame</NavLink>
              </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/rotations">U.S Rotations</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/services">Professional Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/logout" onClick={logout}>Logout</NavLink>  
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
              <NavLink style={{color: 'white'}} className='nav-link' to="/hof">Hall of Fame</NavLink>
              </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/rotations">U.S Rotations</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/services">Professional Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}} className='nav-link' to="/loginsign">Login | Signup</NavLink>  
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
      <div className='pull-left'>
            <NavLink to="/"><img className='usce' src={usce}></img></NavLink>
            </div>

          {navigationBar()}

          <div className='pull-right hidden-lg'>
          <Navbar.Toggle />
          </div>
    </Navbar>
    </div>
  
    )
}