import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import usce from '../../images/Logo.png'


export default function Footer() {
    return (
        <div className='footer'>

            <Row className='footerrow'>

                <Col>

                <div>
            <img className='uscefooter' src={usce}></img>

            </div>
                
                </Col>


            <Col>


            <div className='footerabout col-md-10'>
            
                <h5>ABOUT US</h5>
       
            <p>
                USCE Match is a community of like-minded professionals who aim to jumpstart the US medical career of medical students
                and international medical graduates by connecting  them to residents, fellows, and residency programs. We offer 
                structured US Clinical Experience (USCE) and consulting services, to assist deserving applicants to match to a US 
                residency program.
            </p>
            </div>

            </Col>


          


            <Col className='contactcol'>

        
            <div className='contacttitle col-md-11'>

            <h5>
                CONTACT US
            </h5>
            

            </div>

            <br></br>

            <div className='footercontact col-md-11'>
            <div className='footeremail'>
            <h5>EMAIL:</h5><p><a href='mailto:info@uscematch.com'>info@uscematch.com</a></p>
            </div>
            <p>
            USCEMatch on <a className='instalink' href='https://www.instagram.com/uscematch/?hl=en'>Instagram</a>
            </p>
            <div className='footerphone'>
                <h5>PHONE:</h5>
            </div>
            <div className='footerphone'><p>+1 (224) 888-5000</p></div>
            </div>

   

            <div className='col-md-11'>

            <div className='footerfax'>
                <h5>FAX:</h5><p>847 299 1962</p>
            </div>
                <h5>OFFICE:</h5>
                <div className='footeroffice'>
                <p>1600 Dempster Street, Suite Lower Level 3,</p><p>Park Ridge Illinois, 60068</p>
                </div>

            </div>

            </Col>

            </Row>
            

        </div>
    )
}