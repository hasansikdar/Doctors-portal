import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaUserAlt, FaSignInAlt, FaQuestionCircle, FaTools, FaSignOutAlt, FaAngleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContextProvider } from '../../../AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Header = () => {
    const handleToggle = () => {
        const togglenav = document.getElementById('toggleNav').classList.toggle('open-menu');
    }
    const { user, logout } = useContext(AuthContextProvider);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';
    const navigate = useNavigate();
    const handleLogout = () => {
        const agree = window.confirm('Are you sure you want Sign Out ?')
        if (agree) {
            logout()
                .then(res => {
                    toast.success('logout success')
                    navigate(from, { replace: true })
                })
                .catch(error => toast(error.message));
        }
    }


    const navbar = <>
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/appointment'>Appointment</Link>
            </li>
            <li>
                <Link to='/'>Reviews</Link>
            </li>
            <li>
                <Link to='/'>Contact Us</Link>
            </li>
        </ul>
    </>


    return (
        <div className='header'>
            <nav>
                <label htmlFor="">
                    <Link to='/'><h1>Doctors Portal</h1></Link>
                </label>
                <div className='menu-items'>
                    <div className='menu-menu'>
                        {navbar}
                    </div>
                    <div className='user-profile'>
                        {user?.email ?<img onClick={handleToggle} src={user?.photoURL} alt="" />: <FaUserAlt onClick={handleToggle}></FaUserAlt>}
                    </div>
                </div>
                <div className='sub-menu-wrap' id='toggleNav'>
                    <div className="sub-menu">

                        <div>
                            {user?.email ?
                                <>
                                    <div className='user-profile'>
                                        <PhotoProvider>
                                            <PhotoView src={user?.photoURL}>
                                                <img src={user?.photoURL} alt="" />
                                            </PhotoView>
                                        </PhotoProvider>
                                        <h3>{user?.displayName}</h3>
                                    </div>
                                    <hr />
                                    <Link to='/profile' href="#" className='sub-menu-link'>
                                        <span><FaUserAlt></FaUserAlt></span>
                                        <p>Edit Profile</p>
                                        <FaAngleRight></FaAngleRight>
                                    </Link>
                                    <Link href="#" className='sub-menu-link'>
                                        <span><FaTools></FaTools></span>
                                        <p>Setting</p>
                                        <FaAngleRight></FaAngleRight>
                                    </Link>
                                    <Link href="#" className='sub-menu-link'>
                                        <span><FaQuestionCircle></FaQuestionCircle></span>
                                        <p>Help & Support</p>
                                        <FaAngleRight></FaAngleRight>
                                    </Link>
                                    <Link onClick={handleLogout} className='sub-menu-link'>
                                        <span><FaSignOutAlt></FaSignOutAlt></span>
                                        <p>Logout</p>
                                        <FaAngleRight></FaAngleRight>
                                    </Link>
                                </>
                                :
                                <Link to='/login' className='sub-menu-link'>
                                    <span><FaSignOutAlt></FaSignOutAlt></span>
                                    <p>Login</p>
                                    <FaSignInAlt></FaSignInAlt>
                                </Link>
                            }
                        </div>
                        <div className='sub-menu-menu'>
                            {navbar}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;