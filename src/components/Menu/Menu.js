import React from "react";
import { Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import  logo  from "../../img/icons/profile.png";
import '../../styles/css/style.css';


const Menu = () => {
    return (
        <Col md={1} lg={1} sm={2}  id='sidenav'>
            <nav id='menu' className='sidenav'>
                <div className='logo'>
                    <NavLink to={'/home'}>
                        <Image src={logo} circle/>
                    </NavLink>
                </div>
                <div id='navigation'> </div>
                <div className='title'> Work </div>
                <Contact />
            </nav>
        </Col>
    )
}

export default Menu;