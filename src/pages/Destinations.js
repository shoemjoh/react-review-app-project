import React, { useEffect, useState } from 'react'
import ReviewList from '../components/ReviewList'
import DestinationTiles from '../components/DestinationTiles';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/reviews').
            then(res => res.json()).
            then(data => {
                const uniqueDestinations = [...new Set(data.map((review) => review.destination))];
                setDestinations(uniqueDestinations);
            })
    }, [])


    return (
        <div>
            <h2>Destinations</h2>
            <DestinationTiles destinations={destinations} />
        </div>
    )
}

export default Destinations
