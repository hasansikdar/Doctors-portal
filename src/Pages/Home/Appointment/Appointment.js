import React from 'react';
import './Appointment.css';
import doctor from '../../../assets/images/doctor-small.png';
import Button from '../../../Utilites/Button/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Appointment = () => {
    return (
        <div className='appointment'>
            <div className='flex container'>
                <div className='w-50 doctor-image'>
                    <PhotoProvider>
                        <PhotoView src={doctor}>
                            <img className='w-100' src={doctor} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className=' text-left w-50 text-white'>
                    <h4 className='text-info'>Appointment</h4>
                    <h3 className='h2 my-5'>Make an appointment Today</h3>
                    <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;