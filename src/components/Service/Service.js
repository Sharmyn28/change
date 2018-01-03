import React from "react";
import Menu from "../Menu/Menu";
import { Grid, Row, Col} from "react-bootstrap";
import { FirstCard, SecondCard, ThirdCard } from "./Cards";
import { connect } from "redux-zero/react";

const ServiceContent = ({ showModal1, showModal2, showModal3 }) => {
    return (
        <Col md={11} lg={11} sm={10} xs={12} className='service'>
            <div className="container--service">
                <h3> Todos nuestros servicios necesitan de una participación activa de nuestros clientes. </h3>
                <FirstCard showModal1={showModal1} />
                <SecondCard showModal2={showModal2} />
                <ThirdCard showModal3={showModal3} />                
            </div>
        </Col>
    )
}

const Service = ({ showModal1, showModal2, showModal3 }) => {
    return (
        <Grid fluid id='serviceView--content'>
            <Row>
                <Menu />
                <ServiceContent showModal1={showModal1} showModal2={showModal2} showModal3={showModal3} />
            </Row>
        </Grid>
    )
}

//export default Service;
const mapToProps = ({ showModal1, showModal2, showModal3 }) => ({ showModal1, showModal2, showModal3 });
export default connect (mapToProps)(Service);