import React from 'react';
import Card from './Card/Card';
import { FaClock,FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";

const VisitingCard = () => {
    const cards = [
        {
            icon: <FaClock></FaClock>,
            title: 'opening hours',
            description: 'lorem ipsum doler sim amit',
            bgColor: "primary"
        },
        {
            icon: <FaMapMarkerAlt></FaMapMarkerAlt>,
            title: 'Visiting Our Location',
            description: 'lorem ipsum doler sim amit',
            bgColor: "secondary"
        },
        {
            icon: <FaPhoneAlt></FaPhoneAlt>,
            title: 'Contac Us Now',
            description: 'lorem ipsum doler sim amit',
            bgColor: "primary"
        },
    ]
    return (
        <div className='grid'>
            {
                cards.map((card, index) => <Card key={index} card={card}></Card>)
            }
        </div>
    );
};

export default VisitingCard;