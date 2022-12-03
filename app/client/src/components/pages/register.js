import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from '../header/header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Register() {


    const inputValues = {fullname: '', email: '', password: '', confirmpassword: '', phonenumber: '', country: '', state: '', city: '', zip: '', address: '', visa: ''};
    const [formValues, setFormValues] = useState(inputValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);



    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [confirmPasswordReg, setConfirmPasswordReg] = useState('')
    const [phoneReg, setPhoneReg] = useState('')
    const [nameReg, setNameReg] = useState('')
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
         visa: visaReg,
        }).then((response) => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response);
        })
      };





      // const handleChange = (e) => {
      //       const {name, value} = e.target;
      //       console.log(e.target)
      //       setFormValues({...formValues, [name]: value});
      // };

      const handleNameChange = (e) => {
            setNameReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }

      const handlePasswordChange = (e) => {
            setPasswordReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleConfirmPasswordChange = (e) => {
            setConfirmPasswordReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }

      const handleEmailChange = (e) => {
            setEmailReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handlePhoneChange = (e) => {
            setPhoneReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleCountryChange = (e) => {
            setCountryReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleStateChange = (e) => {
            setStateReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleCityChange = (e) => {
            setCityReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleZipChange = (e) => {
            setZipReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleAddressChange = (e) => {
            setAddressReg(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }
      const handleVisaChange = (e) => {
            setVisaReg(e.target.value);
            console.log(e.target.value);
            const {name, value} = e.target;
            setFormValues({...formValues, [name]: value});
      }


      useEffect(() => {
            if(Object.keys(formErrors).length === 0 && isSubmit) {
                  console.log(Object.keys(formErrors).length)
                  register()
                  window.location.assign('/loginsign');
            } else {
                  console.log(Object.keys(formErrors).length)
            }
            }, [formErrors]);


      const handleSubmit = (e) => {
            setFormErrors(validate(formValues));
            setIsSubmit(true)
           
      };




      const validate = (values, e) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (!values.fullname) {
                  errors.fullname = 'Name is required';
            }
            if (!values.email) {
                  errors.email = 'Email is required'
            } else if (!regex.test(values.email)) {
                  errors.email = 'This is not a valid email format';
            }
            if (!values.password) {
                  errors.password = 'Password is required'

            }
            // else if (!passRegex.test(values.password)) {
            //       errors.password = 'Password must contain minimum eight characters, at least one letter, one number and one special character'
            // }
            else if (values.password !== values.confirmpassword) {
                  errors.password = 'Passwords must match'
            } 

            // if (!values.confirmpassword) {
            //       errors.confirmpassword = 'Please confirm your password'
            // }
            if (!values.phonenumber) {
                  errors.phonenumber = 'Phone number is required'
            } else if (values.phonenumber.length < 8 || values.phonenumber.length > 15) {
                  errors.phonenumber = 'This is not a valid phone number'
            }
            if (!values.country) {
                  errors.country = 'Country is required'
            }
            if (!values.state) {
                  errors.state = 'State is required'
            }
            if (!values.city) {
                  errors.city = 'City is required'
            }
            if (!values.zip) {
                  errors.zip = 'Zip code is required'
            } else if (values.zip.length !== 5) {
                  errors.zip = 'This is not a valid zip code'
            }
            if (!values.address) {
                  errors.address = 'Address is required'
            }
            // if (!values.visa) {
            //       errors.visa = 'Visa status is required'
            // }
            if (Object.keys(errors).length === 0) {
                  console.log(errors)
            }
            // if (handleSubmit) {
            //       window.location.assign('/loginsign');

            // }
            return errors;
      };



    return (
        <div>
        <Header></Header>
        <br></br>

        <div className='registertitle'>

        <p>Registration</p>

        </div>
        <div className='registration'>

      <br></br>
      <div className='mainform'>
      <Form 
      className='userform'>
        <Form.Group className='mb-1 emailbox'>
          <Form.Control type='email' name='email' placeholder='Email*' onChange={handleEmailChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.email}</p>

          <br></br>    
          <Form.Control type='password' name='password' placeholder='Password*'
                        onChange={handlePasswordChange}
                >
          </Form.Control>  
          <p className='errortext'>{formErrors.password}</p>
          <br></br>
          <Form.Control type='password' name='confirmpassword' placeholder='Confirm Password*'
                        onChange={handleConfirmPasswordChange}
                        >
          </Form.Control>
          <p className='errortext'>{formErrors.confirmpassword}</p>
          <br></br>
          <Form.Control type='text' name='fullname' placeholder='Full Name*' value={formValues.fullname}
                              onChange={handleNameChange}
                >
          </Form.Control>  
          <p className='errortext'>{formErrors.fullname}</p>
          <br></br>
          <Form.Control type='tel' name='phonenumber' required placeholder='Phone Number*'
                onChange={handlePhoneChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.phonenumber}</p>
        </Form.Group>
      </Form>
      <Form className='infoform'>
        <Form.Group className='mb-1' controlId="formBasicInfo">
          <Form.Control className='countbox' type='text' name='country' placeholder='Country*'
                onChange={handleCountryChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.country}</p>
          <br></br>
          <Form.Control type='text' name='state' placeholder='State*'
                onChange={handleStateChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.state}</p>
          <br></br>
          <Form.Control type='text' name='city' placeholder='City*' required
                onChange={handleCityChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.city}</p>
          <br></br>
          <Form.Control type='postal' name='zip' placeholder='Zip*'
                onChange={handleZipChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.zip}</p>
          <br></br>
          <Form.Control type='text' name='address' placeholder='Address'
                onChange={handleAddressChange}
                >
          </Form.Control>
          <p className='errortext'>{formErrors.address}</p>
      
           <form className='visaform'>
            <label className='visastat' for='visa'>Visa Status:</label>
            <select name='visa' className='visadropdown' onClick={handleVisaChange}>
                  <option value='Citizen'>Citizen</option>
                  <option value='Green Card Holder'>Green Card Holder</option>
                  <option value='Tourist Visa'>Tourist Visa</option>
                  <option value='No Visa'>No Visa</option>
            </select>
           </form>
          
     
        </Form.Group>
      </Form>

      </div>
      
      <div className='regbut'>

      <Button className='regbutton' variant='success' onClick={handleSubmit}>Register</Button>

      </div>
      
        </div>

    </div>

    )
}