import React from 'react';

import './Card.css';

const Card = ({card}) => {
    const {title, description, icon, bgColor} = card;
    return (
        <div className={`card ${bgColor}`}>
            <div className='card-icon'>
                {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;