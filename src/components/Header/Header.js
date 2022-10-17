import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link onClick={handleLogOut} to="/">Log Out</Link>
            </div>
        </nav>
    );
};

export default Header;