import React from 'react';

const PreDescription = ({ title, content }) => {
    return (
        <div className="claims__content content">
            <h3 className="content-title">{title}</h3>
            <p className="content-description">{content}</p>
        </div>)
}

export default PreDescription;