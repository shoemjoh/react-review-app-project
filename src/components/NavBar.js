import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/restaurants">Restaurants</Link></li>
            </div>
        </nav>

    )
}

export default NavBar
