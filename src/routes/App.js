import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../assets/styles/main.scss';

import routes from '../config/routes';

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/admin" component={Admin} />
//             </Switch>
//         </Router>
//     )
// }

const App = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <RouteWithSubRoutes key={index} {...route} />
                ))}
            </Switch>
        </Router>
    )
}

function RouteWithSubRoutes(route) {

    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component routes={route.routes} {...props} />}
        />
    )
}

export default App