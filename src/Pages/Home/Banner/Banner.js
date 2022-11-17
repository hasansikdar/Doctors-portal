import React from 'react';
import chair from '../../../assets/images/chair.png';
import Button from '../../../Utilites/Button/Button';
import './Banner.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-content">
                <h1>You News Smile starts Here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti obcaecati distinctio nisi sit saepe nihil est reiciendis officia minus!</p>
                <Button>Get Started</Button>
            </div>
            <div className="banner-image">
                <PhotoProvider>
                    <PhotoView src={chair}>
                        <img src={chair} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default Banner;