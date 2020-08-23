import React from 'react';
import ProfileJpg from '../assets/static/Me.jpg';


const Masterhead = ({ names, lastnames, ocupation }) => {

    return (
        <section className="masterhead" >
            <div className="masterhead__container container">
                <div className="avatar">
                    <img src={ProfileJpg} alt="" />
                </div>
                <div className="presentation">
                    <h1>Hello, I'm {names || "name"} {lastnames || "lastname"}</h1>
                </div>
                <div className="profession">
                    <h3>{ocupation || "ocupation"}</h3>
                </div>
            </div>
        </section>
    )
}

export default Masterhead;