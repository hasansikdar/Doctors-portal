import React from 'react';
import treth from '../../../assets/images/fluoride.png';
import cabity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service/Service';
import './Services.css';

const Services = () => {

    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: treth,
        },
        {
            id: 2,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: cabity,
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: whitening,
        }
    ]

    return (
        <div className='services'>
            <div className='services-title'>
                <h3 className='info'>OUR SERVICES</h3>
                <h2 className='text-secondary'>Services We Provide</h2>
            </div>
            <div className='grid'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;