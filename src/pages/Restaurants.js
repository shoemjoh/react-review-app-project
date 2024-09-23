import React from 'react'
import ReviewList from '../components/ReviewList'

const Restaurants = () => {
    return (
        <div>
            <h2>Restaurant Reviews</h2>
            <ReviewList category={"Restaurant"} />
        </div>
    )
}

export default Restaurants
