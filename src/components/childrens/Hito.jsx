import React from 'react';

const Hito = ({ title, content, range_date }) => {
    return (
        <div className="node">
            <span className="node-date">{range_date}</span>
            <h4 className="node-title">{title}</h4>
            <p className="node-description">{content}</p>
            <hr />
        </div>

    )
}
export default Hito;