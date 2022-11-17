import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUr';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import VisitingCard from '../VisitingCard/VisitingCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VisitingCard></VisitingCard>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;