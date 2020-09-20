import LayoutAdmin from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';
import Home from '../containers/Home';
import AdminHome from '../components/admin/AdminHome';

import AdminSkills from '../components/admin/AdminSkills';
import AdminClaims from '../components/admin/AdminClaims';
import AdminWorks from '../components/admin/AdminWork';
import AdminHitos from '../components/admin/AdminHitos';
import AdminPredesc from '../components/admin/AdminPredesc';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true,
                name: "Admin Home"
            },
            {
                path: "/admin/skills",
                component: AdminSkills,
                exact: true,
                name: "Skills"
            },
            {
                path: "/admin/claims",
                component: AdminClaims,
                exact: true,
                name: "Claims"
            },
            {
                path: "/admin/pre-desc",
                component: AdminPredesc,
                exact: true,
                name: "Pre-Descriptions"
            },
            {
                path: "/admin/hitos",
                component: AdminHitos,
                exact: true,
                name: "Hitos"
            },
            {
                path: "/admin/works",
                component: AdminWorks,
                exact: true,
                name: "Works"
            },
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
                exact: true,
                name: "Home"
            },
        ]

    }
]

export default routes;