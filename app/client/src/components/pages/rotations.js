import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer'
import DocImg from '../../images/doctor.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



export default function Rotations() {
    return (
      <div>
        <Header></Header>
        <Container className='rotations'>
      <Row className='abouts'>
        <Col>
       <div className='neuro'>
        <ul className='doclist'>
      <li>
       <h1 className='logy'>Neurology</h1>
      </li>
      <br></br>
      <li>
       <div className='doc'>
       <p>Dr. David Calimag</p>
       </div>
      </li>
      <br></br>
      <li>
       <div>
        <img className='docimg' src={DocImg}></img>
       </div>
       </li>
       
       </ul>
       
        
       </div>
       </Col>


       <br></br>

       <Col>
       <div className='background'>
        <ul className='medlist'>
      <li>
       <h1 className='im'>Internal Medicine</h1>
      </li>
      
        <li>
       <div className='pb'>
       <h2>Professional Background</h2>
       </div>
       </li>
       <li>
       <div className='profback'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Habitasse platea dictumst quisque sagittis. Senectus et netus et 
          malesuada fames ac turpis. Consequat interdum varius sit amet mattis 
          vulputate enim nulla
        </p>
       </div>
       </li>

       <li>
       <div className='bot'>
       <h2>Background Of The Rotation</h2>
       </div>
      </li>
      <div className='botr'>
      <p>Sagittis id consectetur purus ut. Ultrices in iaculis nunc sed augue.
         Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. 
         Massa massa ultricies mi quis hendrerit dolor magna. Faucibus et 
         molestie ac feugiat. 
        </p>
      </div>
       
       </ul>
       
        
       </div>
       </Col>

       </Row>

      

 
       
       </Container>

      <br></br>

      <Footer></Footer>

      </div>
    );
  }