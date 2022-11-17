import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import './AppointmentModal.css';

const AppointmentModal = ({ setOpenModal, modalData, selectedDate }) => {
    const { name, slots } = modalData;
    const date = format(selectedDate, 'PP');
    

    const handleBookAppointment = event => {
        const agree = window.confirm('Are you Sure Confirm Booked Appointment');
        if (agree) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const phoneNumber = form.phoneNumber.value;
            const email = form.email.value;
            const time = form.time.value;
            const bookedAppointment = {
                name,
                phoneNumber,
                email,
                time,
                selectedDate: date,
            }
            console.log(bookedAppointment)
            setOpenModal(false)
            toast.success('Appointment Booked');
        }
    }


    return (
        <div>
            <div className="modalBackground">
                <div className="modalContainer text-secondary">
                    <form onSubmit={handleBookAppointment} action="">
                        <div className="modalTitle">
                            <h3>{name}</h3>
                            <button onClick={() => setOpenModal(false)} className=''>X</button>
                        </div>
                        <div className="modalbody">
                            <input disabled value={date} type="text" />
                            <select required name="time" id="">
                                {
                                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input required name='name' placeholder='Full Name' type="text" />
                            <input required name='phoneNumber' placeholder='Phone Number' type="text" />
                            <input required name="email" placeholder='Email' type="email" />
                        </div>
                        <div className="modalfooter">
                            <button id='submitButton' className='SubmitBtn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;