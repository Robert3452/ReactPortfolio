import React from 'react';
import PreDesc from './childrens/PreDesc';

import SkillItem from './childrens/SkillItem';
import { fetchSkills } from '../actions';

import { connect } from 'react-redux';


const Skills = (props) => {
    const { preDesc, skills } = props;

    return (
        <section id="skills" className="container">
            {preDesc && (<PreDesc {...preDesc[0]} />)}
            <div className="skills-grid">
                {skills && skills.map((skill) => (
                    <SkillItem key={skill._id} {...skill} />
                ))}
            </div>
        </section>)
}

const mapDispatchToProps = {
    fetchSkills,
};

const mapStateToProps = (state) => {
    return {
        skills: state.skills.data,
        preDesc: state.preDesc.data,

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);