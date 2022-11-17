import React from 'react';
import qutetion from '../../../assets/icons/quote.svg';
import Review from './Review/Review';
import './Testimonial.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas corporis quibusdam veritatis incidunt expedita quos porro et repudiandae quo.",
            reviewProfile: "https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=553&q=80",
            name: "winson Herry",
            country: 'Califonia',
        },
        {
            id: 2,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas corporis quibusdam veritatis incidunt expedita quos porro et repudiandae quo.",
            reviewProfile: "https://images.unsplash.com/photo-1608494603682-913a9e8abee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=554&q=80",
            name: "winson Herry",
            country: 'Califonia',
        },
        {
            id: 3,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas corporis quibusdam veritatis incidunt expedita quos porro et repudiandae quo.",
            reviewProfile: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "winson Herry",
            country: 'Califonia',
        },
    ]
    return (
        <div className='testimonial'>
            <div className="testimonial-header container flex">
                <div className='text-left '>
                    <h4 className='text-info'>Testimonial</h4>
                    <h3 className='text-secondary h2'>What Our Patients Says</h3>
                </div>
                <div className='qutetion'>
                    <PhotoProvider>
                        <PhotoView src={qutetion}>
                            <img src={qutetion} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
            <div className="testimonial-cards grid">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;