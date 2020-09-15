import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Header from '../components/Header';
import Masterhead from '../components/Masterhead';
import Skills from '../components/Skills';

import Claims from '../components/Claims'
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import Timeline from '../components/Timeline';
import About from '../components/About';

import '../assets/styles/main.scss';

import {
    fetchUser,
    fetchPredesc,
    fetchSkills,
    fetchClaims,
    fetchPortfolio,
    fetchHitos,
    fetchAbout
} from '../actions';


const Home = (props) => {



    const { user, loadingUser } = props;
    useEffect(() => {
        props.fetchUser();
        props.fetchPredesc();
        props.fetchSkills();
        props.fetchClaims();
        props.fetchPortfolio();
        props.fetchHitos();
        props.fetchAbout();
    }, []);

    return (!loadingUser ? <>
        <Header {...user} />
        <Masterhead {...user} />
        <Skills />
        <Claims />
        <Portfolio />
        <Timeline />
        <About />
        <Footer />
    </> : <h1>Loading</h1>)


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);