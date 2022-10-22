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



  const login = () => {
    Axios.post('http://localhost:3001/login', {
     email: email,
     password: password,
    }).then((response) => {
      console.log(email)

      if (!response.data.auth) {
        setLoginStatus(false); 
        console.log(response.data)
      } else {
        localStorage.setItem('token', response.data.token);
        setLoginStatus(true);
        window.location.assign('/');
        console.log(response.data)
      }
    });
  };

  useEffect(()=> {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    })
  }, []);

  // const userAuthenticated = () => {
  //   Axios.get('http://localhost:3001/isUserAuth', {
  //     headers: {
  //       'x-access-token': localStorage.getItem('token'),
  //     },
  //   }).then((response) => {

  //   })
  // }

  function checkoutButton() {
    fetch('http://localhost:3001/create-checkout-sess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 }
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
        <Header></Header>
        
      
   
      <div className='login'>
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
        <br></br>

            <p className='status'>{loginStatus}</p>

            <button onClick={checkoutButton}>Checkout</button>

            <br></br>

        <Button variant='success' className='loginbutton' onClick={login}>Login</Button>
        <br></br>
        <br></br>


        {/* {loginStatus && (
          <button onClick={userAuthenticated}>Check if Authenticated</button>
        )}     */}
        <div className='pl1'>
        <p>Become an insider to USCE Match! There is a $2.99 one time, non-refundable processing membership fee. Click the checkout button above.</p>
        <p>Dont have an account? <Link className='reg1' to='/register'>Sign up</Link> here</p>
        </div>
      </div>
        <Footer></Footer>
      </div>
    );
  }