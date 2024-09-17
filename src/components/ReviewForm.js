import React from 'react'
import { useState } from 'react'

const ReviewForm = () => {
    const [formData, setFormData] = useState(
        {
            destination: '',
            name: '',
            category: '',
            review: ''
        }
    )

    function handleChange(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        )
    }




    return (
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
    )
}

export default ReviewForm
