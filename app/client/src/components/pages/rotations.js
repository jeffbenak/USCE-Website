import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import David from '../pages/reviewimgs/drdavid.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CCollapse } from '@coreui/react'

export default function Rotations() {

  const openWithStepsListExpanded = window.location.hash == '#steps_list';

  const [visible, setVisible] = useState(false)
  const [visibletwo, setVisibleTwo] = useState(false)
  const [visiblethree, setVisibleThree] = useState(false)
  const [visiblefour, setVisibleFour] = useState(false)
  const [visiblefive, setVisibleFive] = useState(false)
  const [visiblesix, setVisibleSix] = useState(false)
  const [visibleseven, setVisibleSeven] = useState(false)

  setTimeout(function () {
    if (openWithStepsListExpanded) {
      setVisibleSix(true);
      const stepsListPosition =  document.getElementsByClassName('appsteps')[0].getBoundingClientRect().top + window.scrollY;
      const navbarHeight = document.getElementsByClassName('navbar')[0].offsetHeight;
      const positionToScrollTo = stepsListPosition - navbarHeight - 25;
      window.scrollTo(0, positionToScrollTo);
    }
  }, 500);


    return (
      <div>
        <a name='header'></a>
        <Header></Header>
        <Container className='container-lgrotations'>



          <div className='rotatetitle'>

          <h2>USCE MATCH with Dr David Calimag (Neurologist)</h2>
          <h2 className='chicagoneuro'>CHICAGO NEUROLOGY HANDS-ON ROTATION</h2>

          </div>

          <div className='usrotate'>

          <br></br>
          <br></br>

      <br></br>

  


      <div className='rotationcontent'>

      <hr className='hrblock'></hr>

        


        <div className='dctitle'>
          

        <button type='button' className='collapsible' onClick={() => {
        setVisible(!visible)
      }}>
        <h2 className='white dcwho'>
        WHO IS DAVID CALIMAG MD?
        </h2>
        </button>

        <CCollapse visible={visible}>

        <div className='dccontent'>
      <Row>

 
    <Col>

    


          <h6 className='drtitle'>
          PRE-MEDICAL EDUCATION:
          </h6>

          <p>
          College of Science, University of Sto. Tomas,
          </p>
          <p>
          Manila, Philippines - 1964 to 1968
          </p>

          <p>
          Degree Conferred: B.S. General - March 1968
          </p>



          <div className='mededu'>



          <h6 className='drtitle'>
          MEDICAL EDUCATION:
          </h6>

          <p>
          Faculty of Medicine and Surgery, University of Sto. Tomas
          </p>

        
          



          <p>
          Manila, Philippines - 1968 to 1972
          </p>

          <p>
          Degree Conferred: M.D. - April 1972 with a grade of Meritus
          </p>

          </div>



          <div className='mededu'>



          <h6 className='drtitle'>
          POST GRADUATE TRAINING: 
          </h6>

          <p>
          Sto. Tomas University Hospital, Manila, Philippines.
          </p>
          



          <p>
          Rotating Medical Internship - July 1972 to June 1973.
          </p>

          <p>
          Residency in Neuropsychiatry - July 1973 to June 1975.
          </p>

          <p>
          Fellowship in Neuropsychiatry - July 1975 to June
          </p>

          <p>
          1976 in a program.
          </p>

          <p>
          Jointly sponsored by the University of Sto. Tomas
          </p>

          <p>
          and Winthrop Stearns, Inc.
          </p>

          </div>
          
          </Col>




          <Col>
      
      <img src={David} className='drdavidimg' alt='drdavid'></img>
  
      </Col>

      


</Row>

          <div className='mededu'>

            <div className='flex'>

          <h6 className='drtitle'>
          POST GRADUATE TRAINING: 
          </h6>

          <p>
          United States.
          </p>
          

          </div>

          <p>
          Residency in Neurology - Louisville General University Hospital,
          </p>

          <p>
          Louisville, Kentucky - July 1977 to June 1979
          </p>

          <p>
          Fellowship in Neuromuscular Diseases as M.D.A. Fellow, University of
          </p>

          <p>
          Cincinnati Medical Center - July 1979 to June 1980
          </p>

          <p>
          Residency in Neurology as Senior Resident - University of Cincinnati
          </p>

          <p>
          Medical Center - July 1980 to June 1981
          </p>

          </div> 


          <div className='staffpos'>

            <h6>
            STAFF POSITION: 
            </h6>
            
            <ul>

              <li>
                <div className='stafflist'>
                <div className='atn'>
                <h6>
                Attending Neurologist 
                </h6>
                <p>
                - Oak Forest Hospital, Division of Cook County Hospital System
                </p>
                </div>
                <p>
                Head of Neurodiagnostic Clinic, i.e. EEG and EMG
                </p>
                <p>
                Retired: November 2008
                </p>
                </div>
              </li>


              <li>
                <div className='stafflist'>
                <div className='consult'>
                <h6>
                Consulting Neurologist and Head of Neurodiagnostic Clinic, Saint Anthony Hospital
                </h6>
                <p>
                - 2008 to present
                </p>
                </div>
                </div>
              </li>

            </ul>
            
            
          </div> 

          <div className='privateprac'> 

            <p>
            In private practice since 1981; licensed to practice in Illinois, Wisconsin, and Kentucky. Associate Clinical 
            Member of the American Academy of Neurology since 1983. Diplomate: American Academy of Pain 
            Management.
            </p>

            <p className='saintanth'>
            He has been a member of Saint Anthony Hospital's medical staff (S.A.H.) from 1982 until the present. He 
            knows most of his patients at S.A.H. He speaks their language and understands their lifestyle and culture, 
            making his patients feel amazingly comfortable.
            </p>

            <div className='dcexp'>

            <p className='indent'>
            He is an old-school general neurologist with a wealth of experience and wisdom, being in practice
            </p>

            <p>
            for about 40 years. He loves having students around him- it makes him feel young.
            </p>

            </div>

            
          </div>


      </div>


        </CCollapse>
       

        </div>

       <hr className='hrblock'></hr>

    <div className='backgroundcont'>

      <div className='titleof'>

      <button type='button' className='collapsible' onClick={() => {
        setVisibleTwo(!visibletwo)
      }}>
        <h2 className='white backrotate'>BACKGROUND OF THE ROTATION</h2>
        </button>

        <CCollapse visible={visibletwo}>

          

        <div className='backexpectcont'>
          

<div className='backofrotate'>

  <p>
     This is a hands-on neurology rotation for about 40-50 hours per week with a minimum of four weeks (up to 
     12 weeks depending on spot availability) where you get to closely work with your peers and Dr Calimag (the 
     attending). We only accept a maximum of six medical professionals per rotation where there will be a rotating 
     assigned senior resident within the group.

  </p>
      
  <p>

    This is an in-person rotation only and we do not provide any form of telerotations. You need to have a valid 
    US VISA to participate in the program or be a US Citizen. 

  </p>

  <p>

    This is an excellent rotation if you are pursuing neurology, internal medicine, family medicine and pediatrics.

  </p>

  <p>

  There is a good combination of inpatient and outpatient experience where the medical professionals are 
  expected to improve their full circle clinical competencies at the end of the rotation.


  </p>

</div>



  <div className='expectcont'>

    <div className='responsetitle'>

  <h2>EXPECTATIONS AND RESPONSIBILITIES</h2>

  </div>

<div className='medprofs'>

  <p>
  Medical professionals:
  </p>

</div>


  <ul>
    <li>
  <p>
    Are expected to learn, build your confidence, and improve skillset by direct and hands-on exposure to the 
    US healthcare system as well as how the matching process works. We encourage you to ask questions; 
    and we are happy to assist create a safe and fun environment for learning.

  </p>
  </li>


  <li>   
  <p>

    Will be given ample chance to interview the patients, practice your communication skills, perform 
    complete neurological examination, do a competent history taking and formulate differential diagnosis 
    and discuss everything to the attending-Dr Calimag. 
  </p>
  </li> 

  <li>   
  <p>

    Are expected to document the findings accurately and honestly using the SOAP Method in the patient’s 
    chart and in the Allscripts Paragon EMR System.

  </p>
  </li> 
  
  <li>
  <p>

    Shall perform injections to the patients with anti-CGRP for migraine (example Aimovig,Ajovy,Emgality).


  </p>
  </li>

  <li>
  <p>

    Shall proactively perform MMSE/MoCA testings to patients with cognitive impairments.


  </p>
  </li>

  <li>
  <p>

    Will assist in performing EMG/NCV and learn how to interpret results and correlate findings.


  </p>
  </li>

  <li>
  <p>

    Shall have the opportunity to assist and observe administration of steroid shots for carpal tunnel etc, 
    botulinum toxin injections for cervical dystonia, migraine, blepharospasm etc.


  </p>
  </li>

  <li>
  <p>

    Will be taught on the basics of reading routine EEG, extended VEEGs, as well as review MRI/CT scans 
    report and images.


  </p>
  </li>

  <li>
  <p>

    Are invited to participate on pharmaceutical lunches to learn more about different medications and 
    upcoming treatment. Every now and then there will be dinner pharmaceutical programs which is also a 
    great way to network.


  </p>
  </li>

  <li>
  <p>

    Are expected to behave professionally, be courteous, respectful, to maintain cleanliness in the clinic, 
    interact with fellow co-residents, clinic staff and be well-groomed always.



  </p>
  </li>

  <li>
  <p>

    Will need to present an individual neurologic case presentation on the 2nd or 3rd week. The topic will be 
    assigned by Dr Calimag or feel free to suggest a topic. You are required to discuss a recent research article 
    pertinent to the subject.


  </p>
  </li>

  <li>
  <p>

  Shall proactively perform MMSE/MoCA testings to patients with cognitive impairments.


  </p>
  </li>

  </ul>



  </div>

  </div>
          
        </CCollapse>

      </div>
      




        </div>


       <hr className='hrblock'></hr>


            <div className='schedule titleof'>

             <button type='button' className='collapsible' onClick={() => {
              setVisibleThree(!visiblethree)
              }}>
              <h2 className='sched white'>SCHEDULE</h2>
              </button>

              <CCollapse visible={visiblethree}>
              <Row>
                <Col>
              <div className='schedulecont'>


              <div className='flex'>
                <h3>
                  MONDAY:
                </h3>

                <div className='mondaycont'>
                  <p>
                    In the morning in Park Ridge, we normally start at 10:00 AM to see patients, followed by a
                    pharmaceutical lunch from 11:30 AM to 12:30 PM.
                  </p>

                  <p>
                    At around 1:00 PM, Dr Calimag goes to Thorek Hospital Andersonville to see some scheduled
                    patients both in the in-patient and outpatient.
                  </p>
                  <p>
                    At around 3:00 PM, Dr Calimag comes back to Park Ridge to see some patients until 5/6PM.
                  </p>
                </div>

              </div>

              <div className='flex'>

                <h3>
                  TUESDAY:
                </h3>

                <div className='tuesdaycont'>
                  <p>
                    Every other Tuesday Dr Calimag goes to New Lenox to see patients from 10AM to 1PM. This
                    location is about an hour away from Park Ridge so if you have the travel privileges inclusive in
                    your package you need to be in Park Ridge at 9:00 AM to tag along with Dr Calimag in the
                    ride.
                  </p>
                </div>


              </div>

              <div className='flex'>

                <h3>
                  WEDNESDAY:
                </h3>

                <div className='wednesdaycont'>
                  <p>
                    In the morning in Park Ridge, we normally start at 10 AM to see patients, followed by a
                    pharmaceutical lunch from 11:30 AM to 12:30 PM. In the afternoon, we would conduct the
                    case presentations and individual evaluation discussion.
                  </p>
                </div>


              </div>

              <div className='flex'>

                <h3>
                  THURSDAY:
                </h3>


                <div className='thursdaycont'>
                  <p>
                    If you have the travel privileges inclusive in your package, you need to meet Dr Calimag in
                    Park Ridge at 7:30 AM since St Anthony Hospital is about an hour drive away. Dr Calimag sees
                    outpatients from 9:00 AM to 1:00 PM, after he normally does rounds and see some patients
                    until 4/5PM.
                  </p>
                </div>


              </div>

              <div className='flex'>

                <h3>
                  FRIDAY:
                </h3>
                <div className='fridaycont'>

                  <p>
                    If you have the travel privileges inclusive in your package, you need to meet Dr Calimag in
                    Park Ridge at 9:00 AM. In St Anthony there will be scheduled patients for EMG/NCV from
                    10AM to 1PM.
                  </p>
                  <p>
                    Dr Calimag comes back to Park Ridge at 4:00 PM to see patients until 5/6PM.
                  </p>
                </div>


              </div>

              <div className='flex'>

                <h3>
                  SATURDAY:
                </h3>


                <div className='saturdaycont'>
                  <p>
                    If you have the travel privileges inclusive in your package, you need to meet Dr Calimag in
                    Park Ridge at 9:00 AM. In St Anthony there will be scheduled patients for EMG/NCV from
                    10AM to 1PM.
                  </p>
                </div>

                </div>
                <br></br>



              </div>
              </Col>

              </Row>


                <div className='addresscont'>
 
              <p>Outpatient:</p>

              
            <div className='outpat'>


        
        <div className='underline'>
            <p className='italics'>Neurology and Neurodiagnostics</p> 
        </div>

        <div className='addcont'>
            <p >at 1600 Dempster St. Park Ridge, Illinois 60068</p>
            </div>
            </div>

          
            <div className='silvercont'>

            <div className='underline'>

            <p>Silver Cross Hospital Medical Center</p> 

            </div>

            <div className='addcont'>

            <p>at 250 E Maple St, New Lenox, Illinois 60451</p>

            </div>

            </div>

          <br></br>

        
          <p>Outpatient and Inpatient:</p>
            <div className='outpat'>

        
        <div className='underline'>
            <p>Thorek Hospital Andersonville</p> 
        </div>
        <div className='addcont'>
            <p > at 5025 N Paulina St Chicago, IL 60640</p>
            </div>
            </div>



            <div className='silvercont'>

            <div className='underline'>

            <p>Saint Anthony Hospital</p> 

            </div>

            <div className='addcont'>

            <p> at 2875 W 19th St. Chicago, IL, 60623</p>

            </div>

            </div>
            

       </div>

       

              </CCollapse>

              <br></br>

            

            </div>

       <hr className='hrblock'></hr>


        <div className='schedulesummary'>
        
        <div className='sumsched'>
        <button type='button' className='collapsible' onClick={() => {
        setVisibleSeven(!visibleseven)
      }}>
 
        <h2 className='white schedtitle'>SUMMARY OF SCHEDULE</h2>
       
        </button>
        </div>

        <CCollapse visible={visibleseven}>

        <div className='responsivetable'>

        <table className='scheduletable'>

{/* COLUMN 1 */}

<tr>
<th className='scheduleheader'>MONDAY</th>
<th className='scheduleheader'>TUESDAY</th>
<th className='scheduleheader'>WEDNESDAY</th>
<th className='scheduleheader'>THURSDAY</th>
<th className='scheduleheader'>FRIDAY</th>
<th className='scheduleheader'>SATURDAY</th>
</tr>




<tr>
  <td className='r2t2'>10:00 AM - 12:30 PM in Park Ridge</td>
  <td className='r2t2'>9 AM - 2 PM New Lenox every other Tuesdays</td>
  <td className='r2t2'>10 AM - 2 PM in Park Ridge</td>
  <td className='r2t2'>7:30 AM - 4/5 PM St Anthony Hospital</td>
  <td className='r2t2'>9 AM - 2 PM in St Anthony</td>
  <td className='r2t2'>9 AM - 12 PM in Park Ridge</td>
</tr>






<tr>
<td className='r3t1'>1:00 PM - 3:00 PM in Thorek Hospital Andersonville</td>
<td className='r2black'></td>
<td className='r2black'></td>
<td className='r2black'></td>
<td className='r3t1'>1:00 PM - 3:00 PM in Thorek Hospital Andersonville</td>
<td className='r3t1'>1:00 PM -3/4 PM in St Anthony Hospital</td>
</tr>




  {/* COLUMN 4 */}


<tr>
  <td className='r2t2'>4:00 PM- 5/6 PM in Park Ridge</td>
  <td className='r2black'></td>
  <td className='r2black'></td>
  <td className='r2black'></td>
  <td className='r2black'></td>
  <td className='r2black'></td>
</tr>




  {/* COLUMN 5 */}



  {/* COLUMN 6 */}





  </table>

  </div>



        </CCollapse>


          

        </div>
        <hr className='hrblock'></hr>


        <div className='evalsection'>
      
       <div className='evaltitle'>

          <button type='button' className='collapsible' onClick={() => {
              setVisibleFour(!visiblefour)
              }}>
          <h2 className='posteval white'>POST-EVALUATION AND LETTERS OF RECOMMENDATION</h2>
          </button>
          <CCollapse visible={visiblefour}>

          <div className='evaluate'>

<div className='listtitle'>

<p>We evaluate every medical professional based on the following:</p>

</div>

<div className='evallist'>

<ul>

<li>
Professional Reliability, clinical skillset, and work ethic
</li>
<li>
Academic background and step exam scores
</li>
<li>
Communication/interpersonal skills
</li>
<li>
Commitment to the specialty
</li>
<li>
Individual case research presentation performance
</li>


</ul>

</div>

<div className='evalinfo'>

<p> We provide a personalized merit-based letter of recommendation to deserving applicants only. According to 
    some program directors, this rotation is well known for providing an excellent letter of recommendation for 
    worthy applicants.
</p>

<p>
    The letterhead will be Saint Anthony Hospital in Chicago. The letter will indicate the number of actual hours 
    you participated, so outstanding attendance and professional punctuality are encouraged. 
</p>

<p>
    For exceptional medical professionals, we can proactively recommend your candidacy directly to our 
    network of medical residency programs. Although we cannot guarantee your chances to match into a 
    program successfully, our previous experience has helped several deserving medical professionals to secure 
    an interview and be successfully matched.

</p>

</div>



</div>

            </CCollapse>

          </div>

        </div>


        <hr className='hrblock'></hr>

       


          <div className='adfaqstitle'>

        <button type='button' className='collapsible' onClick={() => {
              setVisibleFive(!visiblefive)
              }}>
          <div className='addit'>
            <h3 className='afaq'>Additional FAQs</h3>
          </div>
          </button>
          </div>
          <CCollapse visible={visiblefive}>

          <div className='faqcont'>

<div className='cases'>

<h5>
WHAT KIND OF CASES WILL I SEE? 
</h5>

</div>

<div className='aboutdr'>

<p>

Dr. Calimag is a general neurologist who has been in practice for 40 years; expect to see various cases, such as 
different types of seizures (even sometimes the rare ones), different types of migraine, brain concussion, 
Parkinson's disease, Cervical, and Lumbosacral Radiculopathies, Transient Ischemic Attack, Dementia, 
Insomnia, Cluster Headache, Post Herpetic Neuralgia, Tenosynovitis, TBI, Diabetic Neuropathy, Carpal Tunnel 
Syndrome, Cubital Tunnel Syndrome, Multiple Sclerosis, Meralgia Parasthetica, Peripheral Neuropathies and 
also some interesting cases like Marchiafava Bignami Syndrome, Post COVID Neurological manifestations, 
Charcot-Marie-Tooth Disorder, Diffuse Idiopathic Skeletal Hyperostosis, Post Lyme Disease Syndrome, 
Pseudotumor Cerebri, Cervical Spinal Stenosis, Meningioma, Tourette syndrome, Narcolepsy, absence seizures, 
PSP, Occipital Neuralgia, Radial Nerve Injury (wrist drop), Etc.

  
</p>

</div>

<br></br>

<div className='rotatecost'>

<h5>
HOW MUCH WILL THIS ROTATION COST?
</h5>

</div>

<div>

<div className='faqanswers'>

  <p>
  We offer three types of neurology packages, depending on your needs: assistance with accommodation, 
  transportation, interview sessions, personal statements, ERAS photos, etc.
  </p>

  

  <p>
  The price for the package starts at $2,299.

  </p>

  </div>

  <br></br>

  <h5>
  DO YOU PROVIDE ASSISTANCE IN ACCOMMODATION? 
  </h5>

  <div className='faqanswers'>

  <p>
  We have three neurology packages- one is inclusive of the accommodation. You are free to decide where you 
  would like to stay. However, we strongly recommend that you stay close to the clinic in Park Ridge.
  </p>

  </div>

  <br></br>

  <h5>
  DO YOU PROVIDE TRANSPORTATION? 
  </h5>

  <div className='faqanswers'>

  <p>
  Chicago also has an established transportation system with trains and buses conveniently available. We offer 
  transportation privileges as well, inclusive of some of our packages.
  </p>

  

  <p>
  Some of our medical professionals can drive and go to four locations alone; however, finding parking in Chicago 
  can be stressful and expensive.
  </p>

  </div>

  <br></br>

  <h5>
  WILL THERE BE ROOM EXCLUSIVE FOR THE MEDICAL PROFESSIONALS? 
  </h5>

  <div className='faqanswers'>

  <p>
  The clinic in Park Ridge has a dedicated area for medical professionals to stay and leave their belongings. We 
  also have a room with snacks, water, drinks, and coffee, all free for everyone in practice.
  </p>

  </div>

  <h5>
  I DON'T HAVE A U.S. VISA. DO YOU PROVIDE US VISA SPONSORSHIP? 
  </h5>

  <div className='faqanswers'>

  <p>
  We unfortunately do not sponsor any form of US VISA. We can provide a letter of confirmation (VISA LETTER) 
  with your neurology rotation with Dr. Calimag as soon as we receive your essential requirements, verify the 
  availability of the slot for the rotation and process the non-refundable reservation fee of $500 for the neurology 
  package.
  </p>

  <p>
  You can present this letter to the US consulate on your application; however, we cannot guarantee your US 
  VISA application approval.
  </p>

  </div>

  <h5>
  DO YOU GIVE GROUP DISCOUNTS OR ANY DISCOUNTS? 
  </h5>

  <div className='faqanswers'>

    <p>
    Every applicant is carefully assessed based on our metrics for admission. Our spots are minimal and very limited, 
    and we cannot guarantee the same rotation schedule for group applicants.
    </p>

    <p>
    We also offer a structured, quality, result-driven rotation where we treat every medical professional as a part 
    of our family. We value your presence and do not discount your worth, thus our prices are reasonable. 
    </p>



  </div>

  



</div>

<br></br>




</div>

            </CCollapse>

          


          <hr className='hrblock'></hr>




          <div>


            <div className='steps'>

              
            <a id='steps_list'><button type='button' className='collapsible' onClick={() => {
              setVisibleSix(!visiblesix)
              }}>
            <h3 className='appsteps'>
            STEPS IN THE APPLICATION
            </h3>
            </button>
            </a>
            <CCollapse visible={visiblesix}>

            <div className='stepscont'>
<h4>
FIRST STEP:
</h4>


<div>
  <br></br>

  <p> 
  Read the entirety of the neurology rotation description to help answer any questions you may have.
  </p>

  <p>
  Follow our <a className='instalink' href='https://www.instagram.com/uscematch/?hl=en'>Instagram</a> page USCEMatch to stay updated.
  </p>

  <p>
  Send an e-mail of interest to <a href='mailto:andrewgulde@uscematch.com'>andrewgulde@uscematch.com</a>, including the following:
  </p>

  <br></br>

  <div className='essentials'>

  <h6>
  ESSENTIAL REQUIREMENTS: THE FIRST FIVE ARE 
  </h6>
  <h6 className='mandatory'>
  MANDATORY 
  </h6>

  </div>

</div>

<div className='fivesteps'>

<ul className='steplist'>

<li>
  <div className='stepall'>
    <div className='step1title'>
  <h6>
  STEP 1 SCORE REPORT -
  </h6>
  </div>
  <div className='step1cont'>
  <p>
  Step 1 score report should be at least 220 numeric score.
  </p>
  <div className='firsttake'>
  <p>
  If taken by January 2022, should pass on the first take only.
  </p>
  </div>
  </div>
  </div>
</li>

<div className='stepall secondstep'>

<li>
<h6>
STEP 2 CK SCORE REPORT - at least 220 numeric score.
  </h6>
</li>

</div>

<div className='stepall'>

<li>
  <h6>
  PASSPORT COPY/GOVERNMENT-ISSUED PHOTO ID 
  </h6>
</li>

</div>

<div className='stepall'>

<li>
  <h6>
  CURRICULUM VITAE 
  </h6>
</li>

</div>

<div className='stepall'>

<li>
  <h6>
  SEND 2-3 PHOTOS OF YOU HAVING FUN with friends, colleagues, or family. 
  </h6>
</li>

</div>

<div className='stepall'>

<li>
  <h6>
  MEDICAL DIPLOMA  <h7 className='optional'>(optional, only if available)</h7>
  </h6>
</li>

</div>


</ul>

</div>

</div>

<div className='stepcontent'>

<div className='secondsteptitle'>

<h4>
  SECOND STEP:
</h4>

</div>

<div className='secondalign'>

<p>
Within 48-72 business hours, we will send you the application form, the inclusions, descriptions, and 
prices for the neurology packages.
</p>

</div>

<br></br>


</div>


<div className='stepcontent'>

<div className='thirdsteptitle'>

<h4>
  THIRD STEP:
</h4>
</div>


<div className='stepalign thirdcont'>

<p>
We will agree on a time and date (we are central time) to call you through Instagram call or WhatsApp 
to assist you in confirming the start date of your rotation, verify availability, and confirm which 
package you wish to proceed with and instructions for the non-refundable reservation fee of $500.
</p>

</div>


</div>


<div className='stepcontent'>


<h4>
  FOURTH STEP:
</h4>

<div className='stepalign'>

<p>
You will receive an e-mail confirmation that the $500 has successfully been processed.
</p>


<p>
30 days before the start of your rotation, you are expected to submit the following:
</p>

<div className='secreq'>

<h6 className='secndary'>
SECONDARY REQUIREMENTS: 
</h6>

</div>

<div className='fourthlist'>


<ul className='requiredlist'>

  <li>
  Immunization/vaccination records, including covid vaccines 
  </li>

  <li>
  Medical Health Insurance (MANDATORY)- <h7 className='mhi'>You must be physically fit for the rotation. 
  The USCE MATCH is not liable for any health emergency.</h7>
  </li>

  <li>
  US MOBILE PHONE NUMBER 
  </li>

  <li>
  US ADDRESS WHERE YOU WILL STAY DURING THE DURATION OF YOUR ROTATION.
  </li>

</ul>

</div>

</div>


</div>



<div className='stepcontent'>

  <div className='fifthstep'>

<h4>
  FIFTH STEP:
</h4>

</div>



<div className='fifthalign'>

<p>
Come in with your beautiful/handsome smile because you will soon match to a US Medical Residency Program.
</p>

<p>
Please bring your valid photo ID. You will have the clinic onboarding and initial interview with Dr. Calimag.
</p>

<p>
Kindly bring the payment method to settle the remaining balance in full.
</p>

</div>


</div>

            </CCollapse>

            </div>

          </div>



        <div className='gridspots'>

            <div><h5></h5></div>
            <div ><h5> AVAILABILITY</h5></div>
            <div ><h5> START DATE</h5></div>
            <div ><h5> LAST DATE</h5></div>



            <div ><p>OPTION 1</p></div>
            <div ><p>FULL</p></div>
            <div ><p>September 26, 2022</p></div>
            <div ><p>October 21, 2022</p></div>

              

            <div><p>OPTION 2</p></div>
            <div ><p>FULL</p></div>
            <div ><p>October 3, 2022</p></div>
            <div ><p>October 29, 2022</p></div>

              

            <div ><p>OPTION 3 BROKEN SCHEDULE</p></div>
            <div ><p>4 SPOTS</p></div>
            <div ><p>October 17, 2022</p></div>
            <div ><p>October 31, 2022</p></div>


            <div ><p></p></div>
            <div ><p></p></div>
            <div ><p>November 14,2022</p></div>
            <div ><p>November 26, 2022</p></div>



            <div ><p>OPTION 4 BROKEN SCHEDULE </p></div>
            <div ><p>3 SPOTS</p></div>
            <div ><p>October 24, 2022</p></div>
            <div ><p>October 31, 2022</p></div>


            <div ><p></p></div>
            <div ><p></p></div>
            <div ><p>November 14,2022</p></div>
            <div ><p>December 3, 2022</p></div>

            

            <div ><p>OPTION 5</p></div>
            <div ><p>3 SPOTS</p></div>
            <div ><p>November 14, 2022</p></div>
            <div ><p>December 6, 2022</p></div>

              

            <div><p>OPTION 6</p></div>
            <div ><p>4 SPOTS</p></div>
            <div ><p>January 2, 2023</p></div>
            <div ><p>January 28, 2023</p></div>


            <p>OPTION 7</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>January 9, 2023</p></div>
            <div ><p>February 4, 2023</p></div>


            <p>OPTION 8</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>January 16, 2023</p></div>
            <div ><p>February 11, 2023</p></div>

            
            <p>OPTION 9</p> 
            <div ><p>3 SPOTS</p></div>
            <div ><p>January 30, 2023</p></div>
            <div ><p>February 25, 2023</p></div>


            <p>OPTION 10</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>February 6, 2023</p></div>
            <div ><p>March 4, 2023</p></div>


            <p>OPTION 11</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>February 20, 2023</p></div>
            <div ><p>March 18, 2023</p></div>


            <p>OPTION 12</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>February 27, 2023</p></div>
            <div ><p>March 25, 2023</p></div>


            <p>OPTION 13</p> 
            <div ><p>4 SPOTS</p></div>
            <div ><p>April 3, 2023</p></div>
            <div ><p>April 29, 2023</p></div>


            <p>OPTION 14</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>April 10, 2023</p></div>
            <div ><p>May 6, 2023</p></div>


            <p>OPTION 15</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>April 24, 2023</p></div>
            <div ><p>May 20, 2023</p></div>


            <p>OPTION 16</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>May 1, 2023</p></div>
            <div ><p>May 27, 2023</p></div>


            <p>OPTION 17</p> 
            <div ><p>2 SPOTS</p></div>
            <div ><p>May 15, 2023</p></div>
            <div ><p>June 10, 2023</p></div>


            <p>OPTION 18</p> 
            <div ><p>3 SPOTS</p></div>
            <div ><p>May 29, 2023</p></div>
            <div ><p>June 24, 2023</p></div>




        </div>


            
 
        </div>


        <hr className='hrblock'></hr>

        </div>

       </Container>

       <br></br>


       <a className='backtotop' href='#header'>Back to the top</a>



       

      <br></br>
      <br></br>

      
  

      <Footer></Footer>

      </div>
    );
  }