import React from 'react'
import ReviewList from '../components/ReviewList'
import { useEffect } from 'react'

const Destinations = () => {

    useEffect(() => {
        console.log('Use Effect hook working')
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
