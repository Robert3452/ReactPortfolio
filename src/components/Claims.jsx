import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Claims = () => (
    <section className="claims">
        <div className="container">
            <div className="claims__content content">
                <h3 className="content-title">I'm available for Hire</h3>
                <p className="content-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
                dignissimos et, odit reiciendis maiores commodi eum corporis ipsa illo provident voluptatem dolorem,
                    tempora eveniet animi sunt, vitae alias perferendis labore.</p>
            </div>
            <div className="claims-grid">
                <div className="claims-grid-item">
                    <FontAwesomeIcon className="claims-grid-item-title" icon={["fab", "js-square"]} />
                    <span className="claims-grid-item-subtitle">Programming</span>
                    <p className="claims-grid-item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum tempora nulla eligendi incidunt
                        cumque soluta non, porro ad saepe labore!</p>
                </div>
                <div className="claims-grid-item">
                    <FontAwesomeIcon className="claims-grid-item-title" icon={["fas", "lightbulb"]} />

                    <i className="claims-grid-item-title fas fa-lightbulb"></i>
                    <span className="claims-grid-item-subtitle">Planning</span>
                    <p className="claims-grid-item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum tempora nulla eligendi incidunt
                        cumque soluta non, porro ad saepe labore!</p>
                </div>
                <div className="claims-grid-item">
                    <FontAwesomeIcon className="claims-grid-item-title" icon={["fa", "users"]} />

                    <i className="claims-grid-item-title fa fa-users"></i>
                    <span className="claims-grid-item-subtitle">Team work</span>
                    <p className="claims-grid-item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum tempora nulla eligendi incidunt
                        cumque soluta non, porro ad saepe labore!</p>
                </div>
            </div>
        </div>
    </section>
)

export default Claims;