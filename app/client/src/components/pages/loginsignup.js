import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Header from '../header/header'
import Footer from '../footer/footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function LoginSignup() {



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState(false);

  const [failedLogin, setFailedLogin] = useState('');


  const login = () => {
     if (email.length === 0 && password.length === 0) {
         setFailedLogin('Please enter email and password')
         return;
     }
    Axios.post('http://usce-website.herokuapp.com:3001/login', {
     email: email,
     password: password,
    }).then((response) => {
      console.log(response);
      

       if (response.data.message === 'Wrong email/password combination') { 
        setFailedLogin('Wrong email/ password combination');  
      } 

      else if (response.data.message === 'no user exists') {
        setFailedLogin('No user found');   
      }

      else if (!response.data.auth) {
        setLoginStatus(false);
      } 
    
    
  
      else {
        localStorage.setItem('token', response.data.token);
        setLoginStatus(true);
        window.location.assign('/');
        // console.log(response.data)
      }
    });
  };

  useEffect(()=> {
    Axios.get('http://usce-website.herokuapp.com:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      } 
    })
  }, []);



  // function checkoutButton() {
  //   fetch('http://localhost:3001/create-checkout-sess', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       items: [
  //         { id: 1, quantity: 1 }
  //       ],
  //     }),
  //   })
  //   .then(res => {
  //     if (res.ok) return res.json()
  //     return res.json().then(json => Promise.reject(json))
  //   })
  //   .then(({ url }) => {
  //     window.location = url
  //   })
  //   .catch(e => {
  //     console.error(e.error)
  //   })
  // }

    return (
      <div>
        <Header></Header>
        
      
   
      <div className='login-heading'>
      <Container fluid="md">
        <h2 className='login'>Login</h2>
        <br></br>
        <div className='userlogin'>
          <Row sm={1}>
            <Col> 
              <input className='textinput' type='text' 
              placeholder='Email'
              onChange={(e) => {
              setEmail(e.target.value);
              }}
              />
            </Col>
          </Row>

        <br></br>
        
        <Row>
          <Col>
            <input className='textinput' type='password'
            placeholder='Password'
            onChange={(e) => {
            setPassword(e.target.value);
            }}
            />
          </Col>
        </Row>
        </div>
     
        </Container>

            <p className='status'>{loginStatus}</p>

        <Button variant='success' className='loginbutton' onClick={login}>Login</Button>

        <br></br>

        <p className='loginerror'>{failedLogin}</p>


        <br></br>


        {/* {loginStatus && (
          <button onClick={userAuthenticated}>Check if Authenticated</button>
        )}     */}
        <div className='pl1'>
        <p>Dont have an account? <Link className='reg1' to='/register'>Sign up</Link> here</p>
        </div>
      </div>
        <Footer></Footer>
      </div>
    );
  }