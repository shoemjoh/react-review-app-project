import React, { useEffect } from 'react'
import ReviewList from '../components/ReviewList'

const Destinations = () => {

    useEffect(() => {
        fetch('http://localhost:4000/reviews').
            then(res => res.json()).
            then(data => console.log("Fetch working"))
    }, [])

    // Render a page with a list of Destinations that have been reviewed.
    // Want to fetch the list of destinations from the json database when the page mounts. useEffect and useState?


    return (
        <div>
            Placeholder text
        </div>
    )
}

export default Destinations
