import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import './AppointmentBanner.css';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({setSelectedDate, selectedDate}) => {
    

    return (
        <div className='container appointment-banner flex'>
            <div className='calender w-50'>
                <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                ></DayPicker>
            </div>
            <div className='w-50'>
                <img className='' src={chair} alt="" />
            </div>
        </div>
    );
};

export default AppointmentBanner;