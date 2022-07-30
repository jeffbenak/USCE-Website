import React, { useState } from 'react';
import Axios from 'axios';
import Header from '../header/header'

export default function LoginSignup() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post('https://localhost3001/register', {
     username: usernameReg,
     password: passwordReg
    }).then((response) => {
      console.log(response);
    });
  };

    return (
      <div>
        <Header></Header>
        <h1>Login/ Signup</h1>
        
            <h3>Become an insider to USCE Match!</h3>
        <p>
          There is a $2.99 one time, non-refundable processing membership fee.
        </p>

        <div className='registration'>
          <h2>Registration</h2>
          <label>Username</label>
          <input 
          type='text' 
          onChance={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input 
        type='text'
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />
      <button>Register</button>
        </div>
      <div className='login'>
        <h2>Login</h2>
        <input type='text' placeholder='Username'/>

      </div>

      </div>
    );
  }