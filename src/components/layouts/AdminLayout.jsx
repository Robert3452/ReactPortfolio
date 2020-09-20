import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// import sidebarHook from '../../hooks/sidebarHook';

import sidebarHook from '../../hooks/sidebarHook';

import Sidebar from '../admin/Sidebar';

import AdminHeader from '../admin/AdminHeader';

const AdminLayout = (props) => {

    const { routes } = props

    sidebarHook();

    return (
        <div className="dark_theme">
            <AdminHeader />
            <Sidebar />

            <div className="sidebar-content sidebar-active">
                <div className="sidebar-content-container">
                    <div className="row">
                        <div className="card col-3">
                            <h4 className="sidebar-content-title">
                                Dashboard
                    </h4>
                            <div className="sidebar-content-date">
                                <span>Friday</span> · September 20, 2020 · 12:16 PM
                    </div>
                        </div>
                    </div>
                    <div className="presentation presentation__wrapper row row-gap30 mt-30 mb-30">
                        <div className="presentation__card card presentation__item">
                            <div className="presentation__card-left">
                                <div className="presentation__card-left-title">
                                    <h4>Manage my portfolio</h4>
                                </div>
                                <div className="presentation__card-left-body">
                                    Create, Update, Delete and View all the posts and the contents that are in my app
                                </div>
                            </div>
                            <div className="presentation__card-right">
                                <img src="./assets/img/processing-pana.svg" alt="" />
                            </div>
                        </div>
                        <div className="presentation__card card presentation__item">
                            <div className="presentation__card-left">
                                <div className="presentation__card-left-title">
                                    <h4>Enjoy my app</h4>
                                </div>
                                <div className="presentation__card-left-body">
                                    Explore and search the things you would like
                                </div>
                            </div>
                            <div className="presentation__card-right">
                                <img src="./assets/img/browser-stats-pana.svg" alt="" />
                            </div>
                        </div>
                        <div className="presentation__card card presentation__item">
                            <div className="presentation__card-left">
                                <div className="presentation__card-left-title">
                                    <h4>Watch all in this MERN Stack app</h4>
                                </div>
                                <div className="presentation__card-left-body">
                                    Some features are will enabled when you're registered as an admin
                        </div>
                            </div>
                            <div className="presentation__card-right">
                                <img src="./assets/img/windows-pana.svg" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="overview row row-gap30 mt-30 mb-30">
                        <div className="overview__card card col-2">
                            <div className="overview__card-left">
                                <h5>Page Views</h5>
                                <span>34</span>
                            </div>
                            <div className="overview__card-right">
                                <i className="icon far fa-eye"></i>
                            </div>
                        </div>
                        <div className="overview__card card col-2">
                            <div className="overview__card-left">
                                <h5>Clics on Contact</h5>
                                <span>4</span>
                            </div>
                            <div className="overview__card-right">
                                <i className="icon fas fa-sign-in-alt"></i>
                            </div>
                        </div>
                        <div className="overview__card card col-2">
                            <div className="overview__card-left">
                                <h5>Clics on My Cv</h5>
                                <span>12</span>
                            </div>
                            <div className="overview__card-right">
                                <i className="icon fas fa-hand-pointer"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function LoadRoutes(props) {
    const { routes } = props;
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}

export default AdminLayout;