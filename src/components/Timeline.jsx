import React from 'react';
import Hito from './childrens/Hito';
import { connect } from 'react-redux'

const Timeline = (props) => {
    let { hitos } = props;
    if (hitos) {
        let exp = hitos.filter((item) => (item.type === "Experience"))
        let edu = hitos.filter((item) => (item.type === "Education"))
        return (
            <section id="timeline" className="timeline">
                <div className="container">
                    <div className="timeline__grid">
                        <div className="timeline__grid__item">
                            <h3 className="timeline__grid__item-title">Experiences</h3>
                            {exp.map((item) => (
                                <Hito key={item._id} {...item} />
                            ))}
                        </div>
                        <div className="timeline__grid__item">
                            <h3 className="timeline__grid__item-title">Education</h3>
                            {edu.map((item) => {
                                return <Hito key={item._id} {...item} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <h3>Loading...</h3>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        hitos: state.hitos.data
    }
}


export default connect(mapStateToProps)(Timeline);