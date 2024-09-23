import React from 'react'
import ReviewList from '../components/ReviewList';
import { useParams } from 'react-router-dom';


// Page for a specific destination once clicked.

const DestinationPage = () => {
    const { destination } = useParams();
    return (
        <div>
            <h2> Reviews for {destination} </h2>
            <h3> Hotels </h3>
            <ReviewList category="Hotel" destination={destination} />
            <h3> Restaurants </h3>
            <ReviewList category="Restaurant" destination={destination} />
        </div >
    )
}

export default DestinationPage
