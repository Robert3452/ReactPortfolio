import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClaimItem = ({ icon_claim, title, content }) => {
    return (
        <div className="claims-grid-item">
            <FontAwesomeIcon className="claims-grid-item-title" icon={icon_claim} />
            <span className="claims-grid-item-subtitle">{title}</span>
            <p className="claims-grid-item-description">{content}</p>
        </div>
    )
}

export default ClaimItem;