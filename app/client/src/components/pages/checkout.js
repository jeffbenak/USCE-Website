import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../utils/globalstate';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import Auth from '../../utils/auth';
import './style.css';


export default function Checkout () {

function checkoutButton() {
  fetch('http://localhost:3001/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 1 },
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
}



  return (
      <div>
       



              <button onClick={checkoutButton}>Checkout</button>

        </div>
        
    );
};