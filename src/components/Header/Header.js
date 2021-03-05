import React from 'react';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
            </nav>
        </div>
    );
};

export default Header;