import React from "react";
import { Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";
import  logo  from "../../img/icons/profile.png";
import '../../styles/css/style.css';


const Menu = () => {
    return (
        <Col md={1} lg={1} sm={2}  id='sidenav'>
            <Hamburger />
            <nav id='menu' className='sidenav'>
                <div className='logo'>
                    <NavLink to={'/home'}>
                        <Image src={logo} circle/>
                    </NavLink>                    
                </div>
                <div className='progress-bar' ></div>
                <Navigation />
                <div className="title">
                    <div id="jsTextWrapper"><p> HOME </p></div>
                </div>
            </nav>
            <Contact />
        </Col>
    )
}

export default Menu;