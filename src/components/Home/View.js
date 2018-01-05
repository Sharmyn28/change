import React from "react";
import { Col, Image, OverlayTrigger, Popover } from "react-bootstrap";
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
    return (
        <section className='center'>
            <Col md={6} lg={6} sm={7}>
                <h3> About Us. </h3>
                <p className='justify'> Buscamos mejorar la calidad de la enseñanza en el Perú. Creemos firmemente que nuestro sistema educativo
                    tiene muchos aspectos por mejorar y queremos enfocarnos en algunos de ellos. El mundo de hoy requiere que las personas tengan ciertas
                    habilidades y muchas veces, éstas, no son desarrolladas en los centros educativos. Sabemos también de la importancia del inglés y rol
                    fundamental que desempeña en el desarrollo profesional de las personas. Nuestro enfoque se centra en ayudar a las personas a aprender.</p>
            </Col>
            <Col md={6} lg={6} sm={5}>
                <Image src={background} responsive />
            </Col>
        </section>
    )
}

const Circle = ({ id, title, info, name }) => {
    /**
     * var divStyle = {
        color: 'white',
        backgroundImage: 'url(' + imgUrl + ')',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    }
    */

    const style = {
        fontSize: '12px'
    }
    return (
        <OverlayTrigger placement='bottom' overlay={<Popover id={id} title={title} className='justify' style={style} > {info} </Popover>} trigger={['hover', 'focus']} >
            <div className='about--story__circle'>
                <i className={name} ></i>
            </div>
        </OverlayTrigger>
    )
}

const Story = () => {
    return (
        <section>
            <Col lg={4} md={4} sm={4} xs={4} >
                {/*<p> Capacitación </p>*/}
                <Circle id='1' title='Capacitación' info='Existen en nuestro país muchos docentes que necesitan ser capacitados pero no tienen acceso a talleres o cursos de calidad y que estén a su alcance.' name="fa fa-wrench" />
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                {/*<p> Diseño Curricular </p>*/}
                <Circle id='2' title='Diseño Curricular' info='El inglés es una necesidad hoy en día. Muchas veces los programas tradicionales no se alinean a los objetivos de los estudiantes.' name='fa fa-pencil-square-o' />
            </Col>
            <Col lg={4} md={4} sm={4} xs={4}>
                {/*<p> Asesoría Educativa </p>*/}
                <Circle id='3' title='Asesoría Educativa' info='Muchos centros educativos cuentan con tecnología que no saben aprovechar al máximo. Otros, están buscando innovar.' name='fa fa-commenting-o' />
            </Col>
        </section>
    )
}

const Mission = () => {
    return (
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
        <Col md={11} lg={11} sm={10} xs={12} id='home'>
            <Initial />
            <h3>Un programa educativo debe ser flexible y adaptable</h3>
            <InitalSection />
            <Mission />
        </Col>
    )
}

export default View;