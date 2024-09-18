import React from 'react'
import ReviewList from '../components/ReviewList'

const Hotels = () => {
    return (
        <div>
            <h2>Hotel Reviews</h2>
            <ReviewList category={"hotels"} />
        </div>
    )
}

export default Hotels
