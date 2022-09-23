import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faPersonDigging } from '@fortawesome/free-solid-svg-icons';

export default function Chatroom() {
    return (
        <div className='chatroom'>
        <h1 className='pagein'><FontAwesomeIcon className='hammer' icon={faPersonDigging}/> Page In Development <FontAwesomeIcon className='hammer' icon={faHammer}/></h1>
        <h2 className='chatlink'>Click<Link to='/' className='here'> Here</Link> To Go Back</h2>
        </div>
    )
}