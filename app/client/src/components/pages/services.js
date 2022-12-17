import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
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

<Container className='servicescontainer'>

<h1 className='services'>SERVICES</h1>

<br></br>

<div className='neurotitle'>

<h5>NEUROLOGY PACKAGES</h5>

</div>

<div className='rulestitle'>
<h5>RULES FOR PAYMENT:</h5>
</div>

<div className='packagepay'>


<ul className='neuropackslist'>

    <li>
      As soon as all ESSENTIAL REQUIREMENTS and the SPOT's availability are confirmed, you can proceed 
      in making the payment to secure your spot.
    </li>
    <li>
      A downpayment of $1,050 (inclusive of the $50 installment fee) in any package is necessary to secure placement
      in the rotation; you also have the option to make the full payment without the $50 installment fee.
      <div className='installments'><h5>FOR INSTALLMENTS:</h5>
      The remaining balance and the SECONDARY REQUIREMENTS need to be submitted 5 days before the start of the rotation;
      otherwise, there is an additional fee of $100.
        </div>
    </li>
    <li>
      Once payments are confirmed, and the students need to reschedule previously confirmed SPOT, rescheduling is likely based
      on the availability of spots and is not guaranteed.
    </li>
    <li>
      ALL PAYMENTS ARE NON-REFUNDABLE and NON-TRANSFERRABLE ONCE PROCESSED.
    </li>

</ul>

</div>

<table className='packagetable'>

<tr>
  <th></th>
  <th className='tr1 tablehead tableheader'>OPTIMUM</th>
  <th className='tr2 tablehead tableheader'>BOOSTER</th>
  <th className='tr3 tablehead tableheader'>SOVEREIGN</th>
</tr>

<tr>
  
  <td></td>
  <td className='tr1 tablehead'>$2,399.00</td>
  <td className='tr2 tablehead'>$3,099.00</td>
  <td className='tr3 tablehead'>$4,399.00</td>
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
  <td className='taleft'>Individual Case/Research Presentation</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Group Discussion on the Matching Process</td>
  <td className='tr1'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>One on One Post-Evaluation Discussion</td>
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
  <td className='taleft'>White Lab Coat from FIGS</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>ERAS Medical Residency Professional Photo</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Group Interview Prep Session</td>
  <td className='tr1'></td>
  <td className='tr2'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Lodging for 30 days</td>
  <td className='tr1'></td>
  <td className='tr2'></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Review on Personal Statement</td>
  <td className='tr1'></td>
  <td className='tr2'></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>

<tr>
  <td className='taleft'>Mentor-Mentee with Matched Residents</td>
  <td className='tr1'></td>
  <td className='tr2'></td>
  <td className='tr3'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></td>

</tr>


</table>

<br></br>

<br></br>


<div className='summarytitle'>
<h2>SUMMARY</h2>
</div>


<div className='packagesummary'>


<div className='optimumpack'>
  
  <div>

<h1 className='packagetitle'>OPTIMUM</h1>

<p>
  This is the core bronze starter package for $2,399.
  <div className='italics'>This is the package of choice if you are working on a tight budget and 
  will not need any assistance with the interview prep, transportation, or accommodation.
  </div>
</p>

<p>
This package includes four weeks, hands-on rotation for approximately 40-50 hours per week. The students 
wil have hands-on access to St Anthony's EMR (Paragon). Performing assisted EMG-NCV as well as performing 
neuro exam, migraine injections, MMSE and MoCA and more. You are expected to verify the patient's prescriptions
after their session with Dr Calimag and you are expected to provide some applicable health-teachings.
</p>

  <p>
   Help is abundantly provided and it is a safe environment to learn and be guided accordingly. Do not 
   be afraid to ask for help.
  </p>

  <p>
    The Park Ridge clinic also provides snacks, juice, water, coffee and pharmaceutical lunches mostly on 
    Mondays and Wednesdays, so please make it sure you communicate any food restrictions.
  </p>

  <p className='bold'>
    Free transportation for 4 weeks is included in this package for students who meet all the criteria below:
  </p>

  <div>
  <ul className='upper-alpha'>
    <li>
      STEP 1 SCORE is 240+ or PASS only on the first take.
    </li>
    <li>
      STEP 2 SCORE is 240+.
    </li>
    <li>
      Year of graduation is less than 3 years upon application.
    </li>

  </ul>
  </div>

  </div>

  </div>

  <div className='boosterpack'>
  
  <div>

<h1 className='packagetitle'>BOOSTER</h1>

<p>
  This is the Silver Booster for $3,099. This is the mid-range package which provides great value to 
  your hard-earned money. If you are needing a VISA letter for entry to the U.S, or to strengthen your 
  VISA application, then you can benefit on this package.
</p>

<p>
This package includes transportation assistance for 4 weeks, where Dr Calimag, when going to other locations,
will pick up the students in the Park Ridge clinic and drop you off to Park Ridge after.
</p>

  <p>
   This also includes a one-time 3-4 hour group interview prep where students will be randomly asked to perform
   through a simulated 15-20 minute interview session and will be given honest feedback. Fulfillment is from September 
   to December during the interview season.
  </p>

  <p>
    This package includes one item of short lab coat from FIGS with USCE MATCH embroidery (SRP $125).
  </p>

  <p className='clothelink'>
    For <a href='https://www.wearfigs.com/products/womens-bellevue-short-slim-lab-coat?color=White'>WOMEN</a>
  </p>

  <p className='clothelink'>
    For <a href='https://www.wearfigs.com/products/mens-harlem-short-slim-lab-coat?color=White'>MEN</a>
  </p>

  <p>
    Complimentary ERAS Photo shoots are scheduled once a month and you will be responsible for your outfit
    and make-up. You spend 30 mins with a seasoned photographer and get to pick 3 photos to be enhanced and 
    edited.
  </p>

  </div>

  </div>


  <div className='sovereignpack'>
  
  <div>

<h1 className='packagetitle'>SOVEREIGN</h1>

<p>
  This is best value comprehensive package for $4,399. There is a limit of only 3 students per rotations
  for this package.
</p>

<p>
We say during the matching process your network is your networth, thus the more information you know, the more
you will be confident. A matched  resident will share best practices, personal trade-in secrets through a lively
Q&A.
</p>

  <p>
   You get to participate on 4 group sessions with 4 different matched residents. This is a virtual session, each
   session is at least one hour long (Fulfillment is August to December).
  </p>

  <p>
    Review on the personal statement: This service does not include any editorial assistance or a ghostwriter.
  </p>

  <h5>STEPS</h5>

  <ul className='upper-alpha'>
    <li>
      Complete your Personal Statement and submit for review.
    </li>
    <li>
      You will be assigned to a matched resident or a senior consultant to review your work focusing on the structure,
      form, content, and some suggestions.
    </li>
    <li>
      This review is ONE TIME only. The review can be given virtually, in person, or through e-mail.
    </li>
  </ul>

  <div className='lodging'>

  <p>
    Lodging is inclusive for 30 days without meals. Our previous students since 2020 highly recommends Ms. Squire, 
    the host for AirBnB.
  </p>

  <p>
    She can offer a free airport pick-up in O'Hare Airport depending on her schedule, and is not guaranteed.
  </p>

  <p>
    She lives about 10 mins walking distance to the clinic in Park Ridge. You will share the room with another
    student (same gender). For an additional $100 you can have your own room, subject to availability.
  </p>

  </div>

  </div>

  </div>



</div>


</Container>

       <Footer></Footer>

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

      <Footer></Footer>

      </>

    )
  }
  }