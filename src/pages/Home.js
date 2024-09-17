import ReviewForm from '../components/ReviewForm';
import { useState } from 'react';

function Home() {
    const [reviews, setReviews] = useState([]);

    function addReview(newReview) {
        setReviews([...reviews, newReview]);
    }

    return (
        <div>
            <h2>Submit a Review</h2>
            <ReviewForm addReview={addReview} />
        </div>
    );
}

export default Home;

