import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ names, lastnames }) => {
    return (
        <section className="header" >
            <nav className="navbar container">
                <div className="navbar__left">
                    <a href="/" className="navbar__left-title">{names || "Logo"} {lastnames} </a>
                </div>
                <div className="navbar__right">
                    <ul className="menu">
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#skills">Skills</a></li>
                        <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
                        <li className="menu-item"><a href="#timeline">timeline</a></li>
                        <li className="menu-item"><a href="#about">About</a></li>
                    </ul>
                </div>
                <div className="btn-menu">
                    <FontAwesomeIcon icon="bars" />
                </div>
            </nav>
        </section>
    )
}

export default Header;