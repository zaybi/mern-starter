import React  from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return(
        <div id="mainfooter" className="p-2">
        <Container >
            <Row>
                <Col md="4">
                    <h5>Shopping Website</h5>
                     <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                     </ul>
                </Col>
                <Col md="4">
                    <h5>Our Products</h5>
                    <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                     </ul>
                </Col>
                <Col md="4">
                <h5>Contact info</h5>
                    <ul>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                     </ul>
                    
                </Col>
            </Row>
        </Container>
        </div>
    )
}


export default Footer;