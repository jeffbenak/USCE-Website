import React from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import Student from '../../images/doctor2.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Hof() {
    return (
      <div>
        <Header></Header>
        <Container>
          <Row className='fame'>
            <Col>

        <div>
        <img className='studimg' src={Student}></img>
       </div>
            </Col>

            <Col>

            <div className='doctitle'>
              <h4>Dr Jashank Parwani</h4>
            <br></br>
            <h5 className='matched'>MATCHED to Neurology in Temple University from Lokmanya Tilak Municipal Medical College, Mumbai, India</h5>
            </div>
            <br></br>
          <h2 className='review'>Review</h2>
          <p className='studrev'>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>

            </Col>

          </Row>

        

        </Container>

        <br></br>

        <Footer></Footer>

      </div>
    );
  }