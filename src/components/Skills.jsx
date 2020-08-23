import React from 'react';

const Skills = ({ preDesc, children }) => {
    return (
        <section id="skills" className="container">
            <div className="content">
                <h3 className="content-title">{preDesc?.title}</h3>
                <p className="content-description">
                    {preDesc?.content}
                </p>
            </div>
            <div className="skills-grid">
                {children}

            </div>
        </section>
    )
}

export default Skills;