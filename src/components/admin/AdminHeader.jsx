import React from 'react';
import { Link } from 'react-router-dom';

import me from '../../assets/static/Me.jpg';
import dashboard from '../../assets/static/dashboard.svg';
// import sidebarHook from '../../hooks/sidebarHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AdminHeader = () => {
    return (
        <section className="header header-dark">
            <nav className="navbar container_95">
                <div className="navbar__left_admin">
                    <div className="btn-sidebar">
                        <div className="toggle_sidebar">
                            <FontAwesomeIcon icon={["fas", "bars"]} size="lg" />
                        </div>
                    </div>
                    <Link to="/" className="navbar__left-title-small">Dashboard</Link>
                </div>
                <div className="navbar__right_admin">
                    <ul className="menu-admin">
                        <li className="navbar__right_admin-item">
                            <Link to=""><img className="icon_menu" src={dashboard} /></Link>
                        </li>
                        <li className="navbar__right_admin">
                            <Link to=""><img className="mini__avatar" src={me} /></Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </section>
    )
}

export default AdminHeader;