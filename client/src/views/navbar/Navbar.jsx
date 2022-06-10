import React from 'react';
import { alertIcon, bastoLogo, logoutIcon } from '../../assets';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={bastoLogo} alt="logo" />
            </div>
            <div className='navbar__logout-alert'>
                <img src={alertIcon} alt="alert-icon" />
                <img src={logoutIcon} alt="logout-icon" />
            </div>
        </div>
    )
}

export default Navbar