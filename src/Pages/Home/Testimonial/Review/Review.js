import React from 'react';
import './Review.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Review = ({ review }) => {
    const { content, reviewProfile, name, country } = review;
    return (
        <div className='text-left review text-secondary'>
            <p>{content}</p>
            <div className='flex review-profile text-left'>
                <div>
                    <PhotoProvider>
                        <PhotoView src={reviewProfile}>
                            <img src={reviewProfile} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;