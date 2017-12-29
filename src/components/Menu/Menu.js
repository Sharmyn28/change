import React from "react";
import { Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import  logo  from "../../img/icons/profile.png";
import '../../styles/css/style.css';

const Contact = () => {
    return(
        <NavLink to={"/contact"} className="chat-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="34.3" height="19.9" viewBox="0 0 34.3 19.9">
                {/*<style>
                    .st0{fill: none;stroke:#ED376B;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;} .st1{fill: none;stroke:#ED376B;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                </style>
                style={{stroke: 'rgb(255, 255, 255)'}}
                */}
                <g id="mail-icon" >
                    <g id="envelope">
                        <path id="XMLID_18_" className="st0" d="M25 16.6c0 1.2-1 2.3-2.3 2.3H3.3c-1.2 0-2.3-1-2.3-2.3V3.3C1 2 2 1 3.3 1h19.5C24 1 25 2 25 3.3"></path>
                        <path id="XMLID_17_" className="st1" d="M6.3 6l5.3 5.3c.7.7 1.9.7 2.7 0L19.5 6"></path>
                    </g>
                    <g id="mail-lines" data-svg-origin="21.700000762939453 7.599999904632568" transform="matrix(1,0,0,1,0,0)">
                        <path id="XMLID_16_" className="st1" d="M21.7 12.2h6.9"></path>
                        <path id="XMLID_15_" className="st1" d="M33.3 7.6h-7.9"></path>
                    </g>
                </g>
            </svg>
            <div className="chat-btn-label">
                Contact
            </div>
        </NavLink>
    )
}

const Menu = () => {
    return (
        <Col md={1} lg={1} id='sidenav'>
            <nav id='menu' className='sidenav'>
                <div className='logo'>
                    <Image src={logo} circle/>
                </div>
                <div id='navigation'> </div>
                <div className='title'> Work </div>
                <Contact />
            </nav>
        </Col>
    )
}

export default Menu;