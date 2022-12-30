import React, { useEffect } from 'react';
import Axios from 'axios';


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


// function verify() {
//   fetch('http://localhost:3001/verify', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//   .then(res => {
//     if (res.ok) return res.json()
//     return res.json().then(json => Promise.reject(json))
   
//   })
//   .catch(e => {
//     // console.error(e.error)
//   })
//   }

const verifyPayment = () => {

Axios.get('/api/webhook')
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})

}


useEffect(() => {

  } 
        
  
)



  return (
      <div>
       



              <button onClick={verifyPayment}>Checkout</button>

        </div>
        
    );
};