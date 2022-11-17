import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import AppointmentItem from './AppointMentItem/AppointmentItem';

const AvailableAppointment = ({selectedDate}) => {
    const [AllAppointMents, setAllAppointMents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    useEffect(() => {
        fetch('AppointmentOptions.json')
        .then(res => res.json())
        .then(data => setAllAppointMents(data))
    }, [])


    return (
        <div className='available-appointment'>
            <h3 className='text-center text-info container'>Available Appointment On {format(selectedDate, 'PP')} </h3>
            <div className='all-appointments grid'>
                {
                    AllAppointMents.map((item, index) => <AppointmentItem setModalData={setModalData} setOpenModal={setOpenModal} key={index} appoinmtnetItem={item}></AppointmentItem>)
                }
            </div>
            {openModal &&
                <AppointmentModal selectedDate={selectedDate} modalData={modalData} setOpenModal={setOpenModal}></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;