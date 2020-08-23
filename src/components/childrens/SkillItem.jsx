import React from 'react';

const SkillItem = ({ skill_name, percentage }) => {
    return (
        <div className="skills-grid-item">
            <h4 className="skills-grid-item-title">{skill_name} - {percentage}%</h4>
            <div className="progress">
                <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    )
}

export default SkillItem