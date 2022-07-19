import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import usce from '../../images/Logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
      
  <div className='header'>
    <Navbar expand="xxl">
      <Container className='navbar'>
          <Nav varient='tabs' className="nav-tabs .d-lg-flex">
            <div className='pull-left'>
            <NavLink to="/"><img className='usce' src={usce}></img></NavLink>
            </div>
            
            <Navbar.Collapse>
            <div className='items'>
            <NavItem>
              <NavLink style={{color: 'black'}} className='nav-link' to="/hof">Hall of Fame</NavLink>
              </NavItem>
            <NavItem>
              <NavLink style={{color: 'black'}} className='nav-link' to="/rotations">U.S Rotations</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink style={{color: 'black'}} className='nav-link' to="/services">Professional Services</NavLink>
            </NavItem>
            <NavItem>
              <Nav.Link style={{color: 'black'}}className='nav-link' to="#link">USCE Match Chatroom</Nav.Link>  
            </NavItem>
            </div>
            </Navbar.Collapse>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="hof">
                Hall of Fame
              </NavDropdown.Item>
              <NavDropdown.Item href="rotations">Rotations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="services">
                Professional Services
              </NavDropdown.Item>
          </NavDropdown>        */}
        </Nav>
    </Container>
    <div className='pull-right hidden-lg'>
            <Navbar.Toggle/>
            </div>
  </Navbar>
</div>
    )
}