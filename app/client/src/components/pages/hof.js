import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

import DrShikhar from '../pages/reviewimgs/drshikhar.png';
import DrJashank from '../pages/reviewimgs/drjash.jpg';
import DrKatryna from '../pages/reviewimgs/drkatryna.png';
import DrChef from '../pages/reviewimgs/drchef.jpg';
import DrJuan from '../pages/reviewimgs/drjuan.png';
import DrParo from '../pages/reviewimgs/drparo.png';
import DrPradeep from '../pages/reviewimgs/drprad.jpg';
import DrFatima from '../pages/reviewimgs/drfatima.jpg';
import DrKim from '../pages/reviewimgs/drkim.png';
import DrCesar from '../pages/reviewimgs/dranthony.jpg';
import DrMonica from '../pages/reviewimgs/drmonica.png';
import DrRonald from '../pages/reviewimgs/drronald.jpg';
import DrPari from '../pages/reviewimgs/drpari.jpg';
import DrHarpreet from '../pages/reviewimgs/drharpreet.jpg';
import DrClint from '../pages/reviewimgs/drclint.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Hof() {
    return (
      <div>
        <a name='header'></a>
        <Header></Header>
        <br></br>
        <Container>

          <div className='hoftitle'>
          <h1>Hall Of Fame</h1>
          </div>

          <Row className='fame doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Shikhar Khurana From M. S. Ramaiah Medical College</h4>
            
          
            </div>

            <br></br>
            

        <div>
        <img className='drshik' src={DrShikhar}></img>
       </div>
            </Col>

            <Col className='drshikrev'>

            <br></br>
            <br></br>
         <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
         <br></br>
          <br></br>
          <div className='studrev'>
            <p>
          I am so thrilled to inform you that I matched at Albert Einstein Healthcare Network, Neurology in Philadelphia!
        </p>
        <p>
          My rotation in Chicago was one of my first hands-on Neurology clinical experiences, and I am so proud to 
          have been a student of yours, Dr. Calimag!
        </p>
        <p>
          You treated your students like colleagues and gave us so much confidence in being able to interact with patients.
          I believe this rotation shaped me not just to be a fantastic physician but also a better human being. I will forever
          miss your jokes...
        </p>
        
        <p>
        And if there is anyone who deserves the credit for so many of us matching into our specialties, 
        it is you, ANDREW! You are a gem of a person, going out of your way to help so many international 
        students out there. The letters you wrote for us and the advice you offered for the applications 
        and interviews were indispensable and crucial to our matching! 
  
        </p>
        <p>
        Thank you so much for everything you do, and I hope to see you all soon! Congratulations to everyone at the Neurology 
        and Neurodiagnostics clinic for a fantastic result in this year's match cycle!
        </p>
        </div>

            </Col>

          </Row>

          </Container>



         {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}


          <Container>

          <hr className='hr'></hr>

          <br></br>

          <Row className='drjashrev doctorreview'>

            
            <Col>

            <div className='doctitle'>
              <h4>Dr. Jashank Parwani From Lokmanya Tilak Municipal Medical College, Mumbai, India</h4>
            <br></br>
            </div>

        <div>
        <img className='drjash' src={DrJashank}></img>
       </div>
            </Col>

            <Col>

            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            I had a great time. I was here for a Neurology experience and a good LOR, and I feel like I got a lot 
            more out of this rotation. Dr. Calimag was a fantastic person to learn from and hang out with. 
        </p>
        <p>
        This rotation is half inpatient and half outpatient. Outpatient includes dedicated two half days of EMG and NCV.
        The experience is VERY hands-on.
        </p>
        <p>
        I would suggest living near the office in Park Ridge. The housing they recommend is really cheap and great. 
        The landlady was excellent; she even picked me up from the airport and drove me for groceries. 
        The office has a dedicated room for students to sit and a pantry with snacks and coffee 
        (which is also free for students). We also got several lunches from pharmaceutical reps. 
        All this goes to say that you will be well taken care of!
        </p>
        
        <p>
        I was very emotional on the last day. I thoroughly enjoyed the hospital days and EMGs. 
        I loved the company, the long drives, the office music, and the several meals we had together as a team. 
        More than anything, I feel like I have made friends for a lifetime. It was honestly a lot more than just a rotation for me. 
  
        </p>
        <p>
        The amount of personal time I spent with Dr. Calimag. Unlike most rotations, I spent almost the whole day with him, 
        which was great. We traveled and even ate together. I learned a lot more and gave him a chance to know me as a personal 
        friend, not just a student, while we see patients. 
        </p>
        <p>
        Additionally, I received an excellent LOR. I know this for a fact because it was praised in multiple interviews, 
        and the program directors/interviewers seemed to be very impressed with me. 

        </p>
        <br></br>
        </div>

            </Col>

          </Row>

          <br></br>

        <hr className='hr'></hr>
        

        </Container>

          {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

        <Container>
          <Row className='fame doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Katryna Torres From the University of the East Ramon Magsaysay Memorial Medical Center, College of Medicine</h4>
            </div>
            
            <br></br>

        <div>
        <img className='drkat' src={DrKatryna}></img>
       </div>
            </Col>

            <Col>

            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            Saying that my neurology rotation under Dr. Calimag was incredible is an understatement!
        </p>
        <p>
        As a medical student, I was deeply terrified of the specialty. It was one of the most challenging fields for 
        me and entailed a very detailed examination. However, Dr. Calimag has changed my perspective from fear to awe. 
        He made it look easy and, quite honestly, fun. He was a willing and approachable educator. He always kept us motivated to learn. 
        </p>
        <p>
        With hands-on experience not only with patients but with procedures like EEG tracing readings 
        and EMG studies, I significantly broadened my clinical knowledge in the field. With his guidance, 
        I refined my skills and consistently challenged myself in an environment different from my home country. 
        This has helped me develop greater confidence in myself as a clinician in dealing with common neurologic 
        conditions. Even though I know, I will be practicing in a different field, and I am optimistic that my 
        learnings during my time with Dr. Calimag will benefit my clinical practice.
        </p>
        
        <p>
        Not only was Dr. Calimag an excellent resource for medical knowledge, but he was also a perfect role
        model in his bedside manners. He had a way with his patients—genuine, refreshing, and humorous. 
        Watching him work with his patients, colleagues, and staff helped me build the “future doctor” I aspire to be. 
        His experience as a Filipino doctor in the US inspires all IMGs that with hard work and diligence, 
        though filled with significant challenges, becoming a practicing physician in the US is not impossible. 
  
        </p>
        <p>
        I would like to give a massive shout-out to Andrew for being a tremendous blessing during what I 
        can say is probably the most stressful part of my journey. When it was time for me to go through 
        the Match Application process, they stood by my side, always willing to help and give guidance. 
        Looking back, the whole endeavor definitely was a valuable stepping stone in my journey.
        </p>

        <p>
        No words could ever express my gratitude for Dr. Calimag, Andrew, and the whole experience. 
        </p>
        I highly recommend this rotation to anybody working hard towards the dream of getting “Matched” in the future. 

        <p>

        </p>

        </div>

            </Col>

          </Row>
          <hr className='hr'></hr>

          </Container>

          {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

          <Container>


          <br></br>

          <Row className='drrev doctorreview'>
            <Col>

            <div className='doctitle'>
              <br></br>
              <h4>Dr. Chef Stan Macaraeg From FEU-NRMF Institute of Medicine - Philippines</h4>
          
            </div>

            <br></br>

        <div>
        <img className='drchef' src={DrChef}></img>
       </div>
            </Col>

            <Col className='drchefrev'>

            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            The thing that I appreciated the most during my short stay was how genuine and warm the people were in 
            that humble clinic along Dempster Street. This was aside from having a hands-on rotation that genuinely 
            wanted us to learn! I really felt at home. 
        </p>
        <p>
        The after-clinic sessions with Andrew. These sessions were great productive rest after a difficult clinic day. 
        I really appreciated how Andrew tried to help us with the intangibles that are as much as important as the grades 
        we get in exams, in my honest opinion. 
        </p>
        <p>
        The rotation was a great experience and went over, and beyond my expectations; I truly felt that they wanted 
        nothing but the best for us, both in professional development and personal growth. 
        </p>
        
        <p>
        They showed it through so many things, from Dr. Calimag pretending to be a patient so that we can 
        perform procedures on him (despite it being a “shocking experience”) to Andrew going beyond his 
        duties to help prepare us not only for the match (by urging us to know ourselves deeper) but also 
        teaching the “other” side of practice which is every bit as important as having impeccable clinical acumen. 
  
        </p>
        <p>
        It is a must-have for everyone who wants a true hands-on experience with a lot of fun, great (free?) food, and love in between! 
        </p>
        <br></br>

        </div>

            </Col>

          </Row>

          <br></br>

        <hr className='hr'></hr>
        

        </Container>

        {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

          
<Container>
          <Row className='fame doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Juan Fernando Ortiz is from Universidad San Francisco de Quito</h4>
          
            </div>

            <br></br>

        <div>
        <img className='drjuan' src={DrJuan}></img>
       </div>
            </Col>

            <Col className='reviewtitle'>


            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            What I liked the most about the rotation was the commitment of Dr. Calimag to making the students comfortable. 
        </p>
        <p>
        I have had 12 rotations and have never encountered such a friendly doctor. The staff was also very nice, 
        including you, Andrew, you are the first one I am friends with on Instagram, and that is because of how nice you are.  
        </p>
        <p>

        Outpatient: The rotation has a good patient flow for outpatient learning. 

        </p>
        
        <p>
        Hands-On: Limiting the rotation to 5 students allows for good learning for the students to conduct physical exams and interview.

        </p>

        </div>

            </Col>

          </Row>
          <hr className='hr'></hr>

          </Container>

          {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

            <br></br>

<Container>
          <Row className='drpradrev doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Pradeep Chevula is from Soochow University Medical College </h4>
          
            </div>

            <br></br>

        <div>
        <img className='drprad' src={DrPradeep}></img>
       </div>
            </Col>

            <Col>

            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            I'm Dr. Pradeep Chevula. I'm very fortunate to do my Neurology clinical rotation with Dr. Calimag. He is a fantastic person and a great teacher! 
        </p>
        <p>
        During the four weeks of my rotation, I got a chance to see the most common cases in Neurology, such as seizures, 
        migraine, brain concussion, Parkinson's, Cervical and lumbosacral radiculopathies, TIA, Dementia, Insomnia, Cluster 
        headache, Post herpetic neuralgia, Tenosynovitis, TBI, diabetic neuropathy, carpal tunnel syndrome, cubital tunnel 
        syndrome, Multiple sclerosis, Meralgia Parasthetica, Peripheral neuropathies and also some interesting cases like 
        Marchiafava big-name syndrome, Post COVID Neurological manifestations, Diffuse idiopathic skeletal hyperostosis, 
        Post Lyme disease syndrome, Pseudotumor cerebral, cervical spinal stenosis, Meningioma, Tourette syndrome, 
        Narcolepsy, absence seizures, PSP, occipital neuralgia, radial nerve injury (wrist drop).  
        </p>
        <p>

        Dr. Calimag also taught us EMG and the basics of EEG. Most importantly, Dr.Calimag is fun-loving and easygoing. 
        He has an excellent staff who makes everything organized and easy right from the start of the rotation till the end.  

        </p>
        
        <p>
        I want to thank Dr. Calimag for giving me this opportunity; I've learned so much from your experience, advice, and guidance. 
        My time as an observer under you has been a valuable part of my career journey. 

        </p>

        <p>
        I'll definitely carry the things I've learned here with me, and I'll always look back on this experience with a lot of fondness.

        </p>

        </div>

            </Col>

          </Row>
          <br></br>
          <hr className='hr'></hr>

          </Container>

          


<Container>


<Row className='drparorev doctorreview'>
  <Col>

  <div className='doctitle'>
    <h4>Dr. Paro Bhaya is from Tbilisi State Medical University, Georgia </h4>

  </div>

  <br></br>

<div>
<img className='drparo' src={DrParo}></img>
</div>
  </Col>

  <br></br>

  <Col>

<h2 className='review'>Review</h2><h2 className='inline'>:</h2>
<br></br>
<br></br>
<div className='studrev'>
  <p>
  I enjoyed the hands-on experience I received during this rotation, an opportunity not provided by most 
  rotations. Within a week of beginning the rotation, I was already performing EMGs on patients under 
  Dr. Calimag's supervision. I had the opportunity to work in the inpatient and outpatient setting, 
  during which I encountered patients with various neurological complaints, including rare disorders 
  such as Tolosa-Hunt syndrome and Trigeminal Autonomic Encephalalgias. Being exposed to such a rare 
  patient population allowed me to work on a case report. Towards the end of the four-week rotation, 
  I successfully performed several comprehensive neurological physical examinations and created an 
  accurate differential diagnosis and treatment plan. 
</p>
<p>
The rotation also allowed students to participate in pharmaceutical representative meetings, 
aiding in expanding knowledge of patients' current and future treatment options. 
</p>
<p>
The rotation was a great experience and went over, and beyond my expectations; I truly felt that they wanted 
nothing but the best for us, both in professional development and personal growth. 
</p>

<p>
I have had a passion for Neurology since my 4th year of medical school, and this rotation encouraged me further
to pursue a residency in Neurology. Dr. Calimag and his staff at the clinic provided a warm and welcoming environment. 
I was treated as part of the team and was involved in all activities at the clinic, and the other hospitals 
visited with Dr. Calimag. He encouraged us to provide our opinions on patient diagnosis and treatment plans 
and use every patient encounter as an opportunity to teach us to improve our quality of care.  

</p>
<p>
Towards the end of the rotation, I was comfortable saying that I would be able to perform a detailed neurological 
examination and perform special tests if needed. I broadened my knowledge of neurological diseases and learned new 
treatment strategies.
</p>
<br></br>

</div>

  </Col>

</Row>

<br></br>

<hr className='hr'></hr>


</Container>
            

 {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}


<Container>


<br></br>

<Row className='drrev drfatimarev doctorreview'>
  <Col>

  <div className='doctitle'>
    <h4>Dr. Fatima Anwer From King Edward Medical University, Lahore Pakistan</h4>

  </div>

  <br></br>

<div>
<img className='drfatima' src={DrFatima}></img>
</div>
  </Col>

  <br></br>

  <Col>

  <br></br>
<h2 className='review'>Review</h2><h2 className='inline'>:</h2>
<br></br>
<br></br>
<div className='studrev'>
  <p>
  I loved the hands-on interaction with the patients, and I was allowed to examine them and discuss 
  their disease and treatment plan with them. I also enjoyed doing EMG/ NCS with the doctor. 
</p>
<p>
Dr Calimag is super friendly, always valued our opinions, and enlightened us with his valuable experience. 
I learned a lot from how he explained complicated things in a simplified manner to the patients without using 
medical jargon. Adding that to my clinical skills made a huge impact. I felt the patients were more confident 
about the diagnosis. 
</p>
<p>
I had a wonderful experience during this rotation. The doctor is very receptive to students' opinions and answers 
all our questions. We were given a chance to present the case. I wanted to write a case report with colleagues and 
a doctor, and he provided us with all the information needed. 
</p>

<p>
I have never seen patients with migraine being so satisfied with their treatment. I aspire to be like Dr. Calimag.
</p>
<br></br>


</div>

  </Col>

</Row>

<br></br>

<hr className='hr'></hr>


</Container>

 {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

<Container>
          <Row className='fame drkimrev doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Kim Abbegail Aldecoa From Far Eastern University- Nicanor Reyes Medical Foundation</h4>
          
            </div>

            <br></br>

        <div>
        <img className='drkim' src={DrKim}></img>
       </div>
            </Col>

            <br></br>

            <Col className='reviewtitle'>

          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            The thing I love the most during the rotation is the opportunity to experience the US 
            healthcare system both in the hospital and clinic setting. Dr. Calimag, Andrew, Bria, 
            and Dinorah are very approachable, so we had no problems adjusting to the new environment. 
        </p>
        <p>
        It definitely exceeds my expectation. I'll give it an 11/10.  
        </p>


        </div>

            </Col>

          </Row>
          <hr className='hr'></hr>

          </Container>

           {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

<Container>


<br></br>

<Row className='drrev drcesarrev doctorreview'>
  <Col>

  <div className='doctitle'>

    <h4>Dr. Cesar Anthony Calvo From the University of the East Ramon Magsaysay Memorial Medical Center, College of Medicine.</h4>


  </div>

  <br></br>

<div>
<img className='drcesar' src={DrCesar}></img>
</div>
  </Col>

<br></br>

  <Col className='reviewtitle'>

<h2 className='review'>Review</h2><h2 className='inline'>:</h2>
<br></br>
<br></br>
<div className='studrev'>
  <p>
  I appreciate how flexible Dr. Calimag was with our schedule. I improved my neurological physical exam 
  significantly during my time there. Dr. Calimag’s humor with the patients often lightened up the 
  mood and did not go unnoticed. Also, being able to assist and conduct nerve conduction studies as 
  well as EMGs was most enjoyable. 
</p>
<p>
There was a lot of learning opportunity with every patient encounter. I was able to observe 
interactions with patients at St. Anthony’s as well as the Park Ridge clinic, where we assisted 
in conducting and interpreting many nerve conduction studies and electromyography. 
</p>
<p>
Dr. Calimag was always willing to answer questions, whether simple or complex, 
and greatly improved my neurological physical examination through sheer exposure 
and practice whenever it was available.
</p>
<br></br>


</div>

  </Col>

</Row>

<br></br>

<hr className='hr'></hr>


</Container>

  {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}


<Container>
          <Row className='drmonicarev doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Monica Kaitlyn Musni From the University of the East Ramon Magsaysay Memorial Medical Center, College of Medicine.</h4>
          
            </div>

            <br></br>

        <div>
        <img className='drmonica' src={DrMonica}></img>
       </div>
            </Col>

            <Col className='reviewtitle'>

            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            Dr. Calimag did a great job in capturing my interest in neurology through his work. 
            I appreciated the way he guided case discussions and answered any questions I had. 
            His funny and laid-back personality was unlike any physician I had rotated under before, 
            which made it easier for me to be more involved in discussions and patient interactions. 
            I was intrigued by the tests he conducted, and, to my surprise, after observing, 
            he allowed me to conduct a nerve stimulation test, which I had never seen or done in person. 
        </p>
        <p>
        All in all, I believe my time under Dr. Calimag was beneficial, to say the least. He allowed 
        me to assist in many procedures whenever the opportunity arose. He never exhibited an 
        intimidating tone and created a relaxed environment where it was easy to ask questions without fear of belittlement.   
        </p>


        </div>

            </Col>

          </Row>
          <hr className='hr'></hr>

          </Container>

          {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

<Container>


<br></br>

<Row className='drrev drronrev doctorreview'>
  <Col>

  <div className='doctitle'>
    <h4>Dr. Ronald Roque From Angeles University Foundation - School of Medicine</h4>

  </div>

  <br></br>

<div>
<img className='drronald' src={DrRonald}></img>
</div>
  </Col>

  <Col className='reviewtitle'>


  <br></br>
<h2 className='review'>Review</h2><h2 className='inline'>:</h2>
<br></br>
<br></br>
<div className='studrev'>
  <p>
  I highly recommend this rotation even for students only interested in Family Medicine or Internal Medicine.
</p>
<p>
Dr. Calimag and his team developed an excellent neurology rotation! I learned basic skills, such as becoming 
more confident in performing the neurological examination. I also had the chance to accompany him during his 
hospital rounds and assist him with his various procedures. I saw many interesting cases that I have only read about.  
</p>
<p>
Overall a great way to be exposed to a specialty that a PCP (FM/IM) should be able to treat primary cases 
and knows when to refer to a specialist. 
</p>
<br></br>


</div>

  </Col>

</Row>

<br></br>

<hr className='hr'></hr>


</Container>

 {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}

<Container>
          <Row className='fame doctorreview drbavrev'>
            <Col>

            <div className='doctitle'>
              <h4>Dr. Bavithra Pari From Government Mohan Kumaramangalam Medical College</h4>
          
            </div>

            <br></br>

        <div>
        <img className='drpari' src={DrPari}></img>
       </div>
            </Col>

            <br></br>

            <Col className='reviewtitle'>

            <br></br>
          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            I loved the hands-on experience I got, inlcluding neurological examination, nerve conduction studies,
            and access to the EMR. 
        </p>
        <p>
        We also had good clinical exposure to both inpatient and outpatient neurology settings. 
        It was an excellent opportunity to learn from the most experienced and generous neurologist Dr. Calimag. 
        </p>

        <p>
        This was an excellent opportunity for aspiring neurologists like me, and I would totally recommend it 
        to my friends who are interested in neurology. 
        </p>


        </div>

            </Col>

          </Row>
          <hr className='hr'></hr>

          </Container>

          {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}


<Container>


<br></br>

<Row className='drrev drharprev doctorreview'>
  <Col>

  <div className='doctitle'>
    <h4>Dr. Harpreet Virk From the Caribbean Medical University School of Medicine </h4>

  </div>

  <br></br>

<div>
<img className='drharpreet' src={DrHarpreet}></img>
</div>
  </Col>

  <br></br>

  <Col className='reviewtitle'>

  <br></br>
<h2 className='review'>Review</h2><h2 className='inline'>:</h2>
<br></br>
<br></br>
<div className='studrev'>

  <p>
  Dr. Calimag made this rotation very interactive and compelling.
</p>

<p>
I liked that we were able to perform complete Neuro exams on each patient, and each student 
had an opportunity to do so. Dr. Calimag is very well-liked by his patients, so it was 
always a great experience to be a part of that.
</p>

<p>
If you are interested in Neurology, as I was, you will thrive under Dr. Calimag's guidance. 
</p>
<br></br>


</div>

  </Col>

</Row>

<br></br>


<hr className='hr'></hr>
</Container>





   {/*
          *********** 
          *********** 
          NEXT REVIEW
          *********** 
          *********** 
            */}



<Container>
          <Row className='fame drkimrev doctorreview'>
            <Col>

            <div className='doctitle'>
              <h4>Dr Clint Christian Garbanzos is from St. Luke's College of Medicine-William H. Quasha Memoria</h4>
          
            </div>

            <br></br>

        <div>
        <img className='drclint' src={DrClint}></img>
       </div>
            </Col>

            <br></br>

            <Col className='reviewtitle'>

          <h2 className='review'>Review</h2><h2 className='inline'>:</h2>
          <br></br>
          <br></br>
          <div className='studrev'>
            <p>
            My structured one-on-one interview prep with Andrew boosted my confidence and helped me present myself
            even better for the interview season.
        </p>
        <p>
        The interview phase was a crucial part of my application process; having no USCE, it was ultimately necessary 
        for me to give 101% best effort for every interview. Andrew taught me how to connect spontaneously better and 
        be more conversational with the interviewer. He showed me how to develop professional comportment   
        that compliments my best attributes, and he shared his best practices to help me stand out, which was very effective. 
        His sales experience enabled him to show me how to sell myself during the interview humbly.
        </p>

        <p>
        We discussed in detail the core questions, different types of questions, and how best to curate an   
        adequate response. I appreciated the honest and unbiased feedback and how Andrew went above and 
        beyond in helping me review my application, the CV, to prepare for any questions that might be asked.
        </p>

        <p>
          I can wholly describe myself as very satisfied and highly recommend Andrew and his team!
        </p>


        </div>

            </Col>

          </Row>

          </Container>


          <a className='backtotop' href='#header'>Back to the top</a>





        <br></br>
        <br></br>

        <Footer></Footer>

      </div>
    );
  }