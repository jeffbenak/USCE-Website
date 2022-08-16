import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from '../header/header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Register() {

    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [nameReg, setNameReg] = useState('')
    const [phoneReg, setPhoneReg] = useState('')
    const [countryReg, setCountryReg] = useState('')
    const [stateReg, setStateReg] = useState('')
    const [cityReg, setCityReg] = useState('')
    const [zipReg, setZipReg] = useState('')
    const [addressReg, setAddressReg] = useState('')
    const [visaReg, setVisaReg] = useState('')



    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post('http://localhost:3001/register', {
         email: emailReg,
         password: passwordReg,
         name: nameReg,
         phone: phoneReg,
         country: countryReg,
         state: stateReg,
         city: cityReg,
         zip: zipReg,
         address: addressReg,
         visa: visaReg
        }).then((response) => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response);
        })
      };



    return (
        <div>
        <Header></Header>

        {/* <h3>Become an insider to USCE Match!</h3>
        <p>
          There is a $2.99 one time, non-refundable processing membership fee.
        </p> */}

        <h3>Registration</h3>
        <div className='registration'>
            
      <h4 className='binfo'>Basic Info</h4>
      <h4 className='meminfo'>Member Information</h4>
      <br></br>
      <br></br>
      <div className='mainform'>
      <Form className='userform'>
        <Form.Group className='mb-1 emailbox' controlId="formBasicEmail">
          <Form.Control type='email' placeholder='Email' onChange={(e) => {
                setEmailReg(e.target.value);
                }}
                >
          </Form.Control>    
          <br></br>    
          <Form.Control type='password' placeholder='Password' 
                onChange={(e) => {
                setPasswordReg(e.target.value);
                }}
                >
          </Form.Control>  
          <br></br>
          <Form.Control type='password' placeholder='Confirm Password'>
          </Form.Control>
          <br></br>
          <Form.Control type='text' placeholder='Full Name'
                onChange={(e) => {
                setNameReg(e.target.value);
                }}
                >
          </Form.Control>
          <br></br>
          <Form.Control type='tel' placeholder='Phone Number'
                onChange={(e) => {
                setPhoneReg(e.target.value);
                }}
                >
          </Form.Control>
        </Form.Group>
      </Form>
      <Form className='infoform'>
        <Form.Group className='mb-1' controlId="formBasicInfo">
          <Form.Control className='countbox' type='text' placeholder='Country'
                onChange={(e) => {
                setCountryReg(e.target.value);
                }}
                >
          </Form.Control>
          <br></br>
          <Form.Control type='text' placeholder='State'
                onChange={(e) => {
                setStateReg(e.target.value);
                }}
                >
          </Form.Control>
          <br></br>
          <Form.Control type='text' placeholder='City'  
                onChange={(e) => {
                setCityReg(e.target.value);
                }}
                >
          </Form.Control>
          <br></br>
          <Form.Control type='postal' placeholder='Zip'
                onChange={(e) => {
                setZipReg(e.target.value);
                }}
                >
          </Form.Control>
          <br></br>
          <Form.Control type='text' placeholder='Address'
                onChange={(e) => {
                setAddressReg(e.target.value);
                }}
                >
          </Form.Control>
          <br></br>
          <Form.Control type='text' placeholder='Visa Status'
                onChange={(e) => {
                setVisaReg(e.target.value);
                }}
                >
          </Form.Control>
     
        </Form.Group>
      </Form>

      </div>
      

      <Button className='regbutton' variant='outline-success' onClick={register}>Register</Button>
      
        </div>

    </div>

    )
}