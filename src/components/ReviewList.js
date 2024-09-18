import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

// ReviewList is a component that is rendered for both specific hotel reviews and restaurant reviews at a specific destination.

function ReviewList({ category, destination }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then((res) => res.json())
            .then((data) => {
                const filteredReviews = data.filter(
                    (review) => review.category === category && (!destination || review.destination === destination)
                );
                setReviews(filteredReviews);
            });
    }, [category, destination]);

    // Use map to loop through the reviews array, creating a Review Card if there are reviews present and returning a "no reviews available statement if not".
    return (
        <div>
            {reviews.length > 0 ? (
                reviews.map((review) => <ReviewCard key={review.id} review={review} />)
            ) : (
                <p>No {category.toLowerCase()} reviews available.</p>
            )}
        </div>
    );
}

export default ReviewList;
