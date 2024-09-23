import React from 'react';
import { Link } from 'react-router-dom';

const DestinationTiles = ({ destinations }) => {
    return (
        <div className='destination-tiles'>
            {destinations.map((destination, index) => (
                <div key={index} className="destination-tile">
                    {/* Link to the destination page */}
                    <Link to={`/destinations/${destination}`}>
                        <h3>{destination}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default DestinationTiles;