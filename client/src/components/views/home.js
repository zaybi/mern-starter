import React , { Component } from 'react';
import Slider from '../tinycomponents/slider'
import Cardz from '../tinycomponents/card'


import { Col , Row } from 'reactstrap'

class MainHome extends Component {

    constructor(){
        super();

        this.state = {

        }
    }




    render() {

        return(
            <React.Fragment>
            <Slider />

            
            <Row>
                
           
            <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />


                
            </Col>
            <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />

                
            </Col>
        <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />
                
            </Col>
            </Row>
            </React.Fragment>
        )


    }

}


export default MainHome;