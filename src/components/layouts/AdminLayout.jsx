import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
                    <LoadRoutes routes={routes} />
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