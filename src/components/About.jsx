import React from 'react';
import { connect } from 'react-redux';

const About = (props) => {

    const { about } = props;
    return about ? (
        <section id="about" className="about">
            <div className="container about__grid">
                <div className="about__grid__item-left">
                    <img src={about.img.url} />
                </div>
                <div className="about__grid__item-right">
                    <h3 className="about__grid__item-right-title">{about.title}</h3>
                    <p className="about__grid__item-right-content">{about.detail}</p>
                    <a target="_blank" href={about.cv_url.url} className=" btn btn-primary about__grid__item-right-btn">About me</a>
                </div>
            </div>
        </section>
    ) : <h3>Loading</h3>
}

const mapStateToProps = state => {
    return {
        about: state.about.data
    }
}

export default connect(mapStateToProps)(About);