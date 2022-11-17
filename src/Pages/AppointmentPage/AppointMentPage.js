import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import './AppointmentPate.css';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const AppointMentPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='appointment-page text-secondary'>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default AppointMentPage;