import React from 'react';
import { Link } from 'react-router-dom'

import routes from '../../config/routes';

const Sidebar = () => {
    const adminRoutes = routes[0].routes;
    return (
        <nav className="sidebar toggle ">
            <div className="sidebar-container">
                <h4 className="sidebar_title">Dashboard</h4>
                <div className="list">
                    {adminRoutes.map((route, index) => (
                        <Link to={route.path} key={index} >
                            <div className="list_item">
                                {route.name}
                            </div>
                        </Link>
                    ))}
                </div>
                <h4 className="sidebar_title">Chat </h4>
                <div className="list">
                    <a href="#">
                        <div className="list_item">
                            Signin
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Signup
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            My chat
                        </div>
                    </a>
                </div>
            </div>
        </nav>

    )
}

export default Sidebar;