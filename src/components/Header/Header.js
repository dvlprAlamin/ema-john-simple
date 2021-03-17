import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import { signOutHandler } from '../LoginManager/LoginManager';
import './Header.css';
const Header = () => {
    const {loggedUser,setLoggedUser,setUser} = useContext(UserContext);
    const signOut = () => {
        signOutHandler()
        .then(res => {
            setLoggedUser(false);
            setUser(res)
        })
    }
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
                {loggedUser || <span><Link to="/login"><Button 
                variant="contained"
                color="primary">
                Log in</Button></Link>
                <Link to="/signup"><Button 
                variant="contained"
                color="primary">
                Sign up</Button></Link></span>}
                {loggedUser && <Button 
                onClick={signOut} 
                variant="contained"
                color="primary">
                Sign out</Button>}
            </nav>
        </div>
    );
};

export default Header;