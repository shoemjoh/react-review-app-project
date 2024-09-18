import React from 'react'
import { useParams } from 'react-router-dom';

const DestinationPage = () => {
    const { destination } = useParams();
    return (
        <div>
            <h2> Reviews for {destination} </h2>
            <h3> Hotels </h3>
            <ReviewList category="Hotel" destination={destination} />
            <h3> Restaurants </h3>
            <ReviewList category="Restuarant" destination={destination} />
        </div >
    )
}

export default DestinationPage
