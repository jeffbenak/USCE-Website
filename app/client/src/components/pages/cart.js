import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../utils/globalstate';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import Auth from '../../utils/auth';
import './style.css';


export default function Cart () {
  // const [state, dispatch] = useStoreContext();


// function toggleCart() {
//   dispatch({ type: TOGGLE_CART });
// }




// if (!state.cartOpen) {
//   return (
//     <div 
//     onClick={toggleCart}
//     >
//       <span role='img' aria-label='trash'>
//              🛒
//       </span>
//     </div>
//   )
// }


  return (
      <div>
        {/* <div 
        // onClick={toggleCart}
        >
               <span role='img' aria-label='trash'>
                        🛒
                      </span>
                      </div>

              {Auth.loggedIn() ? (
                <button>Checkout</button>
                
              ) : (
                <span>(log in to check out)</span>
              )} */}
        </div>
        
    );
};