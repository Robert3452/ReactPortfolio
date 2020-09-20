import LayoutAdmin from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';
import Home from '../containers/Home';
import AdminHome from '../containers/AdminHome';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            }
        ]
    },
    {
        path: "/",
        component: Layout,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
        ]

    }
]

export default routes;