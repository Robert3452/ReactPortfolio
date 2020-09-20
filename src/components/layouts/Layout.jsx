import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

import {
    fetchUser,
    fetchPredesc,
    fetchSkills,
    fetchClaims,
    fetchPortfolio,
    fetchHitos,
    fetchAbout
} from '../../actions';

import { connect } from 'react-redux';


const Layout = (props) => {
    useEffect(() => {
        console.log(loadingUser);
        if (loadingUser == undefined || loadingUser == true) {
            props.fetchUser();
            props.fetchPredesc();
            props.fetchSkills();
            props.fetchClaims();
            props.fetchPortfolio();
            props.fetchHitos();
            props.fetchAbout();
        }
    }, []);
    const { user, routes, loadingUser } = props;

    return (!loadingUser ?
        <>
            <Header {...user} />
            {/* {children} */}
            <LoadRoutes routes={routes} />
            <Footer />
        </> : <h1>Loading</h1>
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
            ))
            }
        </Switch>
    )
}


const mapStateToProps = state => {
    // console.log(state);
    return {
        user: state.user.data,
        loadingUser: state.user.isFetching,
    }
}


const mapDispatchToProps = {
    fetchUser,
    fetchPredesc,
    fetchSkills,
    fetchClaims,
    fetchPortfolio,
    fetchHitos,
    fetchAbout
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
