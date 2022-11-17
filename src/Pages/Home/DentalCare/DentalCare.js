import React from 'react';
import tretment from '../../../assets/images/treatment.png';
import Button from '../../../Utilites/Button/Button';
import './DentalCare.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const DentalCare = () => {
    return (
        <div className='dentalcare flex'>
            <div className='dentalcare-image'>
                <PhotoProvider>
                    <PhotoView src={tretment}>
                        <img src={tretment} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='dentalcare-content text-secondary'>
                <h2>Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </div>
    );
};

export default DentalCare;