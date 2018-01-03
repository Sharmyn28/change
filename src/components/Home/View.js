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
        <section className='center'>
            <Col md={6} lg={6} sm={7}>
                <h3> About Us. </h3>
                <p className='justify'> Buscamos mejorar la calidad de la enseñanza en el Perú. Creemos firmemente que nuestro sistema educativo
                    tiene muchos aspectos por mejorar y queremos enfocarnos en algunos de ellos. El mundo de hoy requiere que las personas tengan ciertas
                    habilidades y muchas veces, éstas, no son desarrolladas en los centros educativos. Sabemos también de la importancia del inglés y rol
                    fundamental que desempeña en el desarrollo profesional de las personas. Nuestro enfoque se centra en ayudar a las personas a aprender.</p>
            </Col>
            <Col md={6} lg={6} sm={5}>
                <Image src={background} responsive/>
            </Col>
        </section>
    )
}

const Circle = ({name}) => {
    return(
        <div className='about--story__circle '>
            <i className={name} ></i>
        </div>
    )
}

const Story = () => {
    return (
        <section>
            <Col lg={4} md={4} sm={4} xs={4} >
                {/*<p> Capacitación </p>*/}
                <Circle name="fa fa-wrench"/>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                {/*<p> Diseño Curricular </p>*/}
                <Circle name='fa fa-pencil-square-o'/>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                {/*<p> Asesoría Educativa </p>*/}
                <Circle name='fa fa-commenting-o'/>
            </Col>
        </section>
    )
}

const Mission = () => {
    return(
        <section>
            <Col md={6} lg={6} className='justify'>
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
        <Col  id='home'>
            <Initial />
            <h3>Un programa educativo debe ser flexible y adaptable</h3>
            <InitalSection />
            <Mission />
        </Col>
    )
}

export default View;