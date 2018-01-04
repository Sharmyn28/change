import React from "react";

const Hamburger = () => {
    return(
        <div className="fixed-top-bar">
            <a href="/index.html"><div className="mobile-logo"></div></a>
            <div className="menu-btn">
                <a href="#" className="openbtn">
                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                        <path id="XMLID_30_" className="line line-one st0" d="M0 1h20"></path>
                        <path id="XMLID_21_" className="line line-two st0" d="M0 9h20"></path>
                        <path id="XMLID_18_" className="line line-three st0" d="M0 17h20"></path>
                    </svg>
                </a>
                <span className="menu-label">
                    Menu
            </span>
            </div>
        </div>
    )
}

export default Hamburger;