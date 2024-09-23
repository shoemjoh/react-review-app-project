import React from 'react'

const ReviewCard = ({ review }) => {

    return (
        <div className="review-card">
            <h3>{review.name}</h3>
            <p> Location: {review.destination}</p>
            <p> {review.review}</p>
        </div>
    )
}

export default ReviewCard
