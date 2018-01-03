import React from "react";
import Menu from "../Menu/Menu";
import { Grid, Row, Col} from "react-bootstrap";
import { FirstCard, SecondCard, ThirdCard } from "./Cards";

const ServiceContent = () => {
    return (
        <Col md={11} lg={11} sm={10} xs={12} className='service'>
            <div className="container--service">
                <h2> Todos nuestros servicios necesitan de una participación activa de nuestros clientes. </h2>
                <FirstCard />
                <SecondCard />
                <ThirdCard />                
            </div>
        </Col>
    )
}

const Service = () => {
    return (
        <Grid fluid id='serviceView--content'>
            <Row>
                <Menu />
                <ServiceContent />
            </Row>
        </Grid>
    )
}

export default Service;