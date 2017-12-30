import React from "react";
import { Col, Image } from "react-bootstrap";
import background from "../../img/background/back400.png";

const Initial = () => {
    return (
        <section>
            <h1> Change </h1>
            <p> cambiando la educación </p>
        </section>
    )
}

const InitalSection = () => {
    return(
        <section>
            <Col md={6} lg={6} >
                <h3> About Us. </h3>
                <p className='justified'> Buscamos mejorar la calidad de la enseñanza en el Perú. Creemos firmemente que nuestro sistema educativo
                    tiene muchos aspectos por mejorar y queremos enfocarnos en algunos de ellos. El mundo de hoy requiere que las personas tengan ciertas
                    habilidades y muchas veces, éstas, no son desarrolladas en los centros educativos. Sabemos también de la importancia del inglés y rol
                    fundamental que desempeña en el desarrollo profesional de las personas. Nuestro enfoque se centra en ayudar a las personas a aprender.</p>
            </Col>
            <Col md={6} lg={6}>
                <Image src={background} responsive/>
            </Col>
        </section>
    )
}

const Story = () => {
    return (
        <section>
            <Col lg={4} md={4} sm={4} xs={4} >
                <p> Capacitación </p>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                <p> Diseño Curricular </p>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                <p> Asesoría Educativa </p>
            </Col>
        </section>
    )
}

const Mission = () => {
    return(
        <section>
            <Col md={6} lg={6}>
                <h4> Nuestra razón de ser. </h4>
                <p> Buscamos cambiar la educación mediante la innovación de metodologías y el uso de nuevas
                    tecnologías educativas. Queremos darles la oportunidad de aprender. La educación es una fuente de oportunidades. </p>
            </Col>
            <Col md={6} lg={6}>
                <Story />
            </Col>
        </section>
    )
}


const View = () => {
    return (
        <Col md={11} lg={11} sm={12} xs={12} id='home'>
            <Initial />
            <h3>Un programa educativo debe ser flexible y adaptable</h3>
            <InitalSection />
            <Mission />
        </Col>
    )
}

export default View;