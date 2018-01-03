import React from "react";
import { Col, Image } from "react-bootstrap";
import ExtraInfo from "./ModalInfo";
import { open1, open2, open3, close1, close2, close3 } from "../../actions/actions";
import laboratoria from "../../img/icons/success/laboratoria100.png";
import cite from "../../img/icons/success/cite100.png";
import sonrisas from "../../img/icons/success/sonrisas100.jpg";
import elise from "../../img/icons/success/elise100.png";
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
                        <div className="text"> Realizamos talleres que permiten a los profesores innovar en sus clases.
                        </div>
                        {/*Nuestro programa se basa en la técnica de Class Shadowing. Diseñamos programas de entrenamiento acorde a las necesidades de cada centro educativo.
                        */}
                    </div>
                    <div className="card_inner__cta">
                        {/*<button>
                            <span>Buy now</span>
                        </button>*/}
                        <ExtraInfo showModal={showModal1}
                            open={() => open1()}
                            close={() => close1()}
                            title={'Capacitación'}
                            info={
                                <p className='justify'>Nuestro programa de capacitación de docentes se basa en la técnica de <strong className='upperCase green-text'>Class Shadowing</strong>, en la cual el participante del entrenamiento toma parte activa del dictado de clases bajo la <strong className='upperCase green-text'>guía</strong> de un docente principal. Además, trabajamos con centros educativos para identificar sus <strong className='upperCase green-text'>objetivos estratégicos</strong> y sus <strong className='upperCase green-text'>necesidades</strong> y así diseñar programas de entrenamiento para sus docentes.</p>
                            }
                            successCase={
                                <div className='wrap'>
                                    <a href="https://www.facebook.com/CITE-Textil-Cam%C3%A9lidos-Arequipa-1837777903123697/" target="_blank" rel='noopener noreferrer' ><Image src={cite} circle /></a>
                                    
                                </div>
                            }
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
                        <div className="text">Creamos programas de inglés a medidad. Tus objetivos son el centro del curso.
                        </div>
                        {/*Diseñamos cursos de inglés alineados con los objetivos personales y profesionales de los participantes del programa.
                        */}
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
                            info={
                                <p>Trabajamos de la mano con nuestros clientes para conocer sus <strong>objetivos</strong> y su <strong>trabajo</strong>. Nos basamos en la información recolectada para diseñar <strong>cursos</strong> de inglés <strong>a la medida</strong> que se alineen con los objetivos personales y profesionales de los participantes del programa.</p>
                            }
                            successCase={
                                <div className='wrap'>
                                    <a href="https://www.facebook.com/laboratoriala/" target="_blank" rel='noopener noreferrer'><Image src={laboratoria} circle /></a>
                                    <a href="https://www.facebook.com/CITE-Textil-Cam%C3%A9lidos-Arequipa-1837777903123697/" target="_blank" rel='noopener noreferrer' ><Image src={cite} circle /></a>
                                    <a href="https://www.facebook.com/lamaisondelisearequipa/" target="_blank" rel='noopener noreferrer' ><Image src={elise} circle /></a>
                                </div>
                            }
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
                        <div className="text">Apoyamos a centros educativos en la mejora de sus programas de inglés.
                       </div>
                        {/* Trabajamos con jardines y colegios del estado en los llamados "After School Programs", 
                            ofreciendo programas de inglés luego del horario de clases.
                        */}
                    </div>
                    <div className="card_inner__cta">
                        {/*<button>
                            <span>Buy now</span>
                        </button>*/}
                        <ExtraInfo showModal={showModal3}
                            open={() => open3()}
                            close={() => close3()}
                            title={'English Club'}
                            info={
                                <p>Ofrecemos programas de inglés en <strong>centros educativos</strong> luego del horario de clases. Trabajamos con jardines y colegios del estado en los llamados <strong>After School Programs</strong>. El concepto detrás de estos clubes de inmersión de inglés se basa en principios de <strong>aprendizaje ágiles</strong> y basados en proyectos.</p>
                            }
                            successCase={
                                <div className='wrap'>
                                    <a href="https://www.facebook.com/SonrisasCunaJardin/" target="_blank" rel='noopener noreferrer' ><Image src={sonrisas} circle /></a>
                                </div>
                            }
                        />
                    </div>
                </div>
            </section>
        </Col>
    )
}