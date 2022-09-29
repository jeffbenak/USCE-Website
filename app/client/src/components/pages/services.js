import React from 'react';
import Header from '../header/header';
import './style.css';
import Cart from './cart'



export default function Services() {
    return (
      <div>
        <Header></Header>
        <Cart />
       
        <h1>Services</h1>
        
        <div className='aboutmatch'>
        <p>
          At USCE Match, we offer professional services with multiple different doctors who you can work with. 
        </p>
        <p>
          Below are the different services we offer, feel free to browse around and check out which one suits you best. 
        </p>
        </div>

      </div>
    );
  }