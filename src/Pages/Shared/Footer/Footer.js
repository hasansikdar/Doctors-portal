import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='flex footer-links text-left text-secondary'>
                    <ul>
                        <li>
                            <h3>SERVICE</h3>
                        </li>
                        <li>
                            <Link>Emergency Checkup</Link>
                        </li>
                        <li>
                            <Link>Monthly Checkup</Link>
                        </li>
                        <li>
                            <Link>Weekly Checkup</Link>
                        </li>
                        <li>
                            <Link>Deep Checkup</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>ORAL HEALTH</h3>
                        </li>
                        <li>
                            <Link>Fluoride Treatment</Link>
                        </li>
                        <li>
                            <Link>Cavity Filling</Link>
                        </li>
                        <li>
                            <Link>Weekly Checkup</Link>
                        </li>
                        <li>
                            <Link>Teath Whitening</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>OUR ADDRESS</h3>
                        </li>
                        <li>
                            <Link>New York - 101010 Hudson</Link>
                        </li>
                    </ul>
                </div>
                <p className='text-secondary'>&copy; Copyright Muahmmad Hasan || 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;