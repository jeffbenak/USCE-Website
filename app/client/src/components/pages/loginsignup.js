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

      if (!response.data.auth) {
        setLoginStatus(false); 
      } else {
        localStorage.setItem('token', response.data.token);
        setLoginStatus(true);
      }
    });
  };

  useEffect(()=> {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
      }
    })
  }, []);

  const userAuthenticated = () => {
    Axios.get('http://localhost:3001/isUserAuth', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    }).then((response) => {

    })
  }

    return (
      <div>
        <Header></Header>
        
      
   
      <div className='login'>
      <Container fluid="md">
        <h2>Login</h2>
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

        <Button variant='success' className='loginbutton' onClick={login}>Login</Button>
        <br></br>
        <br></br>


        {/* {loginStatus && (
          <button onClick={userAuthenticated}>Check if Authenticated</button>
        )}     */}

        <p className='pl1'>Dont have an account? <Link className='reg1' to='/register'>Sign up</Link> here</p>
      </div>
        <Footer></Footer>
      </div>
    );
  }