import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Masterhead from '../components/Masterhead';
import Skills from '../components/Skills';

import Claims from '../components/Claims'
import Portfolio from '../components/Portfolio';
import Timeline from '../components/Timeline';
import About from '../components/About';



const Home = (props) => {



    const { user, loadingUser } = props;

    return (!loadingUser ? <>
        <Masterhead {...user} />
        <Skills />
        <Claims />
        <Portfolio />
        <Timeline />
        <About />
    </> : <h1>Loading</h1>)


}

const mapStateToProps = state => {
    return {
        user: state.user.data,
        loadingUser: state.user.isFetching,
    }
}


export default connect(mapStateToProps, null)(Home);