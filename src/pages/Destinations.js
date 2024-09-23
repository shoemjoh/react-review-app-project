import React, { useEffect, useState } from 'react'
import ReviewList from '../components/ReviewList'

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/reviews').
            then(res => res.json()).
            then(data => (data) => {
                const uniqueDestinations = [...new Set(data.map((review) => review.destination))];
                setDestinations(uniqueDestinations);
            })
    }, [])

    // Render a page with a list of Destinations that have been reviewed.
    // Want to fetch the list of destinations from the json database when the page mounts (useEffect)
    // Map through each destination and render it to the page (this has already been done with destination tiles)


    return (
        <div>
            Placeholder text
        </div>
    )
}

export default Destinations
