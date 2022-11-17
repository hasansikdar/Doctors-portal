import React from 'react';
import { Button } from 'react-day-picker';

const AppointmentItem = ({appoinmtnetItem, setOpenModal, setModalData}) => {
    const {name, slots} = appoinmtnetItem;
    return (
        <div className='appointmentItems'>
           <h3 className='text-center text-info'>{name}</h3>
           <p className='my-5'>{slots.length > 0 ? slots[0]: "No Time Available"}</p>
           <p className='my-5'>{slots.length} {slots.length > 2 ? "SPACES": "SPACE"} AVILABLE</p>
           <button disabled={slots.length === 0} onClick={() => {setOpenModal(true); setModalData(appoinmtnetItem)}} className='btn'>Book Appointment</button>
        </div>
    );
};

export default AppointmentItem;