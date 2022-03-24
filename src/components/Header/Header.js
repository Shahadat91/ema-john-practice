import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <nav className='nav'>
                    <img src={logo} alt="" />
                    <div>
                        <a href="/about">About Us</a>
                        <a href="/contact us">Contact Us</a>
                        <a href="/order summary">Order Summary</a>
                        <a href="/manage inventory">Manage Inventory</a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;