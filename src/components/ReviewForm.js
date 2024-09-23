import React from 'react'
import { useState } from 'react'

const ReviewForm = ({ addReview }) => {
    const [formData, setFormData] = useState(
        {
            destination: '',
            name: '',
            category: 'Hotel',
            review: ''
        }
    )

    // Update state to reflect form fields being filled out.

    function handleChange(e) {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        const configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:4000/reviews', configObj)
            .then((res) => res.json())
            .then((data) => {
                addReview(data);
                setFormData({ destination: '', name: '', category: 'Hotel', review: '' }); // Clear form
            });
    }



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Destination (City):
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Category:
                    <select name="category" value={formData.category} onChange={handleChange}>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                    </select>
                </label>
                <label>
                    Review:
                    <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm
