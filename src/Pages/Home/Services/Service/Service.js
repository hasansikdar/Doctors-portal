import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { title, description, image } = service;
    return (
        <div className='service text-secondary'>
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" />
                </PhotoView>
            </PhotoProvider>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;