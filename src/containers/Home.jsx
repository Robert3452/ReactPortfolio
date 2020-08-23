import React from 'react';
import Header from '../components/Header';
import Masterhead from '../components/Masterhead';
import Skills from '../components/Skills';
import Claims from '../components/Claims';
import Timeline from '../components/Timeline';
import Portfolio from '../components/Portfolio';
import Navigation from '../hooks/navigationHook';
import About from '../components/About'
import Footer from '../components/Footer';

import '../assets/styles/main.scss';

import API_URLS from '../handlers/API';


import getUser from '../hooks/getInfo/getUser';
import getPreDesc from '../hooks/getInfo/getPredescritption';
import getSkills from '../hooks/getInfo/getSkills';
import SkillItem from '../components/childrens/SkillItem';




const Home = () => {
    let user = getUser(API_URLS.getProfile);
    let preDesc = getPreDesc(API_URLS.getPreDesc);
    let skills = getSkills(API_URLS.getSkills);
    
    const sections = ['skills', "claims", "portfolio"]
    const findPredesc = (section, element) => {
        if (element['section'] === section)
            return element
    }

    preDesc = preDesc?.map((el, index) => {
        return findPredesc(sections[index], el);
    });

    Navigation();
    return (
        <div >
            <Header {...user} />
            <Masterhead {...user} />
            <Skills preDesc={preDesc[0]} >
                {skills.map((skill) => (
                    <SkillItem key={skill._id} {...skill} />
                ))}
            </Skills>
            <Claims preDesc={preDesc[1]} />
            <Portfolio preDesc={preDesc[2]} />
            <Timeline />
            <About />
            <Footer />
        </div>
    );
}


export default Home;