import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="company-name">
                <h1>930res</h1>
            </div>
            <div className="nav-center">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destinations">Destinations</Link></li>
                    <li><Link to="/hotels">Hotels</Link></li>
                    <li><Link to="/restaurants">Restaurants</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

