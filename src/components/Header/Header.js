import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
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

                <Link to="/signup">Sign Up</Link>
                {
                    user?.uid ?
                        <Link onClick={handleLogOut} to="/">Log Out</Link>
                        :
                        <Link to="/login">Log In</Link>
                }
            </div>
        </nav>
    );
};

export default Header;