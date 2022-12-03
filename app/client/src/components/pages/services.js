import React from 'react';
import Header from '../header/header';
import Checkout from './checkout'
import Auth from '../../utils/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



// function paymentButton() {
//   fetch('http://localhost:3001/webhook', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 1 },
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




export default function Services() {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Header></Header>
        

        <br></br>

<Container>

<h1 className='services'>Services</h1>

<br></br>

<table className='packagetable'>

<tr>
  <th></th>
  <th className='tr1 tablehead'>BRONZE STARTER</th>
  <th className='tr2 tablehead'>SILVER BOOSTER</th>
  <th className='tr3 tablehead'>GOLD OPTIMUM</th>
</tr>

<tr>
  
  <td></td>
  <td className='tr1 tablehead'>$2,399.00</td>
  <td className='tr2 tablehead'>$3,799.00</td>
  <td className='tr3 tablehead'>$4,499.00</td>
</tr>

<tr>
  <th className='taleft'>Hands on Clinical Rotation</th>
  <td className='tr1'>Four Weeks</td>
  <td className='tr2'>Four Weeks</td>
  <td className='tr3'>Four Weeks</td>
</tr>

<tr>
  <td className='taleft'>*St Anthony Hospital Chicago</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
</tr>

<tr>
  <td className='taleft'>**Thorek Memorial Hospital Andersonville</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
</tr>

<tr>
  <td className='taleft'>***Neurology & Neurodiagnostics Outpatient Clinic</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

  
</tr>

<tr>
  <td className='taleft'>****Silver Cross Hospital Professional Building</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

  
</tr>

<tr>
  <td className='taleft'>Individual Case Presentation</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>One Hour Group Discussion on the Matching Process</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Assistance in Transportation for 4 weeks</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Provision of VISA Letter</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Lodging for 30 days without boarding</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Complimentary Professional ERAS Photography</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Virtual Mock Interview PREP One on One</td>
  <td className='tr1'></td>
  <td className='tr2'></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Mentorship with Two Matched Residents</td>
  <td className='tr1'></td>
  <td className='tr2'></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>


</table>

<br></br>

<br></br>


<h2>SUMMARY</h2>


<div className='packagesummary'>
  

<h5 className='bronzest'>BRONZE STARTER</h5>




<p>This package covers hands-on rotation to all four 
  locations including St Anthony and Thorek Andersonville Hospital. 
  The students will have hands-on access to St Anthony's EMR.
</p>
<p>
The student will have 50 hours a week of hands-on rotation and will learn in performing assisted EMG-NCV as well 
as complete neuro examination, anti-CGRP injections for migraine, MMSE and MoCA, and more… We also have pharmaceutical 
lunches mostly on Mondays and Wednesdays, so on these days, there will be free lunches and presentations for present 
and upcoming neurology treatments and advancements.
</p>

  <p>
   This package is for students who drive and will not need transportation assistance. (You can purchase a la carte for $300 for 4 weeks).
  </p>


  <h5 className='silverboost'>SILVER BOOSTER</h5>

  <p>This package has all the inclusions of the latter one, with the provision of a VISA letter that you can use upon entry to the US 
    or when you apply for a US VISA. VISA Letters are provided as soon as your requirements are submitted and when you successfully processed
    the payment/ down payment for any of the packages.
  </p>

  <p>
    Lodging with Wawa for 30 days, a well-loved host of all our students for the past few years. She lives just about 10 minute's walk from 
    the Park Ridge clinic. On some occasions, Wawa can pick you up at the O'Hare Airport when you arrive for free. Please coordinate with her 
    because she also has a very busy schedule. 
  </p>
  <p>
    She can only accomodate up to three students per rotation, with the SILVER BOOSTER you will share a room with another student (same gender).
    This service is only for lodging and no food.
  </p>

  <p>
    Details for the host:
  </p>




  <p>Name: Ms. Wartini Squire</p>


  <p>Nickname: Wawa</p>


  <p>Home Address: 8930 Robin Drive Des Plaines, IL 60016</p>


<p>The complimentary Professional ERAS Photography is scheduled once a month on a Sunday and will take place in Morton
  Grove (less than 5 minutes away from Park Ridge). You will be responsible for your own outfit, hair, and make-up if 
  needed. You will spend 30 minutes with the photographer, and he will take multiple shots. You can select your top three
  photos to be edited and enhanced.
</p>


<h5 className='goldopt'>GOLD OPTIMUM</h5>

<p>On top of the services in the Silver Booster, this includes a 90 minute mock interview prep with an experienced colleague. 
  There will be three mock interview sessions.
</p>

<p>
  Each session will be virtual and one on one. We will do a spontaneous 10-15 minute interview followed by 10-15 minutes of honest
  feedback and coaching.
</p>

<p>An experienced mentor will review your Personal Statement and give you feedback and recommendations. After you rewrite your PS,
  your mentor will review it again. This service does not include any assistance in editing and writing on the PS.
</p>

<p>Mentorship with two matched residents. You will select two current residents, based on their schedule, and participate in a group
  zoom discussion for one hour for each resident. This is a great opportunity to learn best practices about the matching process, 
  demystify information based on the resident's experience as well as trade-in secrets to optimize your best chances to match.
</p>



</div>


</Container>

       

      </div>
    );
  } else {
    return (

      <>

<Header></Header>


      <div className='viewlog'>
      <h4>Please
      <Link to='/loginsign'> Log in</Link> to view these contents or
      </h4>
      </div>

      <div className='viewsign'>
        <h4>
        <Link to='/register'>Sign up</Link> if you haven't registered.
        </h4>
      </div>

      </>

    )
  }
  }