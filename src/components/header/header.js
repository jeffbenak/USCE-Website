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
    <Navbar bg="light" expand="xl">
      <Container className='nav'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav varient='tabs' defaultActiveKey="/" className="me-auto nav-tabs">
            <NavItem>
              <NavLink to="/"><img className='usce' src={usce}></img></NavLink>
            </NavItem>
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
      </Navbar.Collapse>
    </Container>
  </Navbar>

      </div>
    )
}