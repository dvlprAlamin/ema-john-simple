import React, { useContext } from 'react';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
// import { AuthProvider } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    // const [loggedUser] = useContext(AuthProvider);
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
                {/* {loggedUser && <button>Sign out</button>} */}
            </nav>
        </div>
    );
};

export default Header;