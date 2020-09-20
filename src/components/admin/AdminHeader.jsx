import React from 'react';

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
                    <a href="/" className="navbar__left-title-small">Dashboard</a>
                </div>
                <div className="navbar__right_admin">
                    <ul className="menu-admin">
                        <li className="navbar__right_admin-item">
                            <a href=""><img className="icon_menu" src={dashboard} /></a>
                        </li>
                        <li className="navbar__right_admin">
                            <a href=""><img className="mini__avatar" src={me} /></a>
                        </li>
                    </ul>

                </div>
            </nav>
        </section>
    )
}

export default AdminHeader;