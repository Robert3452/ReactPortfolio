import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home';

import Admin from '../containers/AdminHome'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}
export default App