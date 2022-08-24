import React from 'react';
import { useStoreContext } from '../../utils/globalstate';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';



export default function Cart () {
    const [state, dispatch] = useStoreContext();


    return (
        <div className='cart'>
        <span role="img" aria-label="trash">
          🛒
        </span>
        </div>
    )
}