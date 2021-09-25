import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="headerStyle">
            <img src={logo} alt="" />
            <nav className="navBar">
                <a href="/shop"> Shop</a>
                <a href="/order"> Order Review</a>
                <a href="/inventory"> Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;