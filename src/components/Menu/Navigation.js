import React from "react";
import { NavLink } from "react-router-dom";

const Navigaton = () =>{
    return(
        <div id='navigation'>
            <ul>
                <li>
                    <div className="read-more anim-link grey-soft sp-b-sm">
                        <NavLink className="d-ib anim-link nav-link prev-page" to="/home" style={{transform: 'matrix(1, 0, 0, 1, -350, 0)'}}>
                            <span className="link-bg"></span>
                            <span className="text-span">Home</span>
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="read-more anim-link grey-soft sp-b-sm">
                        <a className="d-ib anim-link nav-link next-page" href="/work/" style={{transform: 'matrix(1, 0, 0, 1, -350, 0)'}}>
                            <span className="link-bg"></span>
                            <span className="text-span">Services</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="read-more anim-link grey-soft sp-b-sm">
                        <a className="d-ib anim-link nav-link next-page" href="/about/" style={{transform: 'matrix(1, 0, 0, 1, -350, 0)'}}>
                            <span className="link-bg"></span>
                            <span className="text-span">Changers</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="read-more anim-link grey-soft sp-b-sm">
                        <a className="d-ib anim-link nav-link next-page" href="/contact/" style={{transform: 'matrix(1, 0, 0, 1, -350, 0)'}}>
                            <span className="link-bg"></span>
                            <span className="text-span">Contact</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navigaton;