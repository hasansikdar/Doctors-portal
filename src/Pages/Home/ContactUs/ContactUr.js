import React from 'react';
import Button from '../../../Utilites/Button/Button';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <h3 className='text-info'>Contact Us</h3>
            <h2 className='text-white h2'>Stay Connected With Us</h2>
            <div className='contact my-5 text-secondary'>
                <form action="">
                    <input type="email" placeholder='Email Address'/>
                    <input type="text" placeholder='Subject' />
                    <textarea placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
                    <Button>Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;