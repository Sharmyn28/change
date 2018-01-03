import React from "react";
import { Col } from "react-bootstrap";
import ExtraInfo from "./ModalInfo";
import { open1, open2, open3, close1, close2, close3 } from "../../actions/actions";
/*{() => close()}*/

export const FirstCard = ({ showModal1 }) => {
    return (
        <Col lg={4} md={4} sm={12} xs={12}>
            <section className="card">
                <div className="card_inner">
                    <div className="card_inner__circle">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rocket.png" alt='rocket' />
                    </div>
                    <div className="card_inner__header">
                        <img src="http://www.pixeden.com/media/k2/galleries/343/002-city-vector-background-town-vol2.jpg" alt='city' />
                    </div>
                    <div className="card_inner__content">
                        <div className="title">Capacitación</div>
                        {/*<div className="price">$19.99</div>*/}
                        <div className="text">Nuestro programa se basa en la técnica de Class Shadowing. Diseñamos programas de entrenamiento acorde a las necesidades de cada centro educativo.
                        </div>
                    </div>
                    <div className="card_inner__cta">
                        {/*<button>
                            <span>Buy now</span>
                        </button>*/}
                        <ExtraInfo showModal={showModal1}
                            open={()=> open1()}
                            close={()=> close1()}
                            title={'Capacitación'}
                            info={'Nuestro programa de capacitación de docentes se basa en la técnica de Class Shadowing, en la cual el participante del entrenamiento toma parte activa del dictado de clases bajo la guía de un docente principal. Además, trabajamos con centros educativos para identificar sus objetivos estratégicos y sus necesidades y así diseñar programas de entrenamiento para sus docentes.'}
                        />  
                    </div>
                </div>
            </section>
        </Col>
    )
}

export const SecondCard = ({ showModal2 }) => {
    return (
        <Col lg={4} md={4} sm={12} xs={12}>
            <section className="card">
                <div className="card_inner">
                    <div className="card_inner__circle">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cog.png" alt='cog' />
                    </div>
                    <div className="card_inner__header">
                        <img src="http://4vector.com/i/free-vector-modern-city_093317_bluecity.jpg" alt='bluecity' />
                    </div>
                    <div className="card_inner__content">
                        <div className="title">Inglés para propósitos específicos</div>
                        {/*<div className="price">$49.99</div>*/}
                        <div className="text">Diseñamos cursos de inglés alineados con los objetivos personales y profesionales de los participantes del programa.
                        </div>
                    </div>
                    <div className="card_inner__cta">
                        {/*<button>
                            <span>
                                <a href="" target="_blank" rel='noopener noreferrer'>Contactanos</a>
                            </span>
                        </button>*/}
                        <ExtraInfo showModal={showModal2}
                            open={() => open2()}
                            close={() => close2()}
                            title={'Inglés para propósitos específicos'}
                            info={'Trabajamos de la mano con nuestros clientes para conocer sus objetivos y su trabajo. Nos basamos en la información recolectada para diseñar cursos de inglés a la medida que se alineen con los objetivos personales y profesionales de los participantes del programa.'}
                        />
                    </div>
                </div>
            </section>
        </Col>
    )
}

export const ThirdCard = ({ showModal3 }) => {
    return (
        <Col lg={4} md={4} sm={12} xs={12}>
            <section className="card">
                <div className="card_inner">
                    <div className="card_inner__circle">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/paperplane.png" alt='plane' />
                    </div>
                    <div className="card_inner__header">
                        <img src="http://7428.net/wp-content/uploads/2013/06/Forest-Creek.jpg" alt='forest' />
                    </div>
                    <div className="card_inner__content">
                        <div className="title">English Club</div>
                        {/*<div className="price">$89.99</div>*/}
                        <div className="text">Trabajamos con jardines y colegios del estado en los llamados "After School Programs", 
                            ofreciendo programas de inglés luego del horario de clases.
                       </div>
                    </div>
                    <div className="card_inner__cta">
                        {/*<button>
                            <span>Buy now</span>
                        </button>*/}
                        <ExtraInfo showModal={showModal3}
                            open={() => open3()}
                            close={() => close3()}
                            title={'English Club'}
                            info={'Ofrecemos programas de inglés en centros educativos luego del horario de clases. Trabajamos con jardines y colegios del estado en los llamados "After School Programs". El concepto detrás de estos clubes de inmersión de inglés se basa en principios de aprendizaje ágiles y basados en proyectos.'}
                        />
                    </div>
                </div>
            </section>
        </Col>
    )
}