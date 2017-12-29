import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import FormContact from "./Form";
import MenuContact from "../Menu/Menu_contact";

const Social = () => {
    return(
        <div className="wrapper">
            <a href="https://www.facebook.com/changeperu/" target="_blank" rel='noopener noreferrer' className='fb'><i className="fa fa-3x fa-facebook-square"></i></a>
            <a href="https://www.youtube.com/channel/UC6dwKWSo_7D9KWUhF8kTSLg" target="_blank" rel='noopener noreferrer' className='ytb'><i className="fa fa-3x fa-youtube-square"></i></a>
            {/*<i className="fa fa-3x fa fa-youtube-square"></i>
            <i className="fa fa-3x fa-snapchat-square"></i>*/}
        </div>
    )
}

const Extra = () => {
    return (
        <Col lg={5} md={5}>
            <h1> Contáctanos </h1>
            <p>
                Cuéntanos tus proyectos y objetivos para poder brindarte la mejor opción para tu aprendizaje.
            </p>
            <p> No olvides visitarnos en nuestras redes </p>
            <Social />
        </Col>
    )
}

const Contact = () =>{
    return(
        <Grid fluid id='contact--view'>
            <Row>
                <MenuContact />
                <Extra />
                <FormContact />
            </Row>
        </Grid>
    )
}

export default Contact;